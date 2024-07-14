import Image from "@/components/shared/Image";
import Info from "./Info";
import SpellOfTheDay from "./SpellOfTheDay";
import Footer from "@/components/shared/Footer";
import DiceRoller from "./Dice";
const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-violet-700">
        Hello world!
      </h1>
      <Image />
      <Info />
      <SpellOfTheDay />
      <DiceRoller />
      <Footer />
    </>
  );
};

export default Home;
