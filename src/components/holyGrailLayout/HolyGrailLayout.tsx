import React from "react";
import "./HolyGrailLayout.css";

const HolyGrailLayout: React.FC = () => {
    return (<>
        <header>Header</header>
        <div className="columns">
            <nav>navigation</nav>
            <main>Main</main>
            <aside>Sidebar</aside>
        </div>
        <footer>Footer</footer>
    </>)
}

export default HolyGrailLayout;