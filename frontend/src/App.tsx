import { Routes, Route } from "react-router-dom";

import "./css/MainStyle.scss";
import "./css/navbar.scss";
import "./css/Image.scss";
import "./css/signup.scss";
import "./css/sign.scss";
import "./css/Info.scss";
import "./css/SpellOfTheDay.scss";
import "./css/Footer.scss";
import "./css/SpellOfTheDayDiv.scss";
import "./css/CharacterDiv.scss";
import "./css/SpellPageCSS/SpellDedscription.scss";
import "./css/Characters/Characters.scss";
import "./css/Characters/Selection.scss";

import SignInForm from "./pages/SignInForm/SignInForm";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import { SpellList, Home } from "./pages";

import AuthLayout from "./pages/AuthLayout";
import RootLayout from "./pages/RootLayout";
import AboutUS from "./pages/AboutUs/AboutUS";
import ContactUs from "./pages/ContactUs/ContactUsMain";
import Characters from "./pages/Characters/Characters";

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/spell-list" element={<SpellList />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/About-us" element={<AboutUS />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
