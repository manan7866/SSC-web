"use client";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { updateUserProfile } from "@/hooks/profileServices";

export default function Profile() {
  const { user, fetchUserProfile, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [updating, setUpdating] = useState(false);
  
  // Debug logging to see the user object structure
  console.log("Profile page - user object:", user);
  
  // Extract the actual profile data (handle nested structure)
  const profileData = (user as any)?.profile || user || {};

  const { register, handleSubmit, reset } = useForm({
    defaultValues: profileData || {},
  });

  const onSubmit = async (data: any) => {
    try {
      setUpdating(true);
      await updateUserProfile(data);
      await fetchUserProfile(); // Refresh global state
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update profile.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="My Profile">
        <div className="flex justify-center items-center h-screen">
          <div className="loader">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="My Profile">
        <p className="text-center mt-10 font-bold my-16">Please log in to view your profile.</p>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="My Profile">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-6">
            <h1 className="text-2xl font-bold">My Profile</h1>
            <button
              onClick={() => {
                setIsEditing(!isEditing);
                reset(profileData);
              }}
              className="bg-fixnix-lightpurple text-white px-4 py-2 rounded"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input {...register("fullName")} placeholder="Full Name" className="w-full border p-2" />
              <input {...register("email")} placeholder="Email" className="w-full border p-2" disabled />
              <input {...register("phone")} placeholder="Phone" className="w-full border p-2" />
              <input {...register("address")} placeholder="Address" className="w-full border p-2" />
              <input {...register("city")} placeholder="City" className="w-full border p-2" />
              <input {...register("state")} placeholder="State" className="w-full border p-2" />
              <input {...register("zipCode")} placeholder="Zip Code" className="w-full border p-2" />
              <input {...register("country")} placeholder="Country" className="w-full border p-2" />

              <button
                type="submit"
                className="bg-fixnix-darkpurple text-white px-4 py-2 rounded"
                disabled={updating}
              >
                {updating ? "Saving..." : "Save"}
              </button>
            </form>
          ) : (
            <div>
              {Object.entries(profileData).map(([key, value]) => (
                <p key={key} className="border-b py-2">
                  <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
