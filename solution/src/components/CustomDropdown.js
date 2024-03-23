import React, { useState } from "react";

const CustomDropdown = ({ options, placeholder }) => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    return (
      <div className="custom-dropdown">
        <select value={selectedOption} onChange={handleChange}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const App = () => {
    const options = [
      { value: "USA", label: "USA" },
      { value: "China", label: "China" },
      { value: "Brazil", label: "Brazil" },
      { value: "Canada", label: "Canada" },
    ];
  
    return (
      <div>
        <CustomDropdown options={options} placeholder="Select an option" />
      </div>
    );
  };
  
  export default App;