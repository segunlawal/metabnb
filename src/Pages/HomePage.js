import HomePageIntro from "../components/HomePageIntro/HomePageIntro";
import LogoBanner from "../components/LogoBanner/LogoBanner";
import HomePageInspiration from "../components/HomePageInspiration/HomePageInspiration";

function HomePage() {
  return (
    <div>
      <HomePageIntro />
      <LogoBanner />
      <HomePageInspiration />
    </div>
  );
}

export default HomePage;
