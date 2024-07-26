import { useState } from "react";


const Dropdown = (options: Array) => {
    const [selectedValue, setSelectedValue] = useState('');

   return (
    <select
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
    className="bg-transparent text-[1em] border-2 rounded border-black outline-none"
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