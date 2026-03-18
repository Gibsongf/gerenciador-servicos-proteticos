import React from "react";

export function CheckBox({ arr }) {
  // const { checkBoxRef } = React.useContext(RefContext);

  if (!arr.length) {
    return "";
  }
  return (
    <>
      {arr.map((item, indx) => {
        if (item.disabled) return "";
        return <Box key={indx} name={item.value} value={item.id} />;
      })}
    </>
  );
}
function Box({ name, value }) {
  const [isChecked, setIsChecked] = React.useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="checkbox-label">
      <input
        name="produto"
        type="checkbox"
        checked={isChecked}
        value={value}
        onChange={handleCheckboxChange}
      />
      {name}
    </label>
  );
}
