import { Routes, Route } from "react-router-dom";

import "./css/MainStyle.scss";
import "./css/navbar.scss"
import "./css/signup.scss";
import "./css/sign.scss";

import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import { SpellList, Home } from "./_root/pages";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

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
        </Route>
      </Routes>
    </main>
  );
};

export default App;
