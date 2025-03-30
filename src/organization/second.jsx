import RadioGroup from "./comp/radioBtn";

function Second({ selectedOption, handleOptionChange, formData, setFormData }) {
  const sizeOptions = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501-1000", label: "501-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  const universitySizeOptions = [
    { value: "1-1000", label: "1-1000 students" },
    { value: "1001-5000", label: "1001-5000 students" },
    { value: "5001-10000", label: "5001-10000 students" },
    { value: "10001-50000", label: "10001-50000 students" },
    { value: "50000+", label: "50000+ students" },
  ];

  const getTitle = () => {
    switch (formData.purpose) {
      case "enterprise":
        return "Tell us about your enterprise";
      case "university":
        return "Tell us about your educational institution";
      case "nonprofit":
        return "Tell us about your non-profit organization";
      case "personal":
        return "Tell us about yourself";
      default:
        return "Tell us more";
    }
  };

  return (
    <div className="py-8">

      {/* Heading Section */}
      <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
        {getTitle()}
      </h1>

      {/* Organization/University Name Input */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {formData.purpose === "university" ? "University Name" : 
           formData.purpose === "enterprise" ? "Organization Name" :
           formData.purpose === "nonprofit" ? "Non-Profit Name" :
           "Name"}
        </label>
        <input
          type="text"
          value={formData.orgName || ''}
          onChange={(e) => setFormData('orgName', e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          placeholder={`Enter ${
            formData.purpose === "university" ? "university" : 
            formData.purpose === "enterprise" ? "organization" :
            formData.purpose === "nonprofit" ? "non-profit" :
            "your"
          } name`}
        />
      </div>

      {/* Size Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {formData.purpose === "university" ? "Institution Size" : "Organization Size"}
        </label>
        <RadioGroup
          options={formData.purpose === "university" ? universitySizeOptions : sizeOptions}
          selectedOption={formData.size || ''}
          onChange={(e) => setFormData('size', e.target.value)}
        />
      </div>

      {/* Additional Fields based on type */}
      {formData.purpose === "university" && (
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type of Institution
          </label>
          <RadioGroup
            options={[
              { value: "public", label: "Public University" },
              { value: "private", label: "Private University" },
              { value: "community", label: "Community College" },
              { value: "technical", label: "Technical Institute" },
            ]}
            selectedOption={formData.institutionType || ''}
            onChange={(e) => setFormData('institutionType', e.target.value)}
          />
        </div>
      )}

      {formData.purpose === "nonprofit" && (
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Non-Profit Category
          </label>
          <RadioGroup
            options={[
              { value: "education", label: "Education" },
              { value: "healthcare", label: "Healthcare" },
              { value: "environment", label: "Environment" },
              { value: "humanitarian", label: "Humanitarian" },
              { value: "other", label: "Other" },
            ]}
            selectedOption={formData.nonprofitType || ''}
            onChange={(e) => setFormData('nonprofitType', e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default Second;
