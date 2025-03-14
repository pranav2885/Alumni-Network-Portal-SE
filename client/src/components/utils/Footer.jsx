const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/about-us" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p>SRM University, Amaravati</p>
          <p>Email: alumni@srmap.edu.in</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
          <form className="flex flex-col">
            <input type="email" placeholder="Enter your email" className="p-2 rounded text-gray-900 mb-2" />
            <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded text-white">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        © 2025 SRM Alumni Network. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
