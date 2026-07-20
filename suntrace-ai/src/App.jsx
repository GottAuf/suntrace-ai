import Navbar from './components/Navbar';
import AssessmentForm from './components/AssessmentForm';
import MapView from './components/MapView';

function App() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <main className="max-w-7xl mx-auto p-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div>
            <AssessmentForm />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow h-[700px] p-2">
              <MapView />
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}

export default App;