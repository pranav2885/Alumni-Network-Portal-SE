const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">📞 Contact & Social Media</h2>

      {/* Event Coordinators */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Event Coordinators</h3>
        <p className="text-gray-700 mt-2">📧 Email: alumni.events@srmap.edu.in</p>
        <p className="text-gray-700">📞 Phone: +91 98765 43210</p>
      </div>

      {/* Social Media Links */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg">🔗  LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-lg">📸 Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-lg">📘 Facebook</a>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">📩 Subscribe to Our Newsletter</h3>
        <p className="text-gray-600 mb-4">Stay updated on upcoming alumni events!</p>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-2 border w-full rounded-md"
        />
        <button className="bg-blue-600 text-white mt-3 px-4 py-2 rounded-lg w-full hover:bg-blue-700">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contact;
