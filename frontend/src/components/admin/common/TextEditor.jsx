import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles

const TextEditor = ({ content, setContent }) => {
  const handleContentChange = (value) => {
    setContent(value);
  };

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers
    ["bold", "italic", "underline", "strike"], // Formatting
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    [{ indent: "-1" }, { indent: "+1" }], // Indentation
    ["link", "image", "video"], // Links, images, videos
    ["clean"], // Remove formatting
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        className="h-80 mb-10"
        theme="snow"
        modules={modules}
        placeholder="Write your description here..."
      />
    </div>
  );
};

export default TextEditor;
