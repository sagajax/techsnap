import { Link } from "react-router-dom";
import SidePopup from "./sidePopup";
import { IoMdPerson } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import { MdAccountCircle, MdWorkspacePremium } from "react-icons/md";

const Profile = ({ onClose }) => {
return (
    <SidePopup isOpen={true} closeSettingBar={onClose}>
        <div className="p-4">
            <ul className="mt-0 space-y-1">
                <li className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                        <IoMdPerson className="w-5 h-5 mr-2" />
                        <span>Profile</span>
                    </Link>
                </li>
                <li className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                        <MdWorkspacePremium className="w-5 h-5 mr-2" />
                        <span>Upgrade to Pro</span>
                    </Link>
                </li>
                <li className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 1024 1024">
                            <path d=""></path>
                        </svg>
                        <span>My Playgrounds</span>
                    </Link>
                </li>
                <li className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                        <MdAccountCircle className="w-5 h-5 mr-2" />
                        <span>My Account</span>
                    </Link>
                </li>
                <li className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                        <svg className="w-5 h-5 mr-2" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 21H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h4m10 5h4a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-4m-4-9v4m0 0v4m0-4h4m-4 0H9" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.72 11.06A5 5 0 0 0 12 9a5 5 0 0 0-4.72 3.06" />
                            <circle cx="12" cy="4" r="2" />
                        </svg>
                        <span>New playground</span>
                    </Link>
                </li>
                <li className="hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                        <svg className="w-5 h-5 mr-2" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v3M6 21v-3M18 3v3M18 21v-3M3 6h3m12 0h3M3 18h3m12 0h3" />
                            <rect x="6" y="8" width="12" height="8" rx="1" />
                        </svg>
                        <span>Import playground</span>
                    </Link>
                </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <Link className="block text-center text-blue-600 hover:text-blue-700 font-medium">
                    Sign Out
                </Link>
            </div>
        </div>
    </SidePopup>
);
}

export default Profile;
