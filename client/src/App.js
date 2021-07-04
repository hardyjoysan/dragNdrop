import { useState, useEffect } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import { connect } from 'react-redux';

// Partails
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';

// Chart Components
import LineChartView from './components/LineChartView';
import BarChartView from './components/BarChartView';
import PieChartView from './components/PieChartView';

// Redux Actions
import { fetchMonthlyExpenses } from './store/actions';

function App(props) {

  const [ charts, setCharts ] = useState([]);

  // Draggable element drop event handler
  const onDrop = (d, e) => {
    
    // Chart rearrange fuctionality by sorting each
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
            }
          }else{
            if(element.sort >= sort) {
              return {...element, sort: element.sort + 1 }
            }
          }
          return element;
        });
      }
      data.push({value: d.chart, sort: sort});
    }else{
      data.push({value: d.chart, sort: data.length + 1});
    }
    setCharts(data);
  }

  // Only for small devices; Drag & Drop won't work in mobile device
  const onClickDraggable = (v) => {
    if (window.innerWidth < 640) {
      setCharts([...charts, {value: v, sort: charts.length + 1}]);
    }
  }

  // Close charts
  const handleCloseChart = (v) => {
    let i = 0;
    let data = charts.filter(d => d.value !== v);
    data = data.map(d => {return {...d, sort: ++i } });
    setCharts(data);
  }

  // Render Chart componets switching
  const viewChart = (v) => {
    switch (v) {
      case 'line':
        return <Draggable type="chart" data="line"><LineChartView onCloseChart={handleCloseChart} /></Draggable>
      case 'bar':
        return <Draggable type="chart" data="bar"><BarChartView onCloseChart={handleCloseChart} /></Draggable>
        case 'pie':
      return <Draggable type="chart" data="pie"><PieChartView onCloseChart={handleCloseChart} /></Draggable>
      default:
        return false;
    }
  }

  useEffect(() => {
    // Initial data fetching for charts
    if (!props.expenses) {
      props.onFetchExpenses();
    }
  }, [ props ]);

  return (
    <div className="font-sans mt-12">

      <Header />

      <div className="flex flex-col md:flex-row">

        <Sidebar charts={charts} clickDraggable={ onClickDraggable } />

        {/* Main Area */}
        <div className="main-content flex-1 pb-24 md:pb-5 w-full bg-gray-700">

          {/* Dropping Container */}
          <Droppable types={['chart']} onDrop={ onDrop } >
              <div className="flex flex-row flex-wrap flex-grow mt-2 drop-container">
                {
                  charts.length !== 0 ? (
                    charts.sort((a, b) => a.sort - b.sort).map((v, i) => (
                      <div 
                        className="w-full  sm:w-full md:w-1/2 xl:w-1/3 p-6 chart_view" 
                        key={`chart_${i}`}
                        data-sort={v.sort}
                      >{ viewChart(v.value) }</div>
                    ))
                  ):(
                    // Text information for small screen devices
                    window.innerWidth > 640 ? (
                      <h1 className="drop_text md:text-5xl text-gray-500 mx-auto md:mt-48">Drag &amp; Drop Charts Here</h1>
                    ):(
                      <h1 className="drop_text text-xl text-gray-500 mx-auto mt-32">Click on icons to display charts</h1>
                    )
                  )
                }
              </div>
          </Droppable>
        </div>
      </div>
    </div>

  );
}

// Map redux state to props
const mapStateToProps = (state) => ({
  expenses: state.expenses,
})

// Map redux actions to props
const mapDispatchToProps = (dispatch) => ({
  onFetchExpenses: () => {
      dispatch(fetchMonthlyExpenses());
  }
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
