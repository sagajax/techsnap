import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";

export default function SchedulingSettingsForm({ data, setLocalMeeting, onCancel }) {
    // State for which date range option is selected: "rolling", "custom", or "indefinite"
    const [dateRangeOption, setDateRangeOption] = useState(
        data.extendedProps.dateRangeOption || "rolling"
    );

    // For the "rolling" option
    const [rollingRangeValue, setRollingRangeValue] = useState(
        data.extendedProps.schedulingWindow || 60
    );
    const [rollingTimeUnit, setRollingTimeUnit] = useState(
        data.extendedProps.schedulingUnit || "calendar days"
    );

    // For the "custom" option
    const [customStartDate, setCustomStartDate] = useState(
        data.extendedProps.customStartDate || ""
    );
    const [customEndDate, setCustomEndDate] = useState(
        data.extendedProps.customEndDate || ""
    );

    // --- Buffer Time States ---
    const [showBufferMenu, setShowBufferMenu] = useState(false);
    // If you stored buffer times in extendedProps, load them or default to 0
    const [beforeEvent, setBeforeEvent] = useState(
        typeof data.extendedProps.beforeBuffer === "number"
            ? data.extendedProps.beforeBuffer
            : 0
    );
    const [afterEvent, setAfterEvent] = useState(
        typeof data.extendedProps.afterBuffer === "number"
            ? data.extendedProps.afterBuffer
            : 0
    );

    // Compute today's date and the max selectable date (100 days from today)
    const today = new Date().toISOString().split("T")[0];
    const maxSelectableDate = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

    // Whenever local states change, update the meeting object
    useEffect(() => {
        // Build an object with scheduling updates
        let updateProps = {
            dateRangeOption,
        };

        // --- Rolling Option ---
        if (dateRangeOption === "rolling") {
            updateProps.schedulingWindow = rollingRangeValue;
            updateProps.schedulingUnit = rollingTimeUnit;
            updateProps.customStartDate = null;
            updateProps.customEndDate = null;

            try {
                const now = new Date();
                const multiplier = rollingTimeUnit === "calendar weeks" ? 7 : 1;
                const numericValue = isNaN(rollingRangeValue) ? 0 : rollingRangeValue;
                const newEndDate = new Date(
                    now.getTime() + numericValue * multiplier * 24 * 60 * 60 * 1000
                );
                if (isNaN(newEndDate.getTime())) {
                    // fallback if invalid
                    updateProps.startDate = now.toISOString();
                    updateProps.endDate = now.toISOString();
                } else {
                    updateProps.startDate = now.toISOString();
                    updateProps.endDate = newEndDate.toISOString();
                }
            } catch (error) {
                console.error("Error computing rolling scheduling dates:", error);
                const now = new Date();
                updateProps.startDate = now.toISOString();
                updateProps.endDate = now.toISOString();
            }
        }
        // --- Custom Option ---
        else if (dateRangeOption === "custom") {
            updateProps.customStartDate = customStartDate;
            updateProps.customEndDate = customEndDate;
            updateProps.schedulingWindow = null;
            updateProps.schedulingUnit = null;

            if (customStartDate && customEndDate) {
                try {
                    const startDateObj = new Date(customStartDate);
                    const endDateObj = new Date(customEndDate);
                    if (!isNaN(startDateObj.getTime()) && !isNaN(endDateObj.getTime())) {
                        updateProps.startDate = startDateObj.toISOString();
                        updateProps.endDate = endDateObj.toISOString();
                    }
                } catch (error) {
                    console.error("Error computing custom dates:", error);
                }
            }
        }
        // --- Indefinite Option ---
        else if (dateRangeOption === "indefinite") {
            updateProps.schedulingWindow = null;
            updateProps.schedulingUnit = null;
            updateProps.customStartDate = null;
            updateProps.customEndDate = null;
            const now = new Date();
            updateProps.startDate = now.toISOString();
            updateProps.endDate = null;
        }

        // Add buffer times to the updateProps as well
        updateProps.beforeBuffer = beforeEvent;
        updateProps.afterBuffer = afterEvent;

        // Now update the localMeeting object
        setLocalMeeting((prev) => ({
            ...prev,
            startDate: updateProps.startDate,
            endDate: updateProps.endDate,
            extendedProps: {
                ...prev.extendedProps,
                ...updateProps,
            },
        }));
    }, [
        dateRangeOption,
        rollingRangeValue,
        rollingTimeUnit,
        customStartDate,
        customEndDate,
        beforeEvent,
        afterEvent,
        setLocalMeeting,
    ]);

    // Handlers
    const handleOptionChange = (e) => {
        setDateRangeOption(e.target.value);
    };

    const handleRollingValueChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setRollingRangeValue(value);
        }
    };

    const handleRollingUnitChange = (e) => {
        setRollingTimeUnit(e.target.value);
    };

    const handleCustomStartChange = (e) => {
        setCustomStartDate(e.target.value);
    };

    const handleCustomEndChange = (e) => {
        setCustomEndDate(e.target.value);
    };

    const handleToggleBufferMenu = () => {
        setShowBufferMenu((prev) => !prev);
    };

    return (
        <div className="w-full h-full border-r border-gray-200 md:max-w-[420px] flex flex-col text-black">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <button
                    onClick={onCancel}
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                    <ChevronLeft size={20} />
                    Back
                </button>
                <h2 className="text-2xl font-semibold">Scheduling settings</h2>
            </div>

            {/* Body */}
            <div className="p-4 flex-1 overflow-y-auto">
                {/* Date Range Section */}
                <div className="mb-6">
                    <h4 className="text-base font-semibold mb-2">Date range</h4>
                    <p className="text-sm text-gray-600 mb-4">
                        Choose how invitees can schedule your event:
                    </p>
                    <div className="space-y-4">
                        {/* Rolling date range */}
                        <label className="flex items-start gap-2">
                            <input
                                type="radio"
                                name="dateRangeOption"
                                value="rolling"
                                checked={dateRangeOption === "rolling"}
                                onChange={handleOptionChange}
                                className="mt-1"
                            />
                            <div>
                                <span className="font-medium">Rolling date range</span>
                                {dateRangeOption === "rolling" && (
                                    <div className="flex items-center gap-2 mt-2 ml-6">
                                        <input
                                            type="number"
                                            className="w-16 px-2 py-1 border border-gray-300 rounded"
                                            value={rollingRangeValue}
                                            onChange={handleRollingValueChange}
                                        />
                                        <select
                                            className="px-2 py-1 border border-gray-300 rounded"
                                            value={rollingTimeUnit}
                                            onChange={handleRollingUnitChange}
                                        >
                                            <option value="calendar days">calendar days</option>
                                            <option value="calendar weeks">calendar weeks</option>
                                        </select>
                                        <span>into the future</span>
                                    </div>
                                )}
                            </div>
                        </label>

                        {/* Custom date range */}
                        <label className="flex items-start gap-2">
                            <input
                                type="radio"
                                name="dateRangeOption"
                                value="custom"
                                checked={dateRangeOption === "custom"}
                                onChange={handleOptionChange}
                                className="mt-1"
                            />
                            <div>
                                <span className="font-medium">Custom date range</span>
                                {dateRangeOption === "custom" && (
                                    <div className="flex flex-col gap-2 mt-2 ml-6">
                                        <div className="flex items-center gap-2">
                                            <span>Start:</span>
                                            <input
                                                type="date"
                                                className="px-2 py-1 border border-gray-300 rounded"
                                                value={customStartDate}
                                                onChange={handleCustomStartChange}
                                                min={today}
                                                max={maxSelectableDate}
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>End:</span>
                                            <input
                                                type="date"
                                                className="px-2 py-1 border border-gray-300 rounded"
                                                value={customEndDate}
                                                onChange={handleCustomEndChange}
                                                min={customStartDate || today}
                                                max={maxSelectableDate}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </label>

                        {/* Indefinite */}
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="dateRangeOption"
                                value="indefinite"
                                checked={dateRangeOption === "indefinite"}
                                onChange={handleOptionChange}
                            />
                            <span>Indefinitely into the future</span>
                        </label>
                    </div>
                </div>

                {/* Hours and Calendar Settings Section */}
                <div className="mb-6">
                    <h4 className="text-base font-semibold mb-2">
                        Hours and calendar settings
                    </h4>
                    <button className="border border-gray-300 bg-gray-100 hover:bg-gray-200 rounded px-3 py-1 text-sm mb-4">
                        Copy from...
                    </button>
                    <p className="text-sm text-gray-600 mb-4">
                        Set times that hosts can be scheduled for these types of events.
                    </p>
                    <div className="border border-gray-300 bg-gray-50 rounded p-4">
                        <div className="flex flex-col">
                            <span className="font-semibold mb-1">
                                {data.extendedProps.scheduledBy || "Subham Kumar (you)"}
                            </span>
                            <span className="text-sm text-gray-600">
                                Weekdays, 9 am - 5 pm
                            </span>
                        </div>
                    </div>
                </div>

                {/* Event Limits Section */}
                <div className="mb-6">
                    <h4 className="text-base font-semibold mb-2">Event limits</h4>

                    {/* Buffer Time (Toggleable) */}
                    <div className="relative">
                        <button
                            onClick={handleToggleBufferMenu}
                            className="w-full flex items-center justify-between border border-gray-300 bg-gray-50 rounded p-4 mb-2 text-left hover:bg-gray-100"
                        >
                            <div className="font-semibold">Buffer time</div>
                            <div className="text-gray-600">
                                {beforeEvent === 0 && afterEvent === 0
                                    ? "None"
                                    : `Before: ${beforeEvent} min, After: ${afterEvent} min`}
                            </div>
                        </button>

                        {/* Popover menu for Buffer Time */}
                        {showBufferMenu && (
                            <div className="absolute top-full left-0 mt-2 w-72 p-4 border border-gray-300 rounded bg-white shadow z-10">
                                {/* Before event */}
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-medium">Before event:</label>
                                    <select
                                        value={beforeEvent}
                                        onChange={(e) =>
                                            setBeforeEvent(parseInt(e.target.value, 10))
                                        }
                                        className="border border-gray-300 rounded px-2 py-1"
                                    >
                                        <option value={0}>0 min</option>
                                        <option value={5}>5 min</option>
                                        <option value={10}>10 min</option>
                                        <option value={15}>15 min</option>
                                        <option value={30}>30 min</option>
                                    </select>
                                </div>
                                {/* After event */}
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-medium">After event:</label>
                                    <select
                                        value={afterEvent}
                                        onChange={(e) =>
                                            setAfterEvent(parseInt(e.target.value, 10))
                                        }
                                        className="border border-gray-300 rounded px-2 py-1"
                                    >
                                        <option value={0}>0 min</option>
                                        <option value={5}>5 min</option>
                                        <option value={10}>10 min</option>
                                        <option value={15}>15 min</option>
                                        <option value={30}>30 min</option>
                                    </select>
                                </div>

                                <p className="text-sm text-gray-600">
                                    Add time before or after booked events.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Minimum Notice */}
                    <div className="flex items-center justify-between border border-gray-300 bg-gray-50 rounded p-4 mb-2 flex-col">
                        <div className="w-full flex flex-row justify-between mb-3">
                            <div className="font-semibold">Minimum notice</div>

                            <div className="text-gray-600">4 hours</div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Set the minimum amount of notice that is required
                        </p>
                    </div>

                    {/* Daily limit */}
                    <div className="flex items-center justify-between border border-gray-300 bg-gray-50 rounded p-4">
                        <div>
                            <div className="font-semibold">Daily limit</div>
                            <p className="text-sm text-gray-600">Not set</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-end">
                <button
                    onClick={onCancel}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl"
                >
                    Save and close
                </button>
            </div>
        </div>
    );
}
