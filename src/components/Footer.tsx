
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-8">
      <div className="text-center text-gray-500 text-sm">
        <div className="mb-2">©2025 Zoom Communications, Inc. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-x-2">
          <a href="#" className="hover:text-zoom-blue">Trust Center</a>
          <span>|</span>
          <a href="#" className="hover:text-zoom-blue">Acceptable Use Guidelines</a>
          <span>|</span>
          <a href="#" className="hover:text-zoom-blue">Legal & Compliance</a>
          <span>|</span>
          <a href="#" className="hover:text-zoom-blue">Do Not Sell My Personal Information</a>
          <span>|</span>
          <a href="#" className="hover:text-zoom-blue">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
