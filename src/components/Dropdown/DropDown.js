import React from "react";
import { Select } from './DropDownStyle'

const DropDown = () => {
  return (
    <form>
      <div>
        <Select>
          <option>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </Select>
      </div>
    </form>
  );
};

export default DropDown;