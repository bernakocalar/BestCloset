const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-4 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">BestCloset</h2>
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook text-blue-600"></i></a>
            <a href="#"><i className="fab fa-instagram text-blue-600"></i></a>
            <a href="#"><i className="fab fa-twitter text-blue-600"></i></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Company Info</h4>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Features</h4>
          <ul className="space-y-2">
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Get In Touch</h4>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="border border-gray-300 rounded px-3 py-2"
            />
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
            <p className="text-sm text-gray-500">Lore imp sum dolor Amit</p>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
        Made With Love By Finland. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
