import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [togglETHeme, setTogglETHeme] = useState<string>(() =>
    JSON.parse(localStorage.getItem("togglETHeme") || '"light-theme"'),
  );

  useEffect(() => {
    // Correcting the localStorage usage to store the state value, not the string "togglETHeme"
    localStorage.setItem("togglETHeme", JSON.stringify(togglETHeme));
    document.body.classList.add(togglETHeme); // Add the class based on the state

    return () => {
      document.body.classList.remove(togglETHeme); // Clean up on component unmount
    };
  }, [togglETHeme]); // Trigger effect whenever the theme changes

  return (
    <>
      <nav
        className="switcher__tab"
        onClick={() =>
          togglETHeme === "light-theme"
            ? setTogglETHeme("dark-theme")
            : setTogglETHeme("light-theme")
        }
      >
        <span className="switcher__btn light-mode">
          <i className="flaticon-sun" />
        </span>
        <span className="switcher__mode" />
        <span className="switcher__btn dark-mode">
          <i className="flaticon-moon" />
        </span>
      </nav>
    </>
  );
}
