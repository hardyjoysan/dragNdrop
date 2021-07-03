import Header from './partials/Header';
import Sidebar from './partials/Sidebar';
import LineChartView from './components/LineChartView';
import BarChartView from './components/BarChartView';
import PieChartView from './components/PieChartView';

function App() {
  return (
    <div className="font-sans mt-12">

      <Header />

      <div className="flex flex-col md:flex-row">

        <Sidebar />

        {/* Main Area */}
        <div className="main-content flex-1 pb-24 md:pb-5 w-full">
          <div className="flex flex-row flex-wrap flex-grow mt-2">

            <div className="w-full md:w-1/2 p-6">
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="p-5 h-96">
                    <LineChartView />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6">
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="p-5 h-96">
                    <BarChartView />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6">
              <div className="bg-white border-transparent rounded-lg shadow-xl">
                <div className="p-5 h-96">
                    <PieChartView />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
