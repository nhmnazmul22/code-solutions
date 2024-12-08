import React, { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextEditor from "./TextEditor";

const Form = ({
  fromTitle,
  fields,
  isSelectDisable,
  selectValues,
  isEditorDisable,
  mainFaction,
  initialData,
  url, // Pass initial data for updates
}) => {
  const id = useId();
  console.log(initialData);
  const [content, setContent] = useState(initialData?.content || "");
  const [imgUrl, setImgUrl] = useState(initialData?.profileImg || "");
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = initialData?.[field.name] || "";
      return acc;
    }, {})
  );

  const selectDisable = isSelectDisable ? "hidden" : "flex";
  const editorDisable = isEditorDisable ? "hidden" : "flex";
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = {
      ...formFields,
      profileImg: imgUrl,
    };

    if (!isEditorDisable) {
      formDataObject.content = content;
    }

    setLoading(true);
    const res = await mainFaction(formDataObject, initialData?._id);
    if (res) {
      setLoading(false);
      navigate(url);
      console.log(formDataObject);
    }
  };

  useEffect(() => {
    if (initialData) {
      setFormFields((prev) =>
        fields.reduce((acc, field) => {
          acc[field.name] = initialData[field.name] || "";
          return acc;
        }, {})
      );
      setContent(initialData.content || "");
      setImgUrl(initialData.profileImg || "");
    }
  }, [initialData, fields]);

  return (
    <div className="p-5 my-1">
      <h2 className="text-blue-500 font-bold text-center mt-3 mb-1 text-xl">
        {fromTitle}
      </h2>
      <div className="divider"></div>
      <form className="" onSubmit={handleSubmit}>
        <div className="avatar mb-5 w-full">
          <div className="w-64 m-auto rounded-lg">
            <img src={imgUrl || `https://placehold.co/400`} alt="Profile" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor={id} className="font-semibold cursor-pointer">
              Img Url:
            </label>
            <input
              type="url"
              name="Img"
              placeholder="Your Img Url"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              id={id}
              className="input input-bordered w-full"
            />
          </div>
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-3 w-full">
              <label htmlFor={id} className="font-semibold cursor-pointer">
                {field.label}
              </label>
              <input
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder}
                value={formFields[field.name]}
                onChange={handleChange}
                id={id}
                className="input input-bordered w-full"
                required={field.required}
              />
            </div>
          ))}
          <div className={`flex flex-col gap-3 w-full ${selectDisable}`}>
            <label htmlFor={id} className="font-semibold cursor-pointer">
              Role:
            </label>
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
          <div className={`flex flex-col gap-3 w-full ${editorDisable}`}>
            <label htmlFor={id} className="font-semibold cursor-pointer">
              Description:
            </label>
            <TextEditor content={content} setContent={setContent} />
          </div>
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
