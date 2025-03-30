import RadioGroup from "./comp/radioBtn";

function First({ selectedOption, handleOptionChange }) {
  const options = [
    { value: "enterprise", label: "Enterprise Organization" },
    { value: "university", label: "University/Educational Institution" },
    { value: "nonprofit", label: "Non-Profit Organization" }, 
    { value: "personal", label: "Personal Use" }
  ];

  return (
    <div className="py-8">
      
      {/* Heading Section */}
      <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
        What type of organization are you creating?
      </h1>

      {/* Reusable Radio Buttons Section */}
      <RadioGroup
        options={options}
        selectedOption={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
}

export default First;
