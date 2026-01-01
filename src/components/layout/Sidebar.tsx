import React from "react";
import Link from "next/link";

// Define the props interface
interface SidebarProps {
  isSidebar: boolean; // Indicates whether the sidebar is active
  handleSidebar: () => void; // Function to toggle the sidebar state
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebar, handleSidebar }) => {
  return <></>;
};

export default Sidebar;
