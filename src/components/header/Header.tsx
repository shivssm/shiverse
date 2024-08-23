import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
    const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (<>
        <button onClick={toggleTheme}> Switch to {theme === "light" ? "dark" : "light"} Mode </button>
    </>)
}

export default Header;