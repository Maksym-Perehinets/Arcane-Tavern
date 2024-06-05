import navbarFeature from "../../../components/shared/navbarFeature";

const Navbar = () => {
  return (
    <header className="header">
      <button className="btn-toggle" onClick={navbarFeature} role="button">
        <img className="ListIco" src="public/ListIco.png" />
      </button>

      <div className="wrap">
          <input
            type="text"
            id="searchTerm"
            className="searchTerm search"
            placeholder="What are you looking for?"
          />
      </div>
      <b id="signupBtn">
        <a href="/front_end/html/signup.html">
          <span>Sign Up</span>
        </a>
      </b>
    </header>
  );
};

export default Navbar;
