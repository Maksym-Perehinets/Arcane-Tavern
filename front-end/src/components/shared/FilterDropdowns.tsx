import React, { useState } from "react";
import { dictionaries } from "../../utils";

const Dropdown: React.FC<{ category: keyof typeof dictionaries }> = ({ category }) => {
  const options = dictionaries[category];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionToggle = (option: string) => {
    setSelectedOptions(prevOptions =>
      prevOptions.includes(option)
        ? prevOptions.filter(item => item !== option)
        : [...prevOptions, option]
    );
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <p>{category}</p>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {Object.keys(options).map(option => (
            <li
              key={option}
              onClick={() => handleOptionToggle(option)}
              className={selectedOptions.includes(option) ? "selected" : ""}
            >
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FilterDropdowns: React.FC = () => {
  return (
    <>
      {Object.keys(dictionaries).map(category => (
        <Dropdown key={category} category={category as keyof typeof dictionaries} />
      ))}
    </>
  );
};

export default FilterDropdowns;
