const Contact = () => {
  return (
    <div className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form
        action="https://formspree.io/f/mvgarobl"  // Replace this with your real Formspree ID
        method="POST"
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Question
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Alternative contact info */}
      <div className="mt-10 text-center text-gray-700">
        <p>
          Prefer email? You can also reach out directly to us at{" "}
          <a href="mailto:kolik.team@gmail.com" className="text-blue-600 hover:underline">
            support@kolik.com
          </a>
          . We aim to respond within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Contact;
