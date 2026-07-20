function AssessmentForm() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-6">
        Assessment Details
      </h2>

      <div className="space-y-4">

        <div>
          <label className="block mb-1 text-sm font-medium">
            Property Address
          </label>

          <input
            type="text"
            placeholder="Enter address"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Monthly Electricity Bill
          </label>

          <input
            type="number"
            placeholder="1000"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Security Level
          </label>

          <select className="w-full border rounded-lg px-3 py-2">
            <option>Standard</option>
            <option>High</option>
            <option>Maximum</option>
          </select>
        </div>

        <button
          className="
            w-full
            bg-slate-900
            text-white
            py-2
            rounded-lg
            hover:bg-slate-800
          "
        >
          Start Audit
        </button>

      </div>
    </div>
  );
}

export default AssessmentForm;