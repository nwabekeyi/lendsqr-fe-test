import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './dropdown.scss';

interface DropdownLayoutProps {
  options: { value: string | number; label: string }[];
  value: string | number | null;
  onSelect: (value: string | number) => void;
  placeholder?: string;
  orgSelect?: any
  field?: boolean
}

const Dropdown: React.FC<DropdownLayoutProps> = ({ options, value, onSelect, placeholder, orgSelect, field }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: { value: string | number; label: string }) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  const headerClass:string = orgSelect ? "dropdown-header-org" : field ? "field" : "dropdown-header"

  return (
    <div className="dropdown-container">
    <div className={headerClass} onClick={toggleDropdown}>
      {value !== null ?  options.find(option => option.value === value)?.label : placeholder}
      <span className="dropdown-icon">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
    </div>
    {isOpen && (
      <ul className="dropdown-list">
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionSelect(option)} className="dropdown-item">
            {option.label}
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default Dropdown;
