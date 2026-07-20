import { useState } from "react";

function AssessmentForm({ onSearch }) {
  const [address, setAddress] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("");
  const [securityLevel, setSecurityLevel] = useState("Standard");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address.trim()) {
      alert("Please enter a property address.");
      return;
    }

    try {
      setLoading(true);

      await onSearch({
        address,
        monthlyBill,
        securityLevel,
      });
    } catch (error) {
      console.error(error);
      alert("Unable to locate the property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-6">
        Assessment Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block mb-2 text-sm font-medium">
            Property Address
          </label>

          <input
            type="text"
            placeholder="e.g. Westlands, Nairobi"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Monthly Electricity Bill
          </label>

          <input
            type="number"
            placeholder="1000"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            Security Clearance Level
          </label>

          <select
            value={securityLevel}
            onChange={(e) => setSecurityLevel(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option value="Standard">Standard</option>
            <option value="High">High</option>
            <option value="Maximum">Maximum</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-slate-900 py-2 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {loading ? "Searching..." : "Start Audit"}
        </button>

      </form>
    </div>
  );
}

export default AssessmentForm;