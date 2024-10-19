import React from "react";

const ContactPage = () => {
  return (
    <section id="contact" className="min-h-screen flex justify-center items-center text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-8">
          Get in touch with me to discuss your project or for any inquiries.
          We’re here to help!
        </p>
        <form className="mx-auto max-w-lg">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 border border-gray-700 bg-gray-800 rounded-lg text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border border-gray-700 bg-gray-800 rounded-lg text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-4 p-3 border border-gray-700 bg-gray-800 rounded-lg text-white placeholder-gray-400"
            rows="4"
          ></textarea>
              <button
              type="Submit"
            className=" bg-stone-800 border border-white hover:bg-stone-300 hover:text-black text-white py-2 px-7 rounded-full text-lg font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
