import HomePageIntro from "../components/HomePageIntro/HomePageIntro";
import LogoBanner from "../components/LogoBanner/LogoBanner";
import HomePageInspiration from "../components/HomePageInspiration/HomePageInspiration";
import HomePageLearnMore from "../components/HomePageLearnMore/HomePageLearnMore";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <HomePageIntro />
      <LogoBanner />
      <HomePageInspiration />
      <HomePageLearnMore />
      <Footer />
    </div>
  );
}

export default HomePage;
