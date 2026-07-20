function ResultsPanel({ assessment }) {
  const property = assessment.property;

  const status = property
    ? "Property Located"
    : "Awaiting Assessment";

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
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            property
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </span>

      </div>

      <div className="grid gap-6">

        <SectionCard
          title="📍 Property Information"
        >
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
        </SectionCard>

        <SectionCard
          title="☀️ Solar Assessment"
        >
          <ResultRow
            label="Solar Irradiance"
            value="--"
          />

          <ResultRow
            label="System Size"
            value="--"
          />

          <ResultRow
            label="Estimated Panels"
            value="--"
          />

          <ResultRow
            label="Annual Energy"
            value="--"
          />

          <ResultRow
            label="Annual Savings"
            value="--"
          />

          <ResultRow
            label="ROI"
            value="--"
          />
        </SectionCard>

        <SectionCard
          title="🛡 Security Assessment"
        >
          <ResultRow
            label="Physical Risk"
            value="Pending"
          />

          <ResultRow
            label="Blind Spots"
            value="Pending"
          />

          <ResultRow
            label="Recommendations"
            value="Pending"
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

        <h3 className="font-semibold text-lg">
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