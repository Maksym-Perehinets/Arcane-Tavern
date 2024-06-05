import React, { useState } from "react";

const filterInfoDict: { [key: string]: string } = {
  "1 action": "&casting_type=action&casting_time=1",
  "1 bonus action": "&casting_type=bonus&casting_time=1",
  "1 reaction": "&casting_type=reaction&casting_time=1",
  "1 minute": "&casting_type=minute&casting_time=1",
  "10 minutes": "&casting_type=minute&casting_time=10",
  "1 hour": "&casting_type=hour&casting_time=1",
};

const getFilterStringByKey = (key: string): string | undefined => {
  return filterInfoDict[key];
};

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleOptionToggle = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };


  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <p>Action</p>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {Object.keys(filterInfoDict).map((option) => (
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

const Level: React.FC = () => {
  return <Dropdown />;
};

export default Level;
