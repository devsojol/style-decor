const Footer = () => {
  return (
    <footer className="w-full text-white pt-20 pb-10 relative overflow-hidden bg-[#0f0f11]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-4">
        {/* LOGO + CONTACT DETAILS */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🏠</span>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-gradient">
              StyleDecor
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-6 mb-6">
            We provide premium interior design services for homes, offices and
            commercial spaces.
          </p>

          {/* Contact Details */}
          <div className="space-y-2 text-gray-300 text-sm">
            <p>📞 Hotline: (+880) 16056 54180</p>
            <p>📧 Email: support@styledecor.com</p>
            <p>📍 Address: Dhaka, Bangladesh</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-4">
            {["🌐", "🐦", "📸", "▶️"].map((icon) => (
              <span
                key={icon}
                className="h-10 w-10 bg-[#1a1a1c] flex items-center justify-center rounded-full 
                hover:bg-[#1fa2ff] transition-all duration-300 cursor-pointer"
              >
                {icon}
              </span>
            ))}
          </div>

          <p className="text-gray-300 text-sm mt-4">
            We are with you in your need! Stay with us.
          </p>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="font-bold text-xl mb-4">Our Information</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "About Us",
              "Our Company",
              "Recent News",
              "Our Projects",
              "All Services",
              "Smart Home",
              "Online Store",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* BUSINESS HOURS (New Requirement Added) */}
        <div>
          <h3 className="font-bold text-xl mb-4">Business Working Hours</h3>
          <ul className="space-y-2 text-gray-300">
            <li>🕒 Saturday – Thursday</li>
            <li>10:00 AM – 08:00 PM</li>
            <li>🛑 Friday: Closed</li>
            <li className="pt-3">
              <span className="text-[#1fa2ff] font-semibold">
                Emergency Support:
              </span>{" "}
              24/7 Available
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "🏠 Home Interior Works",
              "🛋️ Furniture & Custom Build",
              "🎨 Decor & Styling",
              "💡 Lighting Solutions",
              "🏢 Commercial / Office Interior",
              "🏗️ Remodeling & Construction",
              "🧹 Maintenance & Support",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        Sk StyleDecor © 2025. All Rights Reserved. Designed by Khandaker Sojol
      </div>
    </footer>
  );
};

export default Footer;
