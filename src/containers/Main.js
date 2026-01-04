import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import ScrollReveal from "../components/scrollReveal/ScrollReveal";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  // Default to dark mode
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <div className="scroll-snap-container">
              <Greeting />

              {/* Skills Section */}
              <ScrollReveal animation="fade-up" duration={800}>
                <Skills />
              </ScrollReveal>

              {/* Skill Progress */}
              <ScrollReveal animation="fade-up" delay={100} duration={800}>
                <StackProgress />
              </ScrollReveal>

              {/* Education */}
              <ScrollReveal animation="fade-up" duration={800}>
                <Education />
              </ScrollReveal>

              {/* Work Experience */}
              <ScrollReveal animation="fade-up" duration={800}>
                <WorkExperience />
              </ScrollReveal>

              {/* Open Source Projects */}
              <ScrollReveal animation="fade-up" duration={800}>
                <Projects />
              </ScrollReveal>

              {/* Startup Projects */}
              <ScrollReveal animation="fade-up" duration={800}>
                <StartupProject />
              </ScrollReveal>

              {/* Achievements */}
              <ScrollReveal animation="fade-up" duration={800}>
                <Achievement />
              </ScrollReveal>

              {/* Blogs - hidden but kept for structure */}
              <Blogs />

              {/* Talks - hidden but kept for structure */}
              <Talks />

              {/* Twitter - hidden */}
              <Twitter />

              {/* Podcast - hidden */}
              <Podcast />

              {/* Profile/Contact */}
              <ScrollReveal animation="fade-up" duration={800}>
                <Profile />
              </ScrollReveal>

              {/* Footer */}
              <ScrollReveal animation="fade" duration={600}>
                <Footer />
              </ScrollReveal>
            </div>

            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
