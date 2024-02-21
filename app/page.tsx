import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Profiles from "@/components/Profiles";
import Hireas from "@/components/Hireas";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Herosection from "@/components/Herosection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      {/* // ! ---------------- Header -------------------- */}
      <Header />
      {/* //!------------------------ Aside --------------------- */}

      {/* // ! -------------------- Main ------------------- */}
      <main className="">
        {/* //!-------------------- Hero section ------------------ */}
        <Herosection />
        {/* //!-------------------- About section ----------------- */}
        <About />
        {/* //!--------------- Skills --------------- */}
        <Skills />
        {/* //! -------------- Education -------------- */}
        <Education />
        {/* //! -------------- Ready to hire as -------------- */}
        <Hireas />
        {/* //! -------------- Profiles -------------- */}
        <Profiles />
        {/* //! -------------- Portfolio -------------- */}
        <Portfolio />
      </main>
      {/* // ! ----------------------- Footer ------------------ */}
      <Footer />
    </>
  );
}
