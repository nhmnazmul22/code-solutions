import React from "react";
import contactImg from "../../assets/images/contact.svg";
import useMessageStore from "../../store/MessageStore";
const Contact = () => {
  const { setMessage } = useMessageStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const result = await setMessage(data);
    console.log(result);
  };

  return (
    <div className="py-20 md:px-[3%] px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <img className="m-auto" src={contactImg} alt="" />
        </div>
        <div className="">
          <h3 className="text-4xl font-bold bg-blue-500 text-white p-3 rounded ">
            Contact Us
          </h3>
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <div className="input-group mt-5">
              <label htmlFor="name" className="font-semibold">
                Enter your name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="input mt-2 input-bordered w-full"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="font-semibold">
                Enter your Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="input mt-2 input-bordered w-full"
              />
            </div>
            <div className="input-group">
              <label htmlFor="subject" className="font-semibold">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject Here"
                className="input mt-2 input-bordered w-full"
              />
            </div>
            <div className="input-group">
              <label htmlFor="message" className="font-semibold">
                Message:
              </label>
              <textarea
                style={{ resize: "none" }}
                type="text"
                name="message"
                id="message"
                placeholder="Message Here..."
                className="textarea h-36 mt-2 input-bordered w-full"
              />
            </div>
            <button className="btn bg-blue-600 text-white hover:bg-blue-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
