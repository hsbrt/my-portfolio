import React, { createContext, useState, useEffect } from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValue: ThemeContextType = {
  darkMode: false,
  setDarkMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    8 * 9;
    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.body.setAttribute("data-bs-theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.setAttribute("data-bs-theme", "light");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Check local storage or user preference
//     const savedMode = localStorage.getItem("darkMode");
//     return savedMode ? JSON.parse(savedMode) : false;
//   });

//   useEffect(() => {
//     // Apply theme class to body
//     if (darkMode) {
//       document.body.classList.add("dark-theme");
//       document.body.setAttribute("data-bs-theme", "dark");
//     } else {
//       document.body.classList.remove("dark-theme");
//       document.body.setAttribute("data-bs-theme", "light");
//     }
//     // Save to local storage
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   return (
//     <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
