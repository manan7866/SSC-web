"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
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
  roles: string; // ✅ Change from string[] to string (single role)
  volunteerAreas?: string[];
  volunteerExperience?: string;
  volunteerTime?: string;
  volunteerMode?: string;
  donorType?: string[];
  anonymous?: boolean;
  donorUpdates?: boolean;
  collabType?: string[]; // ✅ Keep this for form data
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
      roles: "", // ✅ String instead of array
      anonymous: false,
      communication: false,
      consent: false,
      volunteerAreas: [],
      donorType: [],
      collabType: [],
    },
  });

  const roles = watch("roles") || "";
  // ✅ Prefill form if membership exists
  useEffect(() => {
    if (membership) {
      setValue("phone", membership.phone);
      setValue("location", membership.country);
      setValue("roles", membership.role[0]); // ✅ Take first role as string
      setValue("volunteerAreas", membership.volunteerSupport || []);
      setValue("volunteerExperience", membership.previousVolunteerExp || "");
      setValue("volunteerTime", membership.monthlyTime || "");
      setValue("volunteerMode", membership.volunteerMode || "");
      setValue("donorType", membership.donorType || []);
      setValue("additional", membership.additionalInfo || "");
      setValue("collabType", membership.collaboratorIntent || []); // ✅ Map to form field
      setValue("collabOrg", membership.organization || "");
      setValue("collabVision", membership.intentCreation || "");
    }
  }, [membership, setValue]);
  

  const onSubmit = async (data: MembershipFormData) => {
    try {
      const payload = {
        phone: data.phone,
        country: data.location,
        agreedToPrinciples: data.consent,
        consentedToUpdates: !!data.communication,
        additionalInfo: data.additional || "",
        donorType: (data.donorType || []) as typeof DONOR_TYPES[number][],
        volunteerSupport: (data.volunteerAreas || []) as typeof VOLUNTEER_SUPPORT_TYPES[number][],
        role: [data.roles] as typeof ROLE_TYPES[number][],
        previousVolunteerExp: data.volunteerExperience || "",
        monthlyTime: data.volunteerTime || "",
        volunteerMode: data.volunteerMode as typeof VOLUNTEER_MODE_TYPES[number] | undefined,
        organization: data.collabOrg || "",
        intentCreation: data.collabVision || "",
        collaboratorIntent: (data.collabType || []) as typeof COLLABORATOR_INTENT_TYPES[number][],
      };
  
      let response;
      if (membership) {
        response = await updateMembership(payload);
      } else {
        response = await createMembership(payload);
      }
  
      setMembership(response.data);
      alert("Membership saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving membership.");
    }
  };
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your membership?")) {
      try {
        await deleteMembership();
        setMembership(null);
        alert("Membership deleted successfully!");
      } catch (err) {
        console.error(err);
        alert("Error deleting membership.");
      }
    }
  };
  return (
    
    <form
      onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-8 bg-white shadow-xl rounded-2xl space-y-6"
      >
        <h1 className="text-3xl font-bold text-fixnix-darkpurple text-center">
          {membership ? "Update Your Membership" : "Join the Sufi Science Center"}
        </h1>
        <p className="text-xs font-semibold text-gray-600 text-center -mb-2">
        Become part of a soulful movement rooted in spirituality, wisdom, sacred art, and community healing.
      </p>

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-semibold text-fixnix-lightpurple">Phone *</label>
            <input
              {...register("phone", { required: "Phone is required" })}
              className="mt-1 w-full border rounded-xl text-black px-4 py-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-semibold text-fixnix-lightpurple">Country *</label>
            <input
              {...register("location", { required: "Country is required" })}
              className="mt-1 w-full border rounded-xl text-black px-4 py-2"
            />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>
      </div>

        {/* Membership Roles */}
        <div>
  <label className="block text-sm font-semibold text-fixnix-lightpurple mb-2">Choose Your Membership Role *</label>
  <div className="space-y-2 text-gray-700">
    {["volunteer", "donor", "collaborator"].map((role) => (
      <label key={role} className="flex items-center space-x-2">
        <input
          type="radio"
          value={role}
          {...register("roles", { required: "Select a role" })} // ✅ This will now be a single string
        />
        <span className="capitalize">{role}</span>
      </label>
    ))}
  </div>
  {errors.roles && <p className="text-red-500 text-sm">{errors.roles.message}</p>}
</div>

        {/* Volunteer Section */}
      {roles === "volunteer" && (
        <div className="space-y-4 text-gray-700 border-t pt-6">
          <h3 className="text-lg font-semibold">Volunteer Details</h3>
            <label className="block text-sm">Areas of Support:</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
    { value: "spiritualProgram", label: "Spiritual Programs" },
    { value: "communityOutreach", label: "Community Outreach" },
    { value: "culturalPreservation", label: "Cultural Preservation" },
    { value: "digitalMedia", label: "Digital Media" },
    { value: "craftsmanship", label: "Craftsmanship" }
  ].map((item) => (
    <label key={item.value} className="flex items-center space-x-2">
      <input type="checkbox" value={item.value} {...register("volunteerAreas")} />
      <span>{item.label}</span>
    </label>
  ))}
</div>
            <input
              {...register("volunteerExperience")}
              placeholder="Previous volunteering experience"
              className="w-full border rounded-xl px-4 py-2"
            />
            <input
              {...register("volunteerTime")}
              placeholder="Time you can offer monthly"
              className="w-full border rounded-xl px-4 py-2"
            />
            <label className="block text-sm">Preferred mode:</label>
            <div className="flex space-x-4">
  {[
    { value: "IN_PERSON", label: "In-person" },
    { value: "REMOTE", label: "Remote" },
    { value: "HYBRID", label: "Hybrid" }
  ].map((mode) => (
    <label key={mode.value} className="flex items-center space-x-2">
      <input type="radio" value={mode.value} {...register("volunteerMode")} />
      <span>{mode.label}</span>
    </label>
  ))}
</div>
        </div>
      )}

        {/* Donor Section */}
      {roles === "donor" && (
        <div className="space-y-4 text-gray-700 border-t pt-6">
          <h3 className="text-lg font-semibold">Donor Preferences</h3>
          <label className="block text-sm">Type of support:</label>
          {[
  { value: "onetime", label: "One-time" },
  { value: "monthly", label: "Monthly" },
  { value: "sponsor", label: "Sponsor" },
  { value: "tools", label: "Tools/Materials" }
].map((item) => (
  <label key={item.value} className="flex items-center space-x-2">
    <input type="checkbox" value={item.value} {...register("donorType")} />
    <span>{item.label}</span>
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
      )}

        {/* Collaborator Section */}
      {roles === "collaborator" && (
        <div className="space-y-4 text-gray-700 border-t pt-6">
          <h3 className="text-lg font-semibold">Collaborator Intent</h3>
          <label className="block text-sm">Nature of collaboration:</label>
          {[
  { value: "institutional", label: "Institutional" },
  { value: "cultural", label: "Cultural" },
  { value: "interfaithDialogue", label: "Interfaith Dialogue" },
  { value: "programCorrelation", label: "Program Co-creation" }
].map((item) => (
  <label key={item.value} className="flex items-center space-x-2">
    <input type="checkbox" value={item.value} {...register("collabType")} />
    <span>{item.label}</span>
  </label>
))}
            <input
              {...register("collabOrg")}
              placeholder="Organization (if applicable)"
              className="w-full border rounded-xl px-4 py-2"
            />
            <input
              {...register("collabVision")}
              placeholder="What do you hope to co-create?"
              className="w-full border rounded-xl px-4 py-2"
            />
        </div>
      )}

        {/* Additional Notes */}
      <div>
        <label className="block text-sm font-semibold text-fixnix-lightpurple">Anything else you'd like to share?</label>
        <textarea {...register("additional")} className="mt-1 w-full border text-black rounded-xl px-4 py-2" rows={4} />
      </div>

      {/* Consent */}
      <div className="space-y-2">
        <label className="flex text-gray-700 items-center space-x-2">
            <input
              type="checkbox"
              {...register("consent", { required: "You must agree to continue" })}
            />
            <span>I agree to the principles of the Sufi Science Center</span>
        </label>
          <label className="flex text-gray-700 items-center space-x-2">
          <input type="checkbox" {...register("communication")} />
            <span>I consent to receiving updates</span>
        </label>
        {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}
      </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-fixnix-lightpurple text-white font-semibold rounded-xl hover:bg-fixnix-darkpurple"
        >
          {membership ? "Update Membership" : "Join the Circle"}
      </button>

        {membership && (
          <button
            type="button"
            onClick={handleDelete}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-xl mt-4 hover:bg-red-700"
          >
            Delete Membership
          </button>
      )}
    </form>
    
  );
}
