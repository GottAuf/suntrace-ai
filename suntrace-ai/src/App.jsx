import { useState } from "react";

import Navbar from "./components/Navbar";
import AssessmentForm from "./components/AssessmentForm";
import MapView from "./components/MapView";
import ResultsPanel from "./components/ResultsPanel";

import { searchLocation } from "./services/geocoding";

function App() {
  const [assessment, setAssessment] = useState({
    property: null,
    solar: null,
    security: null,
    report: null,
  });

  const handleSearch = async (formData) => {
    try {
      const result = await searchLocation(formData.address);

      setAssessment((prev) => ({
        ...prev,
        property: {
          address: result.displayName,
          lat: result.lat,
          lng: result.lng,
          monthlyBill: Number(formData.monthlyBill),
          securityLevel: formData.securityLevel,
        },
      }));
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const mapLocation = assessment.property
    ? {
        lat: assessment.property.lat,
        lng: assessment.property.lng,
        zoom: 18,
      }
    : {
        lat: 0,
        lng: 0,
        zoom: 2,
      };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Assessment Form */}
          <div>
            <AssessmentForm onSearch={handleSearch} />
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow h-[350px] md:h-[500px] xl:h-[700px] p-2">
              <MapView location={mapLocation} />
            </div>
          </div>
        </div>

        {/* Assessment Results */}
        <ResultsPanel assessment={assessment} />
      </main>
    </div>
  );
}

export default App;