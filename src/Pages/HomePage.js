import HomePageIntro from "../components/HomePageIntro/HomePageIntro";
import LogoBanner from "../components/LogoBanner/LogoBanner";
import HomePageInspiration from "../components/HomePageInspiration/HomePageInspiration";
import HomePageLearnMore from "../components/HomePageLearnMore/HomePageLearnMore";

function HomePage() {
  return (
    <div>
      <HomePageIntro />
      <LogoBanner />
      <HomePageInspiration />
      <HomePageLearnMore />
    </div>
  );
}

export default HomePage;
