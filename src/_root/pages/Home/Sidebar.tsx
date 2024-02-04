import navbarFeature from "../../../components/shared/navbarFeature";
import FilterDropdowns from "../../../components/FilterDropdowns";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="backward" onClick={navbarFeature}>
        <img className="backwardico" src="/front_end/IMGs/Backward.png" />
      </button>
      <div className="sidebar_header">
        <div>
          <img className="logo" src="/front_end/IMGs/logo.png" alt="logo" />{" "}
          <br />
          <div className="sidebarHeaderText"></div>
        </div>
      </div>

      <div className="sidebar_menu">
        <FilterDropdowns />
      </div>
    </div>
  );
};

export default Sidebar;
