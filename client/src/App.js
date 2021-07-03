import { useState, useEffect } from 'react';
import { Droppable } from 'react-drag-and-drop';

// Partails
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';

// Chart Components
import LineChartView from './components/LineChartView';
import BarChartView from './components/BarChartView';
import PieChartView from './components/PieChartView';

function App() {

  const [ charts, setCharts ] = useState([]);

  const onDrop = (e) => {
    setCharts([...charts, e.chart]);
  }

  useEffect(() => {
    console.log(charts);
  })

  return (
    <div className="font-sans mt-12">

      <Header />

      <div className="flex flex-col md:flex-row">

        <Sidebar />

        {/* Main Area */}
        <div className="main-content flex-1 pb-24 md:pb-5 w-full">

          {/* Dropping Container */}
          <Droppable types={['chart']} onDrop={ onDrop }>
              <div className="flex flex-row flex-wrap flex-grow mt-2 min-h-screen">
                
                {
                  charts.length !== 0 && (
                    charts.map((v, i) => {
                      switch (v) {
                        case 'line':
                          return <LineChartView key={`chart_${i}`} />
                        case 'bar':
                          return <BarChartView key={`chart_${i}`}/>
                          case 'pie':
                        return <PieChartView key={`chart_${i}`}/>
                        default:
                          return false;
                      }
                    })
                  )
                }

              </div>
          </Droppable>
        </div>
      </div>
    </div>

  );
}

export default App;
