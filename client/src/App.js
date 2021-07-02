import LineChartView from './components/LineChartView';
import BarChartView from './components/BarChartView';
import PieChartView from './components/PieChartView';

function App() {
  return (
    <div className="font-sans mt-12">

      {/* Nav Menu */}
      <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0 shadow-md">
        <div className="flex flex-wrap items-center">
            <div className="block w-full justify-center md:justify-start text-white">
                <h1 className="p-2 font-bold text-center text-2xl text-blue-100">Monthly Expense Analysis</h1>
            </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">

        {/* Sidebard */}
        <div className="bg-gray-800 h-16 fixed bottom-0 md:relative z-10 w-full md:w-48">
          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                <li className="mr-3 flex-1">
                    <a href="/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Line Chart</span>
                    </a>
                </li>
                <li className="mr-3 flex-1">
                    <a href="/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Bar Chart</span>
                    </a>
                </li>
                <li className="mr-3 flex-1">
                    <a href="/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Pie Chart</span>
                    </a>
                </li>
            </ul>
          </div>
        </div>

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
