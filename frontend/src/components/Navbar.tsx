import React, { useState } from 'react';
import Turnerslogo from '../assets/Turnerslogo.png'; // Replace with the actual path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="bg-gray-200 text-gray-800 shadow-lg p-2">
      <div className="container mx-auto">
        {/* NavTop */}
        <div className="flex justify-center bg-gray-100 text-turnersblue font-turners text-sm">
          <ul className="flex flex-row space-x-4 my-3">
            <li className="hover:text-turnersred transition-colors duration-300">Cars</li>
            <li className="hover:text-turnersred transition-colors duration-300">Turners Subscription</li>
            <li className="hover:text-turnersred transition-colors duration-300">Trucks & Machinery</li>
            <li className="hover:text-turnersred transition-colors duration-300">Damaged & End of Life</li>
            <li className="hover:text-turnersred transition-colors duration-300">Motorcycles</li>
            <li className="hover:text-turnersred transition-colors duration-300">General Goods</li>
            <li className="hover:text-turnersred transition-colors duration-300">Buses, Caravans & Motorhomes</li>
          </ul>
        </div>
        {/* NavMid */}
        <div className="flex justify-between items-center py-3">
          <div className="mx-10">
            <img src={Turnerslogo} alt="Turners Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <a href="http://www.turners.co.nz" className="text-turnersblue hover:text-turnersred transition-colors duration-300">LOGIN</a>
            <span className="text-turnersgrey font-medium italic">OR</span>
            <a href="http://www.turners.co.nz" className="text-turnersblue hover:text-turnersred transition-colors duration-300">REGISTER</a>
            <a href="http://www.turners.co.nz" className="text-gray-800 hover:text-turnersred transition-colors duration-300">0800 887 637</a>
            <a href="http://www.turners.co.nz" className="text-gray-800 hover:text-turnersred transition-colors duration-300">Find Us</a>
            <a href="http://www.turners.co.nz" className="text-turnersred font-semibold">中文</a>
          </div>
        </div>
        {/* NavBot */}
        <div className="flex justify-between items-center py-4 bg-blue-100">
          <ul className="flex space-x-6">
            <li>
              <a href="http://www.turners.co.nz" className="text-gray-800 font-semibold flex items-center space-x-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" className="text-gray-800 group-hover:text-turnersred transition-colors duration-300" />
                Find a Car
              </a>
            </li>
            <li>
              <a href="http://www.turners.co.nz" className="text-gray-800 font-semibold">How to Buy</a>
            </li>
            <li>
              <a href="http://www.turners.co.nz" className="text-gray-800 font-semibold">Sell your Car</a>
            </li>
            <li className="relative">
              <a href="http://www.turners.co.nz" className="text-gray-800 font-semibold" onClick={toggleSubMenu}>
                Finance & Insurance
              </a>
              {showSubMenu && (
                <div className="sub-menu absolute top-9 left-0 bg-white shadow-md mt-2 py-2 border max-h-40 w-72">
                  {/* Sub-menu content */}
                  <a href="/Cars/finance-insurance/" target="_blank" title="Finance Information" data-href="/Cars/finance-insurance/" className="text-gray-800 block px-4 text-base">Finance Information</a>
                  <a href="/Cars/finance-insurance/car--personal-finance-application/" target="_blank" data-href="/Cars/finance-insurance/car--personal-finance-application/" className="text-gray-800 block px-4 text-base">Apply Online for Finance</a>
                  <a href="/Cars/finance-insurance/Business-Finance-Application/" target="_blank" title="Apply Online for Business Finance" data-href="/Cars/finance-insurance/Business-Finance-Application/" className="text-gray-800 block px-4 text-base">Apply Online for Business Finance</a>
                  <a href="/Cars/finance-insurance/car-insurance/" target="_blank" title="Car Insurance" data-href="/Cars/finance-insurance/car-insurance/" className="text-gray-800 block px-4 text-base">Car Insurance</a>
                </div>
              )}
            </li>
            <li>
              <a href="http://www.turners.co.nz" className="text-gray-800 font-semibold">Turners Subscription</a>
            </li>
          </ul>
          <ul className="flex space-x-6">
            <li>
              <a href="http://www.turners.co.nz" className="text-gray-800 font-semibold">Auctions</a>
            </li>
            <li>
              <a href="http://www.turners.co.nz" className="text-gray-800 font-semibold">Services & Info</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
