import Image from "@/components/shared/Image";
import Info from "./Info";
import SpellOfTheDay from "./SpellOfTheDay";
import Footer from "@/components/shared/Footer";
import DiceRoller from "./Dice";

const Home = () => {
  return (
    <>
      <Image />
      <Info />
      <SpellOfTheDay />
      <DiceRoller />
      <Footer />
    </>
  );
};

export default Home;
