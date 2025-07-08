import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

      <Navbar />

      <div className="relative z-10 container mt-24 mx-auto px-4 sm:px-6 lg:px-12 py-4">

        <section className="min-h-screen flex items-center">
          <HeroSection />
        </section>

        <section id="about" className="">
          <AboutMe />
        </section>

        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>

        <section id="contact" className="py-20">
          <EmailSection />
        </section>

        {/* Uncomment when ready */}
        {/* <section className="py-20">
          <AchievementsSection />
        </section> */}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}