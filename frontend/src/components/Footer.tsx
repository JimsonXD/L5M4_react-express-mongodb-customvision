import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
           <footer>
      <div className="bg-turnersgrey text-white p-5">
        <div className="container mx-auto flex flex-row justify-between">
          <div className="footer-section">
            <h3 className="text-lg font-bold my-4">CARS</h3>
            <ul className="list-none text-sm">
              <li className="py-1">How to Buy</li>
              <li className="pb-1">Sell Your Car</li>
              <li className="pb-1">Finance & Insurance</li>
              <li className="pb-1">Auctions & Events</li>
              <li className="pb-1">Buyer & Seller Fees</li>
              <li className="pb-1">Vehicle Sale Price History Tool</li>
              <li className="pb-1">Shipping Costs</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold my-4">FINANCE & INSURANCE</h3>
            <ul className="list-none text-sm">
              <li className="py-1">Finance Homepage</li>
              <li className="pb-1">Car & Personal Finance</li>
              <li className="pb-1">Loan Calculator</li>
              <li className="pb-1">Car Insurance</li>
              <li className="pb-1">Mechanical Breakdown Insurance</li>
              <li className="pb-1">General Insurances</li>
              <li className="pb-1">Trucks Finance</li>
              <li className="pb-1">Financial Information</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold my-4">SEARCH FOR</h3>
            <ul className="list-none text-sm">
              <li className="py-1">Cars</li>
              <li className="pb-1">Trucks & Machinery</li>
              <li className="pb-1">Damaged & End of Life Cars</li>
              <li className="pb-1">Boats & Marine</li>
              <li className="pb-1">Motorcycles & Scooters</li>
              <li className="pb-1">General Goods</li>
              <li className="pb-1">Buses, Caravans & Motorhomes</li>
              <li className="pb-1">Turners Auction Schedule</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold my-4">ABOUT US</h3>
            <ul className="list-none text-sm">
              <li className="py-1">Overview</li>
              <li className="pb-1">Turners Careers</li>
              <li className="pb-1">Terms and Conditions</li>
              <li className="pb-1">Privacy Policy</li>
              <li className="pb-1">Turners Live</li>
              <li className="pb-1">The Good Oil Blog</li>
              <li className="pb-1">Email Alerts</li>
              <li className="pb-1">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-section bg-darkgrey p-5 px-20 text-white">
        <div className="flex justify-between items-center">
          <p className="text-xs text-white">&copy; 2022 Turners</p>

          <ul className="flex space-x-4">
            <li className="group flex items-center py-2 px-3 cursor-pointer">
              <FontAwesomeIcon icon={faHouseChimney} size="sm" className="text-turnersred group-hover:text-white transition-colors duration-700" />
              <span className="ml-4 hover:text-turnersgrey transition-colors duration-700">Branch Details</span>
            </li>
            <li className="group flex items-center py-2 px-3 cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} size="sm" className="text-turnersred group-hover:text-white transition-colors duration-700" />
              <span className="ml-4 hover:text-turnersgrey transition-colors duration-700">Facebook</span>
            </li>
            <li className="group flex items-center py-2 px-3 cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} size="sm" className="text-turnersred group-hover:text-white transition-colors duration-700" />
              <span className="ml-4 hover:text-turnersgrey transition-colors duration-700">Newsletter</span>
            </li>
            <li className="group flex items-center py-2 px-3 cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} size="sm" className="text-turnersred group-hover:text-white transition-colors duration-700" />
              <span className="ml-4 hover:text-turnersgrey transition-colors duration-700">Email Alerts</span>
            </li>
            <li className="group flex items-center py-2 px-3 cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} size="sm" className="text-turnersred group-hover:text-white transition-colors duration-700" />
              <span className="ml-4 hover:text-turnersgrey transition-colors duration-700">Instagram</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
