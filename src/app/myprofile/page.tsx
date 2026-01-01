"use client"
import ProfileHeader from "./components/profile-header";
import ProfileContent from "./components/profile-content";
import Layout from "@/components/layout/Layout";

export default function Page() {
  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="My Profile">
      <div className="container mx-auto space-y-6 px-4 py-10">
        <ProfileHeader />
        <ProfileContent />
      </div>
    </Layout>
  );
}
