"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { toast } from "sonner";
import {
  createMembership,
  updateMembership,
  deleteMembership,
  ROLE_TYPES,
  DONOR_TYPES,
  VOLUNTEER_SUPPORT_TYPES,
  VOLUNTEER_MODE_TYPES,
  COLLABORATOR_INTENT_TYPES,
} from "@/hooks/membershipServices";
import { useAuth } from "@/context/AuthContext";

interface MembershipFormData {
  phone: string;
  location: string;
  roles: string;
  volunteerAreas?: string[];
  volunteerExperience?: string;
  volunteerTime?: string;
  volunteerMode?: string;
  donorType?: string[];
  anonymous?: boolean;
  donorUpdates?: boolean;
  collabType?: string[];
  collabOrg?: string;
  collabVision?: string;
  additional?: string;
  consent: boolean;
  communication?: boolean;
}

export default function MembershipForm() {
  const { membership, setMembership } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<MembershipFormData>({
    defaultValues: {
      roles: "",
      anonymous: false,
      communication: false,
      consent: false,
      volunteerAreas: [],
      donorType: [],
      collabType: [],
    },
  });

  const roles = watch("roles") || "";

  // Prefill if existing membership
  useEffect(() => {
    if (membership) {
      setValue("phone", membership.phone);
      setValue("location", membership.country);
      setValue("roles", membership.role[0]);
      setValue("volunteerAreas", membership.volunteerSupport || []);
      setValue("volunteerExperience", membership.previousVolunteerExp || "");
      setValue("volunteerTime", membership.monthlyTime || "");
      setValue("volunteerMode", membership.volunteerMode || "");
      setValue("donorType", membership.donorType || []);
      setValue("additional", membership.additionalInfo || "");
      setValue("collabType", membership.collaboratorIntent || []);
      setValue("collabOrg", membership.organization || "");
      setValue("collabVision", membership.intentCreation || "");
    }
  }, [membership, setValue]);

  // Submit
  const onSubmit: SubmitHandler<MembershipFormData> = async (data) => {
    try {
      const payload = {
        phone: data.phone,
        country: data.location,
        agreedToPrinciples: data.consent,
        consentedToUpdates: !!data.communication,
        additionalInfo: data.additional,
        donorType: (data.donorType as (typeof DONOR_TYPES)[number][]) || [],
        volunteerSupport:
          (data.volunteerAreas as (typeof VOLUNTEER_SUPPORT_TYPES)[number][]) ||
          [],
        role: [data.roles] as (typeof ROLE_TYPES)[number][],
        previousVolunteerExp: data.volunteerExperience || "",
        monthlyTime: data.volunteerTime || "",
        volunteerMode: data.volunteerMode
          ?.toUpperCase()
          .replace("-", "_") as (typeof VOLUNTEER_MODE_TYPES)[number], // ✅ Convert to uppercase
        organization: data.collabOrg || "",
        intentCreation: data.collabVision || "",
        collaboratorIntent:
          (data.collabType as (typeof COLLABORATOR_INTENT_TYPES)[number][]) ||
          [],
      };

      const response = membership
        ? await updateMembership(payload)
        : await createMembership(payload);

      setMembership(response.data);
      toast.success("Membership saved successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Error saving membership.");
    }
  };

  // Delete
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your membership?")) {
      try {
        await deleteMembership();
        setMembership(null);
        toast.success("Membership deleted successfully!");
      } catch (err) {
        console.error(err);
        toast.error("Error deleting membership.");
      }
    }
  };

  return (
    <Layout headerStyle={2} footerStyle={1}>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-fixnix-lightpurple">
              {membership
                ? "Update Membership"
                : "Join the Sufi Science Center"}
            </h1>
            <p className="text-gray-600 text-sm">
              A soulful movement rooted in spirituality, wisdom, and community
              healing.
            </p>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone *
              </label>
              <input
                {...register("phone", { required: "Phone number is required" })}
                className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Country *
              </label>
              <input
                {...register("location", { required: "Country is required" })}
                className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Choose Your Membership Role *
            </label>
            <div className="flex space-x-6">
              {["volunteer", "donor", "collaborator"].map((role) => (
                <label key={role} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={role}
                    {...register("roles", { required: "Select a role" })}
                  />
                  <span className="capitalize">{role}</span>
                </label>
              ))}
            </div>
            {errors.roles && (
              <p className="text-red-500 text-sm mt-1">
                {errors.roles.message}
              </p>
            )}
          </div>

          {/* Role-based sections */}
          {roles === "volunteer" && <VolunteerSection register={register} />}

          {roles === "donor" && <DonorSection register={register} />}

          {roles === "collaborator" && (
            <CollaboratorSection register={register} />
          )}

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Anything else you'd like to share?
            </label>
            <textarea
              {...register("additional")}
              className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              rows={4}
            />
          </div>

          {/* Consent */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                {...register("consent", {
                  required: "You must agree to continue",
                })}
              />
              <span>I agree to the principles of the Sufi Science Center</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-700">
              <input type="checkbox" {...register("communication")} />
              <span>I consent to receiving updates</span>
            </label>
            {errors.consent && (
              <p className="text-red-500 text-sm mt-1">
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="pt-4 space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-semibold rounded-xl transition"
            >
              {isSubmitting
                ? "Saving..."
                : membership
                ? "Update Membership"
                : "Join the Circle"}
            </button>

            {membership && (
              <button
                type="button"
                onClick={handleDelete}
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl"
              >
                Delete Membership
              </button>
            )}
          </div>
        </form>
      </main>
    </Layout>
  );
}

/* Subcomponents for clarity */

function VolunteerSection({ register }: any) {
  return (
    <div className="space-y-4 text-gray-700 border-t pt-6">
      <h3 className="text-lg font-semibold">Volunteer Details</h3>
      <label className="block text-sm font-semibold">Areas of Support:</label>
      <div className="flex flex-wrap gap-4">
        {[
          "spiritualProgram",
          "communityOutreach",
          "culturalPreservation",
          "digitalMedia",
          "craftsmanship",
        ].map((item) => (
          <label key={item} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={item}
              {...register("volunteerAreas")}
            />
            <span className="capitalize">
              {item.replace(/([A-Z])/g, " $1")}
            </span>
          </label>
        ))}
      </div>
      <input
        {...register("volunteerExperience")}
        placeholder="Previous volunteering experience"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
      />
      <input
        {...register("volunteerTime")}
        placeholder="Time you can offer monthly"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
      />
      <label className="block text-sm font-semibold">Preferred mode:</label>
      <div className="flex gap-4">
        {["IN_PERSON", "REMOTE", "HYBRID"].map((mode) => (
          <label key={mode} className="flex items-center space-x-2">
            <input type="radio" value={mode} {...register("volunteerMode")} />
            <span className="capitalize">{mode.replace("_", "-")}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function DonorSection({ register }: any) {
  return (
    <div className="space-y-4 text-gray-700 border-t pt-6">
      <h3 className="text-lg font-semibold">Donor Preferences</h3>
      {["onetime", "monthly", "sponsor", "tools"].map((type) => (
        <label key={type} className="flex items-center space-x-2">
          <input type="checkbox" value={type} {...register("donorType")} />
          <span className="capitalize">{type}</span>
        </label>
      ))}
      <label className="flex items-center space-x-2">
        <input type="checkbox" {...register("anonymous")} />
        <span>Remain Anonymous</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" {...register("donorUpdates")} />
        <span>Receive donation updates</span>
      </label>
    </div>
  );
}

function CollaboratorSection({ register }: any) {
  return (
    <div className="space-y-4 text-gray-700 border-t pt-6">
      <h3 className="text-lg font-semibold">Collaborator Intent</h3>
      {[
        "institutional",
        "cultural",
        "interfaithDialogue",
        "programCorrelation",
      ].map((type) => (
        <label key={type} className="flex items-center space-x-2">
          <input type="checkbox" value={type} {...register("collabType")} />
          <span className="capitalize">{type.replace(/([A-Z])/g, " $1")}</span>
        </label>
      ))}
      <input
        {...register("collabOrg")}
        placeholder="Organization (if applicable)"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
      />
      <input
        {...register("collabVision")}
        placeholder="What do you hope to co-create?"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}
