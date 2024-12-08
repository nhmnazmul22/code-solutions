import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({
  fromTitle,
  fields,
  isSelectDisable,
  selectValues,
  mainFaction,
  initialData,
  url,
}) => {
  const [imgUrl, setImgUrl] = useState(initialData?.imgUrl || "");
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = initialData?.[field.name] || "";
      return acc;
    }, {})
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setFormFields((prev) =>
        fields.reduce((acc, field) => {
          acc[field.name] = initialData[field.name] || "";
          return acc;
        }, {})
      );
      setImgUrl(initialData?.imgUrl || "");
    }
  }, [initialData, fields]);

  // Input Handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  // Form Handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = {
      ...formFields,
      imgUrl: imgUrl,
    };
    console.log(formDataObject);
    setLoading(true);
    const res = await mainFaction(formDataObject, initialData?._id);
    setLoading(false);

    if (res) {
      navigate(url);
    }
  };

  return (
    <div className="p-5 my-1">
      <h2 className="text-blue-500 font-bold text-center mt-3 mb-1 text-xl">
        {fromTitle}
      </h2>
      <div className="divider"></div>
      <form onSubmit={handleSubmit}>
        <div className="avatar mb-5 w-full">
          <div className="w-64 m-auto rounded-lg">
            <img src={imgUrl || `https://placehold.co/400`} alt="Profile" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 w-full">
            <label className="font-semibold cursor-pointer">Img Url:</label>
            <input
              type="url"
              name="imgUrl"
              placeholder="Your Img Url"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-3 w-full">
              <label className="font-semibold cursor-pointer">
                {field.label}
              </label>
              {field.name === "description" ? (
                <textarea
                  name={field.name}
                  className="textarea textarea-bordered h-64"
                  placeholder={field.placeholder}
                  value={formFields[field.name]}
                  onChange={handleChange}
                ></textarea>
              ) : (
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formFields[field.name]}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required={field.required}
                />
              )}
            </div>
          ))}
          {isSelectDisable ? null : (
            <div className="flex flex-col gap-3 w-full">
              <label className="font-semibold cursor-pointer">Role:</label>
              <select
                name="role"
                value={formFields.role || ""}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="">Choose a Role</option>
                {selectValues.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn bg-blue-500 text-white hover:bg-blue-400 mt-5"
        >
          {!loading ? (
            "Submit"
          ) : (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
