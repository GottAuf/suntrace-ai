import { useState } from "react";

import Navbar from "./components/Navbar";
import AssessmentForm from "./components/AssessmentForm";
import MapView from "./components/MapView";
import ResultsPanel from "./components/ResultsPanel";

import { searchLocation } from "./services/geocoding";

function App() {
  const [assessment, setAssessment] = useState({
    property: {
      address: "",
      lat: null,
      lng: null,
    },
    solar: {
      ghi: null,
      systemSize: null,
      panelCount: null,
      annualEnergy: null,
      annualSavings: null,
      roi: null,
    },
    security: {
      risk: null,
      blindSpots: null,
      recommendations: null,
    },
    report: {
      pdf: null,
      audio: null,
    },
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
        },
      }));
    } catch (error) {
      alert(error.message);
    }
  };

  const mapLocation =
    assessment.property.lat !== null &&
    assessment.property.lng !== null
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

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Assessment Form */}
          <div>
            <AssessmentForm onSearch={handleSearch} />
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow h-[700px] p-2">
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