import { useState } from "react";


const Dropdown = (options: Array) => {
    const [selectedValue, setSelectedValue] = useState('');

   return (
    <select
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
    className="bg-transparent text-[1em] text-gray-300 border-2 rounded transition
     border-black outline-none font-bold hover:text-gray-100"
    >
    {options.map((option: string, index: number) => (
    <option key={index} value={option} className="bg-indigo-950 outline-none border-none">
    {option}
    </option>
    ))}
    </select>
    );
   }

export default Dropdown;