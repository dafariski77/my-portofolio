import { AboutMeSection } from "@/components/commons/about-me";
import { ContactMeSection } from "@/components/commons/contact-me";
import { FooterSection } from "@/components/commons/footer";
import { HeroSection } from "@/components/commons/hero";
import { MyExperienceSection } from "@/components/commons/my-experience";
import { MyProjectSection } from "@/components/commons/my-project";
import { MySkillSection } from "@/components/commons/my-skill";
import { Navbar } from "@/components/commons/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <MySkillSection />
      <MyExperienceSection />
      <AboutMeSection />
      <MyProjectSection />
      <ContactMeSection />
      <FooterSection />
    </main>
  );
}
