import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import membersData from "./members.json";
import { ArrowLeft } from "lucide-react";

function Members() {
  const [members, setMembers] = useState(membersData);
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [accountType, setAccountType] = useState("regular");
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [accountListOpen, setAccountListOpen] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleCheck = () => {
    if (tags.length > 0) {
      setAccountListOpen(true);
      setIsInviteOpen(false);
    }
  };

  const handleSave = () => {
    setAccountListOpen(false);
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSortByNameLength = () => {
    const sortedMembers = [...members].sort(
      (a, b) => b.fullName.length - a.fullName.length
    );
    setMembers(sortedMembers);
  };

  const handlePopup = (member, action) => {
    if (action === "Change Account type") {
      setSelectedMember(member);
      setIsPopupOpen(true);
      setIsMenuOpen(false);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsInviteOpen(false);
  };

  const handleAccount = (index) => {
    setIsMenuOpen(isMenuOpen === index ? null : index);
  };

  const handleInvite = () => {
    setIsInviteOpen(!isInviteOpen);
  };

  return (
    <div className="w-4/5 my-10 mx-auto">
      <div className="flex justify-between">
        <div className="flex items-center space-x-4 cursor-pointer dark:text-white" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6" />
        <span className="text-3xl font-bold dark:text-white">
          Manage members
        </span>
        </div>
        <button
          className="bg-green-800 text-white p-2 rounded-lg text-base"
          onClick={handleInvite}
        >
          Invite People
        </button>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col">
          <div className="py-2">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <button
                          className="text-blue-600 text-lg"
                          onClick={handleSortByNameLength}
                        >
                          Full name
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Display name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Account type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Billing status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {members.map((member, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-900">
                              {member.fullName}
                            </div>
                            <div>
                              <svg
                                onClick={() => handleAccount(index)}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                              >
                                <circle
                                  cx="5"
                                  cy="12"
                                  r="2"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="2"
                                  fill="currentColor"
                                />
                                <circle
                                  cx="19"
                                  cy="12"
                                  r="2"
                                  fill="currentColor"
                                />
                              </svg>
                              {isMenuOpen === index && (
                                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                  <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                  >
                                    <button
                                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      role="menuitem"
                                      onClick={() =>
                                        handlePopup(
                                          member,
                                          member.accountType ===
                                            "Primary workspace owner"
                                            ? "Edit your profile"
                                            : "Change Account type"
                                        )
                                      }
                                    >
                                      {member.accountType ===
                                      "Primary workspace owner"
                                        ? "Edit your profile"
                                        : "Change Account type"}
                                    </button>
                                    <button
                                      href="#"
                                      className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                      role="menuitem"
                                    >
                                      {member.accountType ===
                                      "Primary workspace owner"
                                        ? "Transfer Ownership"
                                        : "Deactivate account"}
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {member.displayName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {member.emailAddress}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {member.accountType}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member.billingStatus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg relative w-2/3 md:w-1/3">
            <button
              onClick={closePopup}
              className="absolute p-1 rounded-lg top-6 right-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="font-bold text-2xl mb-3">Change Account Type</h2>
            <h2 className="text-sm font-semibold mb-4">
              Select the account type that Mssketh should have for hrlabs.
            </h2>
            <div className="mb-4">
              <h3 className="mb-2">choose account type</h3>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  value="owner"
                  checked={accountType === "owner"}
                  onChange={() => setAccountType("owner")}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Workspace owner</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  value="admin"
                  checked={accountType === "admin"}
                  onChange={() => setAccountType("admin")}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Workspace admin</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="regular"
                  checked={accountType === "regular"}
                  onChange={() => setAccountType("regular")}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Regular member</span>
              </label>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600">
                Your workspace is currently on the free version of Slack.
                Upgrading to our Pro subscription will give you access to
                additional{" "}
                <a href="#" className="text-blue-600 underline">
                  user management features
                </a>
                .
              </p>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={closePopup}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {isInviteOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg relative w-2/3 md:w-1/3">
            <button
              onClick={closePopup}
              className="absolute p-1 rounded-lg top-6 right-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-3">Invite people to HrLabs</h3>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-gray-700 font-semibold">To:</label>
              <div className="flex items-center flex-wrap border border-blue-500 rounded p-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      emailRegex.test(tag) ? "bg-green-400" : "bg-red-200"
                    } text-gray-800 rounded px-2 py-1 mr-2 mb-2 items-center`}
                  >
                    <span>{tag}</span>
                    <button
                      onClick={() => removeTag(tag)}
                      className="ml-2 text-gray-600 hover:text-gray-800"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="name@gmail.com"
                  className="flex-grow px-2 bg-transparent outline-none h-10"
                />
              </div>
              <button
                className="ml-auto w-1/4 py-2 mt-2 rounded-lg text-white bg-green-600"
                onClick={handleCheck}
              >
                Check
              </button>
            </div>
          </div>
        </div>
      )}
      {accountListOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg relative w-2/3 md:w-1/3">
            <button
              onClick={() => setAccountListOpen(false)}
              className="absolute p-1 rounded-lg top-6 right-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-3">Checking Accounts</h3>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Email</th>
                  <th className="py-2">Active</th>
                </tr>
              </thead>
              <tbody>
                {tags.map((tag, index) => (
                  <tr key={index} className="bg-gray-100 border-b">
                    <td className="py-2 text-center px-4">{tag}</td>
                    <td className="py-2 text-center">
                      {Math.random() > 0.5 ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-end">
              <button
                className="ml-auto  w-1/4 py-2 mt-2 rounded-lg text-white bg-green-600"
                onClick={handleSave}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Members;
