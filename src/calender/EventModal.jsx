import React from "react";

function EventModal({ modalData, setModalData, handleModalSubmit, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Create Event</h2>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={modalData.title}
              onChange={(e) =>
                setModalData({ ...modalData, title: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Event Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={modalData.date}
              onChange={(e) =>
                setModalData({ ...modalData, date: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex w-full justify-between">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <input
                type="time"
                value={modalData.startTime}
                onChange={(e) =>
                  setModalData({ ...modalData, startTime: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Time
              </label>
              <input
                type="time"
                value={modalData.endTime}
                onChange={(e) =>
                  setModalData({ ...modalData, endTime: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <button
            className="px-4 py-2 bg-red-100 border border-red-600 text-red-700 rounded-xl hover:bg-red-200"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#5263f3] text-white rounded-xl hover:bg-[#4758ef]"
            onClick={handleModalSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventModal;