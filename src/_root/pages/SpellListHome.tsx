const SpellListHome = () => {
  return (
    <div className="table-lines">
      <table id="spellList" className="custom-table">
        <thead>
          <tr>
            <th>
              <a id="lvl">Lvl</a>
            </th>
            <th>
              <a id="name">Name</a>
            </th>
            <th>
              <a id="concentration">C</a>
            </th>
            <th>
              <a id="duration">Duration</a>
            </th>
            <th>
              <a id="time">Time</a>
            </th>
            <th>
              <a id="range">Range</a>
            </th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>
  );
};

export default SpellListHome;
