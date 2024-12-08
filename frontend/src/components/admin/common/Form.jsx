import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextEditor from "./TextEditor";

const Form = ({
  fromTitle,
  fields,
  isSelectDisable,
  selectValues,
  isEditorDisable,
  mainFaction,
}) => {
  const id = useId();
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const selectDisable = isSelectDisable ? "hidden" : "flex";
  const editorDisable = isEditorDisable ? "hidden" : "flex";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!isEditorDisable) {
      formData.set("content", content);
    }
    const formDataObject = Object.fromEntries(formData.entries());
    setLoading(true);
    
    const res = await mainFaction(formDataObject);
    if (typeof res === "object") {
      setLoading(false);
      navigate("/admin/teams");
    }
  };

  return (
    <div className="p-5 my-1">
      <h2 className="text-blue-500 font-bold text-center mt-3 mb-1 text-xl">
        {fromTitle}
      </h2>
      <div className="divider"></div>
      <form className="" onSubmit={handleSubmit}>
        <div className="avatar mb-5 w-full">
          <div className="w-64 m-auto rounded-lg">
            <img
              src={
                imgUrl
                  ? imgUrl
                  : `https://i.ibb.co.com/5xxDgbR/demo-profile-img.jpg`
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor={id} className="font-semibold cursor-pointer">
              Img Url:
            </label>
            <input
              type="url"
              name="profileImg"
              placeholder="Your Profile Img Url"
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
                type="text"
                name={field.name}
                placeholder={field.placeholder}
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
            <select name="role" className="select select-bordered w-full">
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
