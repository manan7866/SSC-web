"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, { FormEvent } from "react";
import { Loader } from "lucide-react";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
import { SetStateAction, useState } from "react";
import {
  createConference,
  getConferences,
  PRESENTATION_TYPES,
  TOPIC_TYPES,
  updateConferenceStatus,
  ConferencePayload,
} from "@/hooks/conference";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CommunitySlides = [
  {
    subTitle: "Connect, Engage, Celebrate, Learn, Grow",
    title: "Experience the Power of<br/> Sufi Community",
    text: " Join a vibrant community of seekers, scholars, and spiritual guides<br/> through enriching events, shared wisdom, and collective growth.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Gather, Reflect, Celebrate, Inspire, Transform",
    title: "Building Connections Through<br/> Sufi Gatherings",
    text: "Engage in meaningful discussions, cultural events, and spiritual retreats that <br/>unite hearts and minds in the spirit of Kashmiri Sufism.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Unite in Spirit, Learn Together",
    title: "Join Events That <br/>Enrich & Inspire",
    text: "Explore Sufi traditions through festivals, workshops, and gatherings that celebrate <br/>wisdom, culture, and the journey of self-discovery.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Together in Faith, Growth, & Learning",
    title: "Discover, Share, & Celebrate,<br/> Spiritual Wisdom",
    text: " Be part of a thriving Sufi community where events, discussions, and<br/> experiences foster harmony, enlightenment, and personal transformation.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Celebrate Spirituality, Embrace Community, Engage",
    title: "A Gathering of <br/>Seekers & Thinkers",
    text: " Connect with like-minded individuals in immersive events that honor Kashmiri Sufi<br/> heritage, inspire dialogue, and strengthen spiritual bonds.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    abstract: "",
    presentationType: "",
    topic: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Conference list state - ADD THESE MISSING VARIABLES
  const [conferenceList, setConferenceList] = useState<any[]>([]);
  const [conferenceLoading, setConferenceLoading] = useState(false);
  const [conferenceError, setConferenceError] = useState("");
  const [refreshConferences, setRefreshConferences] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    // Add name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Add email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate institution (required by backend)
    if (!formData.institution.trim()) {
      newErrors.institution = "Institution is required";
    } else if (formData.institution.trim().length < 3) {
      newErrors.institution = "Institution must be at least 3 characters long";
    }

    // Validate abstract
    if (!formData.abstract.trim()) {
      newErrors.abstract = "Abstract is required";
    } else if (formData.abstract.trim().length < 3) {
      newErrors.abstract = "Abstract must be at least 3 characters long";
    }

    // Validate presentation type
    if (!formData.presentationType) {
      newErrors.presentationType = "Presentation type is required";
    } else if (!PRESENTATION_TYPES.includes(formData.presentationType as any)) {
      newErrors.presentationType = "Please select a valid presentation type";
    }

    // Validate topic
    if (!formData.topic) {
      newErrors.topic = "Topic is required";
    } else if (!TOPIC_TYPES.includes(formData.topic as any)) {
      newErrors.topic = "Please select a valid topic";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        console.log("🔍 Form data before submission:", formData);

        const payload: ConferencePayload = {
          institution: formData.institution.trim(),
          abstract: formData.abstract.trim(),
          presentationType:
            formData.presentationType as (typeof PRESENTATION_TYPES)[number],
          topic: formData.topic as (typeof TOPIC_TYPES)[number],
        };

        console.log("🚀 Submitting payload:", payload);

        await createConference(payload);

        // Reset form
        setFormData({
          name: "",
          email: "",
          institution: "",
          abstract: "",
          presentationType: "",
          topic: "",
        });

        alert("Conference submission successful!");
        // Refresh the conference list
        setRefreshConferences((prev: boolean) => !prev);
      } catch (error) {
        console.error("Conference submission error:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Submission failed. Please try again.";
        setErrors({ general: errorMessage });
      }
      setIsSubmitting(false);
    }
  };

  // Fetch user's conference submissions
  React.useEffect(() => {
    const fetchConferences = async () => {
      setConferenceLoading(true);
      setConferenceError("");
      try {
        const data = await getConferences();
        setConferenceList(data.data);
      } catch (err) {
        setConferenceError("Failed to load submissions.");
      }
      setConferenceLoading(false);
    };
    fetchConferences();
  }, [refreshConferences]);

  // Handle status update - ADD THIS MISSING FUNCTION
  const handleConferenceStatus = async (id: number, status: number) => {
    try {
      await updateConferenceStatus(id, status);
      setRefreshConferences((prev: boolean) => !prev);
    } catch (err) {
      alert("Failed to update status.");
    }
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner slides={CommunitySlides} />
        {/*Core Services Start*/}
        <section className="relative block py-[120px] -pb-[40px]">
          <div className="container mx-auto px-4">
            <div className="relative block mb-[52px]">
              <div className="flex items-center">
                <div className="w-full lg:w-8/12">
                  <div className="relative block">
                    <div className="text-left">
                      <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                        Call for Papers
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      </span>
                      <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
                        Sufi Science Center Symposium 2026-27
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                        The Sufi Science Symposium 2026 invites researchers,
                        scholars, and practitioners to submit papers for
                        presentation at this groundbreaking event. This
                        symposium aims to foster dialogue on the convergence of
                        Sufism, scientific inquiry, and technological
                        advancements, exploring how spiritual wisdom can inform
                        modern knowledge systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  block pt-[60px]   ">
              <div className="mb-[52px] ">
                <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
                  <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                    Sufi Science Center Symposium
                  </div>
                  <div className=" pt-[123px] px-10 relative ">
                    <div className="mb-[24px] ">
                      <h4 className="text-[30px] font-semibold leading-[40px]  mb-[1px]">
                        Symposium 2026-27 - Themes and Topics
                      </h4>

                      <p>
                        We welcome original research, case studies, and
                        theoretical explorations on topics including, but not
                        limited to:
                      </p>
                    </div>
                    <ul className="space-y-[17px] pb-[17px]">
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Spiritual Science & Metaphysics
                          </h5>
                          <p>
                            • Sufi perspectives on consciousness and the nature
                            of reality
                            <br />
                            • Mystical traditions and their influence on
                            scientific thought
                            <br />
                            • The role of intuition and transcendence in
                            scientific discovery
                            <br />
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Quantum Mechanics & Sufi Thought
                          </h5>
                          <p>
                            • Parallels between Sufi philosophy and quantum
                            physics
                            <br />
                            • The concept of interconnectedness in Sufism and
                            modern physics
                            <br />
                            • Non-locality, energy fields, and Sufi
                            interpretations of the unseen world
                            <br />
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Mind, Medicine & Healing
                          </h5>
                          <p>
                            • Sufi approaches to holistic well-being and mental
                            health
                            <br />
                            • The impact of spiritual practices on
                            neuroplasticity and cognitive functio
                            <br />
                            • Energy healing and its intersections with modern
                            medical science
                            <br />
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Environmental Ethics & Sustainability
                          </h5>
                          <p>
                            • Sufi perspectives on ecology and environmental
                            stewardship
                            <br />
                            • Sacred responsibility and sustainability in the
                            modern world
                            <br />
                            • Ethical frameworks for climate change solutions
                            rooted in spiritual traditions
                            <br />
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Artificial Intelligence, Technology & Spirituality
                          </h5>
                          <p>
                            • Can AI integrate spiritual wisdom?
                            <br />
                            • Ethical considerations of AI from a Sufi lens
                            <br />
                            • Technology and the evolution of spiritual
                            consciousnes
                            <br />
                          </p>
                        </div>
                      </li>

                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Submission Guidelines
                          </h5>
                          <p>
                            • Abstract Length: 250-500 words
                            <br />
                            • Full Paper Length: 3,000 - 6,000 words (if
                            accepted)
                            <br />
                            • Format: APA or MLA citation style
                            <br />
                            • Submission Deadline: [Insert Date]
                            <br />• Notification of Acceptance: [Insert Date]
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            Who Should Submit?
                          </h5>
                          <p>
                            • Academics and researchers in philosophy,
                            spirituality, quantum physics, neuroscience, and
                            ethics
                            <br />
                            • Scholars of Islamic studies, Sufism, and
                            comparative religion
                            <br />
                            • Innovators and professionals in technology,
                            medicine, and environmental science
                            <br />
                            • Independent researchers exploring
                            spiritual-scientific intersections
                            <br />
                          </p>
                        </div>
                      </li>
                      <li className="flex justify-between border-b border-gray-300 pb-[17px]">
                        <div>
                          <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                            How to Submit
                          </h5>
                          <p>
                            Interested participants should complete the
                            Conference Registration Form and upload their
                            abstract via our submission portal.
                          </p>
                          <p className="pt-3 font-bold">
                            For inquiries, please contact
                            info@sufisciencecenter.info
                          </p>
                          <p className="pt-3 font-bold">
                            Join us in this transformative dialogue where
                            mysticism meets modern science!
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          id="conference-form"
          className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 sm:my-2 md:-mt-10 lg:-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple py-6 px-6 text-white">
                <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
                  Conference Registration
                </h2>
                <p className="text-center mt-2 text-white">
                  Submit your paper for the upcoming Sufi Science Symposium
                </p>
              </div>

              {/* Form */}
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {errors.general && (
                      <div className="rounded-md bg-red-50 p-3 border border-red-200">
                        <p className="text-sm text-red-700">{errors.general}</p>
                      </div>
                    )}
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-4">
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-medium text-fixnix-darkpurple mb-1"
                            htmlFor="name"
                          >
                            Full Name*
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter your full name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            className="block text-sm font-medium text-fixnix-darkpurple mb-1"
                            htmlFor="email"
                          >
                            Email Address*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="you@example.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Institution */}
                    <div>
                      <label
                        className="block text-sm font-medium text-fixnix-darkpurple mb-1"
                        htmlFor="institution"
                      >
                        Institution/Organization
                      </label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Your academic institution or organization"
                      />
                    </div>

                    {/* Abstract */}
                    <div>
                      <label
                        className="block text-sm font-medium text-fixnix-darkpurple mb-1"
                        htmlFor="abstract"
                      >
                        Abstract*
                      </label>
                      <textarea
                        id="abstract"
                        name="abstract"
                        value={formData.abstract}
                        onChange={handleChange}
                        rows={6}
                        maxLength={500}
                        className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Please provide a brief abstract of your paper (250-500 words)"
                      ></textarea>
                      {errors.abstract && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.abstract}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-gray-500 text-right">
                        {formData.abstract.length}/500
                      </p>
                    </div>

                    {/* Presentation Type */}
                    <div>
                      <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-4">
                        Presentation Details
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-medium text-fixnix-darkpurple mb-1"
                            htmlFor="presentationType"
                          >
                            Presentation Type*
                          </label>
                          <select
                            id="presentationType"
                            name="presentationType"
                            value={formData.presentationType}
                            onChange={handleChange}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          >
                            <option value="">Select a presentation type</option>
                            <option value="ORAL">Oral Presentation</option>
                            <option value="POSTER">Poster Presentation</option>
                            <option value="WORKSHOP">Workshop</option>
                          </select>
                          {errors.presentationType && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.presentationType}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            className="block text-sm font-medium text-fixnix-darkpurple mb-1"
                            htmlFor="topic"
                          >
                            Topic/Theme*
                          </label>
                          <select
                            id="topic"
                            name="topic"
                            value={formData.topic}
                            onChange={handleChange}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          >
                            <option value="">Select a topic</option>
                            <option value="SUFI_PHILOSOPHY">
                              Sufi Philosophy
                            </option>
                            <option value="QUANTUM_CONSCIOUSNESS">
                              Quantum Consciousness
                            </option>
                            <option value="MYSTICAL_PRACTICES">
                              Mystical Practices
                            </option>
                            <option value="HEALING_TRANSITIONS">
                              Healing Traditions
                            </option>
                            <option value="INTER_APPROACHES">
                              Interdisciplinary Approaches
                            </option>
                            <option value="OTHER">Other</option>
                          </select>
                          {errors.topic && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.topic}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader size={20} className="animate-spin mr-2" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Abstract & Register"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto my-6 bg-white px-2 sm:px-6 lg:px-8 py-6 rounded-xl shadow overflow-x-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple py-6 px-6 text-white">
                <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
                  Your Conference Submissions
                </h2>
              </div>
              <div className="p-6">
                {conferenceLoading ? (
                  <p>Loading submissions...</p>
                ) : conferenceError ? (
                  <p className="text-red-500">{conferenceError}</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-[600px] w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2">Institution</th>
                          <th className="p-2">Topic</th>
                          <th className="p-2">Status</th>
                          <th className="p-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {conferenceList.map((conf) => (
                          <tr key={conf.id} className="border-t">
                            <td className="p-2 whitespace-nowrap">
                              {conf.institution}
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              {conf.topic}
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              {conf.status === 0
                                ? "Pending"
                                : conf.status === 1
                                ? "Approved"
                                : "Rejected"}
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              {conf.status === 0 && (
                                <button
                                  onClick={() =>
                                    handleConferenceStatus(conf.id, 2)
                                  }
                                  className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                  Cancel
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Conference Submissions List
      <div className="max-w-6xl mx-auto mb-2 min-h-screen bg-white px-4 sm:px-6 lg:px-8 ">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple py-6 px-6 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Your Conference Submissions
            </h2>
          </div>
          <div className="p-6">
          {conferenceLoading ? (
  <p>Loading submissions...</p>
) : conferenceError ? (
  <p className="text-red-500">{conferenceError}</p>
) : (
  <table>
    <thead>
      <tr>
        <th>Institution</th>
        <th>Topic</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {conferenceList.map(conf => (
        <tr key={conf.id}>
          <td>{conf.institution}</td>
          <td>{conf.topic}</td>
          <td>
            {conf.status === 0 ? "Pending" : conf.status === 1 ? "Approved" : "Rejected"}
          </td>
          <td>
            {conf.status === 0 && (
              <button onClick={() => handleConferenceStatus(conf.id, 2)} className="bg-red-500 text-white px-2 py-1">
                Cancel
              </button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}
          </div>
        </div>
      </div> */}
      </Layout>
    </>
  );
}
