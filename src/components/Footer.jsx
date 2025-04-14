import {
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaFacebookF,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-white text-black dark:bg-black dark:text-white text-sm px-6 py-12 md:px-16 transition-colors duration-300">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo and Pronunciation */}
          <div>
            <div className="mb-2">
              <img src="/logo.svg" alt="EDEX Logo" className="w-8 inline mr-2" />
              <span className="text-lg font-semibold">edex</span>
            </div>
            <p className="italic text-xs text-gray-600 dark:text-gray-400">
              Pronounced as <span className="font-medium text-black dark:text-white">'     '</span>
            </p>
          </div>
  
          {/* Registered Office + Socials */}
          <div>
            <p className="text-orange-500 font-semibold mb-2">Registered office</p>
            <p className="text-gray-700 dark:text-gray-300">
               Mantri Commercio,<br />
              Bellandur, Bengaluru, Karnataka 560103
            </p>
            <div className="flex space-x-3 mt-4">
              <FaInstagram className="hover:text-orange-500" />
              <FaTwitter className="hover:text-orange-500" />
              <FaLinkedinIn className="hover:text-orange-500" />
              <FaFacebookF className="hover:text-orange-500" />
            </div>
            <div className="mt-4">
              <p className="text-orange-500 font-semibold">Talk to us</p>
              <p className="mt-1">
                📞 18002961199<br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  For all card related queries
                </span>
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                080-65199888<br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  For all travel related queries
                </span>
              </p>
            </div>
          </div>
  
          {/* Newsroom */}
          <div>
            <p className="text-orange-500 font-semibold mb-2">Newsroom</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Press releases</li>
              <li>News Coverage</li>
              <li>Press Kit</li>
            </ul>
          </div>
  
          {/* Important Links */}
          <div>
            <p className="text-orange-500 font-semibold mb-2">Important links</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>MITC</li>
              <li>Key Fact Statement</li>
              <li>Card holder agreement</li>
              <li>Terms of use</li>
              <li>Grievance redressal</li>
              <li>Delete your account</li>
              <li>Roles and Responsibilities of TPAP</li>
              <li>Whitehat</li>
              <li>Privacy policy</li>
              <li>Newsroom</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
  
        {/* Footer Notes */}
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-xs text-gray-600 dark:text-gray-400">
          <p>© EDEX TECHNOLOGY PVT. LTD. 2022–25</p>
          <p className="mt-2">
            Edex is managed by the legends...
          </p>
          <p className="mt-2">
            While EDEX is the force behind your seamless education experiences...
          </p>
          <p className="mt-2">
            Disclaimer: You may have noticed some brand logos used...
          </p>
        </div>
      </footer>
    );
  }
  