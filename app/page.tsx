import Banner from "./components/Banner/index";
import Dedicated from "./components/Dedicated/index";
import Wework from "./components/Wework/index";
import Ourteam from "./components/Ourteam/index";
import Featured from "./components/Featured/index";
import FAQ from "./components/FAQ/index";
import Testimonials from "./components/Testimonials/index";
import Joinus from "./components/Joinus/index";
import Insta from "./components/Insta/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <Wework />
      <Featured />
      <Dedicated />
      <Ourteam />
      <FAQ />
      <Testimonials />
      <Joinus />
      <Insta />
    </main>
  );
}
