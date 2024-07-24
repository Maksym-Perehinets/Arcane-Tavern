import Image from "@/components/shared/Image";
import Info from "./Info";
import SpellOfTheDay from "./SpellOfTheDay";
import Footer from "@/components/shared/Footer";
import DiceRoller from "./Dice";

const Home = () => {
  return (
    <div>
      <Image />
      <Info />
      <SpellOfTheDay />
      <DiceRoller />
      <Footer />
    </div>
  );
};

export default Home;
