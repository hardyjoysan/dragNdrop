import { useState } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';

// Partails
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';

// Chart Components
import LineChartView from './components/LineChartView';
import BarChartView from './components/BarChartView';
import PieChartView from './components/PieChartView';

function App() {

  const [ charts, setCharts ] = useState([]);

  const onDrop = (d, e) => {
    let data = charts.filter(v => v.value !== d.chart);
    if(!e.target.classList.contains(['drop-container']) && !e.target.classList.contains(['drop_text'])){
      let sort = parseInt(e.target.closest('.chart_view').getAttribute('data-sort'));
      let current = charts.find(v => v.value === d.chart);
      if (data.length > 0) {
        data = data.map((element) => {
          if(current){            
            if (current.sort < element.sort && element.sort <= sort) {
              return {...element, sort: element.sort - 1 }
            }else if (current.sort > element.sort && element.sort >= sort) {
              return {...element, sort: element.sort + 1 }
            }else{
              return element;
            }
          }else{
            if(element.sort >= sort) {
              return {...element, sort: element.sort + 1 }
            }
          }
          return false;
        });
      }
      data.push({value: d.chart, sort: sort});
    }else{
      data.push({value: d.chart, sort: data.length + 1});
    }    
    setCharts(data);
  }

  const viewChart = (v) => {
    switch (v) {
      case 'line':
        return <Draggable type="chart" data="line"><LineChartView /></Draggable>
      case 'bar':
        return <Draggable type="chart" data="bar"><BarChartView /></Draggable>
        case 'pie':
      return <Draggable type="chart" data="pie"><PieChartView /></Draggable>
      default:
        return false;
    }
  }

  return (
    <div className="font-sans mt-12">

      <Header />

      <div className="flex flex-col md:flex-row">

        <Sidebar charts={charts} />

        {/* Main Area */}
        <div className="main-content flex-1 pb-24 md:pb-5 w-full">

          {/* Dropping Container */}
          <Droppable types={['chart']} onDrop={ onDrop } >
              <div className="flex flex-row flex-wrap flex-grow mt-2 md:min-h-screen drop-container">
                {
                  charts.length !== 0 ? (
                    charts.sort((a, b) => a.sort - b.sort).map((v, i) => (
                      <div 
                        className="w-full md:w-1/2 p-6 chart_view" 
                        key={`chart_${i}`}
                        data-sort={v.sort}
                      >{ viewChart(v.value) }</div>
                    ))
                  ):(
                    <h1 className="drop_text text-5xl text-gray-500 mx-auto md:mt-48">Drag &amp; Drop Charts Here</h1>
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
