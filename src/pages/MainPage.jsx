import { Hero } from "../components/Hero/Hero";
// import { About } from "../components/About/About";
import { Projects } from "../components/Projects/Projects";
import { Experience } from "../components/Experience/Experience";
import { Contact } from "../components/Contact/Contact";

export const MainPage = () => {
    return (
        <>
            <Hero />
            {/* <About /> */}
            <Projects />
            <Experience />
            {/* <Skills /> */}
            <Contact />
        </>
    );
};
