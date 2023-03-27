import React from "react";
import { useState } from "react";

const WorkForm = () => {
  const [timeStart, setTimeStart] = useState("");
  const [timeFinished, setTimeFinished] = useState("");
  const [workType, setWorkType] = useState("");
  const [milestone, setMilestone] = useState("");
  const [details, setDetails] = useState("");
  const [platform, setPlatform] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ timeStart, timeFinished, workType, milestone, details, platform });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-gray-600 font-bold">Time Start:</label>
          <input
            type="time"
            className={`w-full py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
            value={timeStart}
            onChange={e => setTimeStart(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-600 font-bold">Time Finished:</label>
          <input
            type="time"
            className={`w-full py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
            value={timeFinished}
            onChange={e => setTimeFinished(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-gray-600 font-bold">Work Type:</label>
        <select
          className="w-full py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={workType}
          onChange={e => setWorkType(e.target.value)}
        >
          <option value="Math">Math</option>
          <option value="Coding">Coding</option>
          <option value="Writing">Writing</option>
          <option value="Research">Research</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-gray-600 font-bold">Milestone:</label>
        <input
          type="text"
          className="w-full py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={milestone}
          onChange={e => setMilestone(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-gray-600 font-bold">Details:</label>
        <textarea
          className="w-full py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={5}
          value={details}
          onChange={e => setDetails(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-4">
        <label className="block mb-2 text-gray-600 font-bold">Platform:</label>
        <input
          type="text"
          className="w-full py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={platform}
          onChange={e => setPlatform(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default WorkForm;
