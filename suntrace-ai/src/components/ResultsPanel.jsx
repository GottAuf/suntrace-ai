function ResultsPanel({ assessment }) {
  const { property, solar, security } = assessment;

  const status = property
    ? solar
      ? "Solar Analysis Complete"
      : "Property Located"
    : "Awaiting Assessment";

  const statusStyles = property
    ? "bg-green-100 text-green-700"
    : "bg-amber-100 text-amber-700";

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Assessment Results
          </h2>

          <p className="text-slate-500 text-sm">
            Review the generated infrastructure assessment.
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles}`}
        >
          {status}
        </span>
      </div>

      <div className="grid gap-6">

        {/* Property Information */}

        <SectionCard title="📍 Property Information">

          <ResultRow
            label="Property Address"
            value={property?.address ?? "--"}
          />

          <ResultRow
            label="Coordinates"
            value={
              property
                ? `${property.lat.toFixed(5)}, ${property.lng.toFixed(5)}`
                : "--"
            }
          />

          <ResultRow
            label="Monthly Electricity Bill"
            value={
              property?.monthlyBill
                ? `$${property.monthlyBill.toLocaleString()}`
                : "--"
            }
          />

          <ResultRow
            label="Security Level"
            value={property?.securityLevel ?? "--"}
          />

        </SectionCard>

        {/* Solar Assessment */}

        <SectionCard title="☀️ Solar Assessment">

          <ResultRow
            label="Solar Irradiance"
            value={solar?.ghi ?? "--"}
          />

          <ResultRow
            label="Recommended System Size"
            value={
              solar
                ? `${solar.systemSize} kW`
                : "--"
            }
          />

          <ResultRow
            label="Estimated Panels"
            value={solar?.panelCount ?? "--"}
          />

          <ResultRow
            label="Annual Energy"
            value={
              solar
                ? `${solar.annualEnergy.toLocaleString()} kWh`
                : "--"
            }
          />

          <ResultRow
            label="Annual Savings"
            value={
              solar
                ? `$${solar.annualSavings.toLocaleString()}`
                : "--"
            }
          />

          <ResultRow
            label="ROI"
            value={
              solar
                ? `${solar.roi} years`
                : "--"
            }
          />

        </SectionCard>

        {/* Security Assessment */}

        <SectionCard title="🛡 Security Assessment">

          <ResultRow
            label="Physical Risk Rating"
            value={security?.risk ?? "Pending"}
          />

          <ResultRow
            label="Blind Spots"
            value={security?.blindSpots ?? "Pending"}
          />

          <ResultRow
            label="Recommendations"
            value={security?.recommendations ?? "Pending"}
          />

        </SectionCard>

      </div>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow">
      <div className="border-b px-6 py-4">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      </div>

      <div className="p-6 space-y-4">
        {children}
      </div>
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b pb-2 last:border-none">
      <span className="text-slate-600">
        {label}
      </span>

      <span className="font-medium text-right">
        {value}
      </span>
    </div>
  );
}

export default ResultsPanel;