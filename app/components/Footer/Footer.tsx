import React from "react";

function Footer() {
  return (
    <>
      {/* =========================
 Footer
  ========================== */}
      <footer className="mt-10 border-t border-gray-200 bg-[#eaf1ff]">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
       py-6 flex flex-col sm:flex-row
       items-center justify-between gap-3"
        >
          <p className="text-sm text-gray-500">
            © 2026 BookStore. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-600">
              About
            </a>
            <a href="#" className="hover:text-indigo-600">
              Contact
            </a>
            <a href="#" className="hover:text-indigo-600">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
