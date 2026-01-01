"use client";
import Layout from "@/components/layout/Layout";
import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useCallback,
} from "react";
import {
  createInterview,
  getInterviews,
  cancelInterview,
  type Interview,
  AREAS_OF_IMPACT,
  SPIRITUAL_ORIENTATIONS,
  INTERVIEW_INTENTS,
  INTERVIEW_TIME_ZONES,
  type CreateInterviewPayload,
} from "@/hooks/interview";
import { toast } from "sonner";

type InterviewFormState = {
  fullName: string;
  email: string;
  country: string;
  profession: string;
  impactAreas: string[];
  affiliation: string;
  tariqa: string;
  role: string;
  hasPublicVoice: string;
  website: string;
  interviewGoals: string[];
  interviewDate: string;
  interviewTime: string;
  tone: string;
  additionalNotes: string;
};

const defaultState: InterviewFormState = {
  fullName: "",
  email: "",
  country: "",
  profession: "",
  impactAreas: [],
  affiliation: "",
  tariqa: "",
  role: "",
  hasPublicVoice: "",
  website: "",
  interviewGoals: [],
  interviewDate: "",
  interviewTime: "",
  tone: "",
  additionalNotes: "",
};

interface SaturdayOption {
  date: string;
  formatted: string;
}

const InterviewForm = () => {
  const [formState, setFormState] = useState<InterviewFormState>(defaultState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof InterviewFormState, string>>
  >({});
  const [availableSaturdays, setAvailableSaturdays] = useState<
    SaturdayOption[]
  >([]);
  const [existingInterviews, setExistingInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingInterview, setLoadingInterview] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchInterviews = useCallback(async () => {
    try {
      setLoadingInterview(true);
      const interviews = await getInterviews();
      setExistingInterviews(interviews);
    } catch (err) {
      console.error("Error fetching interviews:", err);
    } finally {
      setLoadingInterview(false);
    }
  }, []);
  // Fetch existing interviews on component mount
  useEffect(() => {
    fetchInterviews();
  }, [fetchInterviews]);

  // Set up available Saturdays and default date on component load
  useEffect(() => {
    const saturdays = getAvailableSaturdays();
    setAvailableSaturdays(saturdays);

    // Set default date to the next Saturday and default time to 10:00 AM
    if (saturdays.length > 0) {
      setFormState((prev) => ({
        ...prev,
        interviewDate: saturdays[0].date,
        interviewTime: "10:00",
      }));
    }
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // If changing date or time, validate it immediately
    if (name === "interviewDate" || name === "interviewTime") {
      validateDateOrTime(name, value);
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormState((prev) => {
      const updatedList = checked
        ? [...(prev[name as keyof InterviewFormState] as string[]), value]
        : (prev[name as keyof InterviewFormState] as string[]).filter(
            (item) => item !== value
          );
      return { ...prev, [name]: updatedList };
    });
  };

  const handleCancelInterview = async (id: string) => {
    try {
      await cancelInterview(id);
      setSuccessMessage("Interview cancelled successfully");
      // Refresh the interviews list
      await fetchInterviews();
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setApiError("Failed to cancel interview");
      setTimeout(() => setApiError(""), 3000);
    }
  };

  // Helper function to get available Saturdays for the next few weeks
  const getAvailableSaturdays = (): SaturdayOption[] => {
    const saturdays: SaturdayOption[] = [];
    const today = new Date();
    const startDate = new Date(today);

    // Start from today, find next 4 Saturdays
    for (let i = 0; i < 28; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      if (date.getDay() === 6) {
        // 6 is Saturday
        saturdays.push({
          date: date.toISOString().split("T")[0],
          formatted: date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
          }),
        });

        if (saturdays.length >= 4) break;
      }
    }

    return saturdays;
  };

  // Validate date or time field
  const validateDateOrTime = (name: string, value: string): boolean => {
    let errorMessage = "";

    if (name === "interviewDate" && value) {
      const selectedDate = new Date(value);
      const day = selectedDate.getDay();

      // Check if selected day is Saturday (6)
      if (day !== 6) {
        errorMessage = "Interviews are only available on Saturdays";
      }
    }

    if (name === "interviewTime" && value) {
      const [hours, minutes] = value.split(":").map(Number);
      const timeInMinutes = hours * 60 + minutes;

      // Check if time is between 10:00 AM and 2:00 PM
      if (timeInMinutes < 10 * 60 || timeInMinutes > 14 * 60) {
        errorMessage =
          "Interviews are only available between 10:00 AM and 2:00 PM EST";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));

    return errorMessage === "";
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof InterviewFormState, string>> = {};

    if (!formState.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formState.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formState.country.trim()) newErrors.country = "Country is required.";
    if (!formState.profession.trim())
      newErrors.profession = "Profession is required.";
    if (!formState.impactAreas.length)
      newErrors.impactAreas = "Select at least one impact area.";
    if (!formState.tariqa)
      newErrors.tariqa = "Select your spiritual orientation.";
    if (!formState.hasPublicVoice)
      newErrors.hasPublicVoice = "Please answer this question.";
    if (!formState.interviewGoals.length)
      newErrors.interviewGoals = "Select at least one interview goal.";

    // Date and time validation with custom restrictions
    if (!formState.interviewDate) {
      newErrors.interviewDate = "Interview date is required.";
    } else {
      const dateValid = validateDateOrTime(
        "interviewDate",
        formState.interviewDate
      );
      if (!dateValid) {
        newErrors.interviewDate =
          errors.interviewDate || "Invalid interview date.";
      }
    }

    if (!formState.interviewTime) {
      newErrors.interviewTime = "Interview time is required.";
    } else {
      const timeValid = validateDateOrTime(
        "interviewTime",
        formState.interviewTime
      );
      if (!timeValid) {
        newErrors.interviewTime =
          errors.interviewTime || "Invalid interview time.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setApiError("");
      setSuccessMessage("");

      try {
        // Combine date and time into a single datetime string
        const scheduledAt = new Date(
          `${formState.interviewDate}T${formState.interviewTime}:00`
        );

        // Debug: Log the data being sent
        console.log("Form state:", formState);
        console.log("Scheduled At:", scheduledAt.toISOString());

        // Helper function to convert form values to backend enum values
        const mapAreasOfImpact = (
          areas: string[]
        ): (typeof AREAS_OF_IMPACT)[number][] => {
          const mapping: { [key: string]: (typeof AREAS_OF_IMPACT)[number] } = {
            "Spiritual Leadership": "SPRITUAL_LEADERSHIP",
            "Transformative Education": "TRANS_EDUCATIVE",
            "Integrative Health": "INTEGRATIVE_HEALTH",
            "Ethical Justice": "ETHICAL_JUSTICE",
            "Scientific Consciousness": "SCIENTIFIC_CONCIOUSNESS",
            "Cultural Expression": "CULTURAL_EXPRESSION",
            "Eco Stewardship": "ECO_STEWARD",
            "Unity Dialogue": "UNITY_DIALOGUE",
            "Policy Reform": "POLICY_REFORM",
            "Youth Empowerment": "YOUTH_EMPOWERMENT",
          };
          return areas
            .map((area) => mapping[area])
            .filter(Boolean) as (typeof AREAS_OF_IMPACT)[number][];
        };

        const mapSpiritualOrientation = (
          orientation: string
        ): (typeof SPIRITUAL_ORIENTATIONS)[number] => {
          const mapping: {
            [key: string]: (typeof SPIRITUAL_ORIENTATIONS)[number];
          } = {
            Sufi: "SUFI",
            Freethinker: "FREE_THINKER",
            "Not Affiliated": "NOT_AFFLIATED",
          };
          return mapping[orientation];
        };

        const mapInterviewGoals = (
          goals: string[]
        ): (typeof INTERVIEW_INTENTS)[number][] => {
          const mapping: { [key: string]: (typeof INTERVIEW_INTENTS)[number] } =
            {
              "Inspire Others": "INSPIRING_OTHERS",
              "Share Knowledge": "SHARE_KNOWLEDGE",
              Network: "NETWORK",
              "Promote Work": "PROMOTE_WORK",
              "Document Experience": "DOCUMENT_EXPERIENCE",
              "Spiritual Dialogue": "SPIRITUAL_DIALOGUE",
            };
          return goals
            .map((goal) => mapping[goal])
            .filter(Boolean) as (typeof INTERVIEW_INTENTS)[number][];
        };

        const mapInterviewTone = (
          tone: string
        ): (typeof INTERVIEW_TIME_ZONES)[number] => {
          const mapping: {
            [key: string]: (typeof INTERVIEW_TIME_ZONES)[number];
          } = {
            Mystic: "MYSTIC",
            Scientific: "SCIENTIFIC",
            Academic: "ACADEMIC",
          };
          return mapping[tone];
        };

        const payload: CreateInterviewPayload = {
          // Required field
          scheduledAt: scheduledAt.toISOString(),

          // Optional fields - only include if they have values
          ...(formState.profession.trim() && {
            profession: formState.profession.trim(),
          }),
          ...(formState.affiliation.trim() && {
            institution: formState.affiliation.trim(),
          }),
          ...(formState.website.trim() && {
            website: formState.website.trim(),
          }),
          ...(formState.impactAreas.length > 0 && {
            areasOfImpact: mapAreasOfImpact(formState.impactAreas),
          }),
          ...(formState.tariqa && {
            spiritualOrientation: mapSpiritualOrientation(formState.tariqa),
          }),
          ...(formState.hasPublicVoice && {
            publicVoice: formState.hasPublicVoice === "Yes",
          }),
          ...(formState.interviewGoals.length > 0 && {
            interviewIntent: mapInterviewGoals(formState.interviewGoals),
          }),
          ...(formState.tone && {
            interviewTimeZone: mapInterviewTone(formState.tone),
          }),
          ...(formState.additionalNotes.trim() && {
            additionalNotes: formState.additionalNotes.trim(),
          }),
        };

        // Debug: Log the final payload
        console.log("Payload being sent:", payload);

        await createInterview(payload);
        setFormSubmitted(true);
        setFormState(defaultState);
        setSuccessMessage("Interview booked successfully!");
        window.scroll(0, 0);
        toast.success("Interview booked successfully!");
        // Refresh the interviews list
        await fetchInterviews();
      } catch (err: any) {
        window.scroll(0, 0);
        toast.error(err.response.data.message || "Something went wrong");
        // Better error handling
        console.error("Full error object:", err);
        console.error("Error response:", err.response?.data);
        console.error("Error status:", err.response?.status);
        console.error("Error details:", err.response?.data?.details);

        if (err.response?.status === 400) {
          const errorData = err.response?.data;
          let errorMessage = "Invalid data provided";

          // Check if backend provides specific validation errors
          if (errorData?.details && Array.isArray(errorData.details)) {
            const validationErrors = errorData.details
              .map((detail: any) => {
                if (detail.message) return detail.message;
                if (detail.field && detail.error)
                  return `${detail.field}: ${detail.error}`;
                return JSON.stringify(detail);
              })
              .join(", ");

            errorMessage = `Validation errors: ${validationErrors}`;
          } else if (errorData?.error) {
            errorMessage = errorData.error;
          } else if (errorData?.message) {
            errorMessage = errorData.message;
          }

          setApiError(`Bad Request: ${errorMessage}`);
        } else if (err.response?.status === 401) {
          setApiError("You need to be logged in to book an interview");
        } else if (err.response?.status === 409) {
          setApiError("You already have an interview scheduled for this time");
        } else {
          setApiError(
            err.response?.data?.message ||
              err.message ||
              "Failed to book interview. Please try again."
          );
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Layout headerStyle={2} footerStyle={1}>
      <div className="max-w-6xl mx-auto my-8 sm:px-4 px-2">
        <h1 className="text-3xl font-bold text-center text-fixnix-lightpurple mb-8">
          SSC Interview Application
        </h1>

        {apiError && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {apiError}
          </div>
        )}

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}
        {loadingInterview ? (
          <div className="flex items-center justify-center mb-6">
            <svg
              className="animate-spin h-8 w-8 text-fixnix-lightpurple mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            <span className="text-gray-700">Loading interviews...</span>
          </div>
        ) : null}
        {/* Existing Interviews Section */}
        {existingInterviews.length > 0 && (
          <div className="mb-10 bg-gray-50 md:p-6 p-2 rounded-xl shadow-md max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-fixnix-lightpurple mb-4">
              {" "}
              Your Scheduled Interviews
            </h2>

            <div className="space-y-6">
              {existingInterviews.map((interview) => (
                <div
                  key={interview.id}
                  className="bg-white border border-gray-200 px-4 rounded-xl shadow-sm overflow-hidden"
                >
                  {/* Header Section */}
                  <div className="text-center py-5 border-b border-gray-100">
                    <div className="flex justify-center mb-3">
                      <div
                        className={`h-10 w-10 flex items-center justify-center rounded-full ${
                          interview.status === 1
                            ? "bg-green-100 text-green-600"
                            : interview.status === 0
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          {interview.status === 1 ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          ) : interview.status === 0 ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4m0 4h.01"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          )}
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      {interview.status === 1
                        ? "Your appointment is confirmed!"
                        : interview.status === 0
                        ? "Your appointment is pending confirmation"
                        : "Appointment Cancelled"}
                    </h3>
                  </div>

                  {/* Details Section */}
                  <div
                    className={`px-6 py-4 rounded-lg bg-${
                      interview.status === 1
                        ? "green"
                        : interview.status === 0
                        ? "yellow"
                        : "red"
                    }-50`}
                  >
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                      <span className="font-medium">📅 Date:</span>
                      <span>
                        {new Date(interview.scheduledAt).toLocaleDateString(
                          undefined,
                          {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                      <span className="font-medium">🕒 Time:</span>
                      <span>
                        {new Date(interview.scheduledAt).toLocaleTimeString(
                          [],
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                      <span className="font-medium">💻 Mode:</span>
                      <span>Virtual Meeting</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                      <span className="font-medium">🏛 Institution:</span>
                      <span>{interview.institution}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                      <span className="font-medium">👤 Profession:</span>
                      <span>{interview.profession}</span>
                    </div>

                    <div className="mt-3 text-xs text-gray-500 text-center">
                      A calendar invite and email confirmation have been sent to
                      your registered email address.
                    </div>
                  </div>

                  {/* Cancel Button */}
                  {interview.status === 0 && (
                    <div className="px-6 pb-5 pt-2 flex justify-end">
                      <button
                        onClick={() => handleCancelInterview(interview.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition"
                      >
                        Cancel Interview
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-3xl mx-auto md:p-8 sm:p-4 p-2 bg-white shadow-2xl rounded-2xl"
        >
          {formSubmitted && (
            <div className="bg-green-100 border border-fixnix-darkpurple text-fixnix-darkpurple p-4 rounded-lg">
              Thank you! Your interview form has been submitted and confirmation
              has been send to your email.
            </div>
          )}
          <h2 className="text-xl font-bold text-fixnix-lightpurple mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl">
            {[
              { name: "fullName", placeholder: "Full Name", type: "text" },
              { name: "email", placeholder: "Email", type: "email" },
              { name: "country", placeholder: "Country", type: "text" },
              { name: "profession", placeholder: "Profession", type: "text" },
              {
                name: "affiliation",
                placeholder: "Institutional Affiliation",
                type: "text",
              },
              { name: "website", placeholder: "Website", type: "text" },
            ].map(({ name, placeholder, type }) => (
              <div key={name} className="">
                <label
                  htmlFor={name}
                  className="block text-sm font-medium text-fixnix-darkpurple mb-1"
                >
                  {placeholder}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={(formState as any)[name]}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors[name as keyof InterviewFormState] && (
                  <p className="text-red-600 text-sm">
                    {errors[name as keyof InterviewFormState]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {/* Areas of Impact Section */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-fixnix-lightpurple mb-4">
                Areas of Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  "Spiritual Leadership",
                  "Transformative Education",
                  "Integrative Health",
                  "Ethical Justice",
                  "Scientific Consciousness",
                  "Cultural Expression",
                  "Eco Stewardship",
                  "Unity Dialogue",
                  "Policy Reform",
                  "Youth Empowerment",
                ].map((area) => (
                  <label
                    key={area}
                    className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-fixnix-lightpurple hover:shadow-sm transition cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="impactAreas"
                      value={area}
                      checked={formState.impactAreas.includes(area)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 rounded border-gray-300 text-fixnix-lightpurple focus:ring-fixnix-lightpurple"
                    />
                    <span className="ml-2 text-sm text-gray-700 break-words">
                      {area}
                    </span>
                  </label>
                ))}
              </div>
              {errors.impactAreas && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.impactAreas}
                </p>
              )}
            </div>

            {/* Spiritual & Public Voice Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-fixnix-lightpurple mb-4">
                  Spiritual Orientation
                </h3>
                <select
                  name="tariqa"
                  value={formState.tariqa}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-fixnix-lightpurple focus:border-transparent"
                >
                  <option value="">Select your orientation</option>
                  <option value="Sufi">Sufi</option>
                  <option value="Freethinker">Freethinker</option>
                  <option value="Not Affiliated">Not Affiliated</option>
                </select>
                {errors.tariqa && (
                  <p className="text-red-600 text-sm mt-2">{errors.tariqa}</p>
                )}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-fixnix-lightpurple mb-4">
                  Public Voice
                </h3>
                <select
                  name="hasPublicVoice"
                  value={formState.hasPublicVoice}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-fixnix-lightpurple focus:border-transparent"
                >
                  <option value="">Do you have a public voice?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.hasPublicVoice && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.hasPublicVoice}
                  </p>
                )}
              </div>
            </div>

            {/* Interview Intent Section */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-fixnix-lightpurple mb-4">
                Interview Intent
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Inspire Others",
                  "Share Knowledge",
                  "Network",
                  "Promote Work",
                  "Document Experience",
                  "Spiritual Dialogue",
                ].map((goal) => (
                  <label
                    key={goal}
                    className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-fixnix-lightpurple hover:shadow-sm transition cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="interviewGoals"
                      value={goal}
                      checked={formState.interviewGoals.includes(goal)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 rounded border-gray-300 text-fixnix-lightpurple focus:ring-fixnix-lightpurple"
                    />
                    <span className="ml-2 text-sm text-gray-700">{goal}</span>
                  </label>
                ))}
              </div>
              {errors.interviewGoals && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.interviewGoals}
                </p>
              )}
            </div>

            {/* Interview Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-fixnix-lightpurple mb-4">
                  Interview Tone
                </h3>
                <select
                  name="tone"
                  value={formState.tone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-fixnix-lightpurple focus:border-transparent"
                >
                  <option value="">Select preferred tone</option>
                  <option value="Mystic">Mystic</option>
                  <option value="Scientific">Scientific</option>
                  <option value="Academic">Academic</option>
                </select>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-fixnix-lightpurple mb-4">
                  Schedule Interview
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="interviewDate"
                      value={formState.interviewDate}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-fixnix-lightpurple focus:border-transparent"
                    >
                      <option value="">Select a date</option>
                      {availableSaturdays.map((saturday) => (
                        <option key={saturday.date} value={saturday.date}>
                          {saturday.formatted}
                        </option>
                      ))}
                    </select>
                    {errors.interviewDate && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.interviewDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time (EST) <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="interviewTime"
                      value={formState.interviewTime}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-fixnix-lightpurple focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      {[
                        "10:00",
                        "10:30",
                        "11:00",
                        "11:30",
                        "12:00",
                        "12:30",
                        "13:00",
                        "13:30",
                        "14:00",
                      ].map((time) => (
                        <option key={time} value={time}>
                          {time.includes("13") || time.includes("14")
                            ? `${parseInt(time) - 12}:${time.split(":")[1]} PM`
                            : `${time} ${parseInt(time) >= 12 ? "PM" : "AM"}`}
                        </option>
                      ))}
                    </select>
                    {errors.interviewTime && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.interviewTime}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes Section */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-fixnix-lightpurple mb-4">
                Additional Notes
              </h3>
              <textarea
                name="additionalNotes"
                rows={4}
                value={formState.additionalNotes}
                onChange={handleInputChange}
                placeholder="Any additional information you'd like to share..."
                className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:ring-2 focus:ring-fixnix-lightpurple focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-fixnix-lightpurple text-white rounded-lg hover:bg-fixnix-darkpurple transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Booking Interview...
                  </span>
                ) : (
                  "Schedule Interview"
                )}
              </button>
            </div>
          </div>{" "}
        </form>
      </div>
    </Layout>
  );
};

export default InterviewForm;
