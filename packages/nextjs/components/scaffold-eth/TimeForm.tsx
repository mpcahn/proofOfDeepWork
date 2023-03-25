import { useState } from "react";

const TimeForm = () => {
  const [timeInput, setTimeInput] = useState("");
  const [unixTime, setUnixTime] = useState<number | null>(null);

  const handleTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Parse time input into hours and minutes
    const [hours, minutes] = timeInput.split(":");
    // Create a new Date object with the current date and the input time
    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    // Convert date to Unix time and set the state
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    setUnixTime(unixTimestamp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center">
        <label htmlFor="time-input" className="mr-4">
          Enter a time of day (hh:mm):
        </label>
        <input
          type="text"
          id="time-input"
          className="w-48 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={timeInput}
          onChange={handleTimeInput}
        />
        <button
          type="submit"
          className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Convert to Unix time
        </button>
      </div>
      {unixTime && (
        <div className="mt-4">
          <label htmlFor="unix-time">Unix time:</label>
          <input
            type="text"
            id="unix-time"
            className="w-48 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={unixTime}
            readOnly
          />
        </div>
      )}
    </form>
  );
};

export default TimeForm;
