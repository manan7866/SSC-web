import React from "react";
import Link from "next/link";

// Define props interface
interface SearchPopupProps {
  isPopup: boolean; // Indicates whether the popup is active
  handlePopup: () => void; // Function to handle popup state
}

const SearchPopup: React.FC<SearchPopupProps> = ({ isPopup, handlePopup }) => {
  return (
    <>
      <div className={`search-popup ${isPopup ? "active" : ""}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={handlePopup}
        ></div>
        
      </div>
    </>
  );
};

export default SearchPopup;
