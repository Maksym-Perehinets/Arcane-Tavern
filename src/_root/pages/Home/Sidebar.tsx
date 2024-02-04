import navbarFeature from "../../../components/shared/navbarFeature";
import FilterDropdowns from "../../../components/FilterDropdowns";
import { applyFilters } from "../../../queries/queries";

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
      <button className="apply" onClick="">Apply</button>
        <button className="clear" onClick="resetAllDropdowns()">Reset</button>
    </div>
  );
};

export default Sidebar;
