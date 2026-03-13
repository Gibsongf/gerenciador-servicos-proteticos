import React from "react";
import { SelectClinic, SelectDentist } from "./Select";

// select date , select all dentist select clinics
const FilterService = () => {
  return (
    <section>
      <SelectDentist />
      <SelectClinic />
      <button>+ Add Serviço</button>
    </section>
  );
};

// Input.PropTypes = {
//   name: PropTypes.string.isRequired,
//   options: PropTypes.array.isRequired,
// };
export default FilterService;
