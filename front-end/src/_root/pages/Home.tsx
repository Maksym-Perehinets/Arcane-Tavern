import Image from "./Home/Image";
import Info from "./Home/Info";
import Navbar from "../../components/shared/Navbar";
import SpellOfTheDay from "./Home/SpellOfTheDay";

const Home = () => {

  return (
    <>
    <Navbar />
    <Image />
    <SpellOfTheDay />
    <Info />
    </>
  );
};

export default Home;
