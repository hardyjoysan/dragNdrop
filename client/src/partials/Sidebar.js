import { useEffect, useState } from 'react';
import { Draggable } from 'react-drag-and-drop'
import LineSvg from '../assets/images/line.svg';
import BarSvg from '../assets/images/bar.svg';
import PieSvg from '../assets/images/pie.svg';

function Sidebar(props) {
    const [actives, setActives] = useState([]);

    useEffect(() => {
        if (props.charts && props.charts.length !== 0) {
            let drags = props.charts.map((v) => {
                return v.value;
            });
            setActives(drags);
        }
    }, [ props.charts ]);


    return(
        <div className="bg-gray-800 h-16 fixed bottom-0 md:relative z-10 w-full md:w-48">
          <div className="md:mt-4 md:w-48 md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                {
                    !actives.includes('line') ? (
                        <Draggable type="chart" data="line" className="cursor-move">
                            <li className="block md:py-3 align-middle border-b-2 hover:border-pink-500 border-dashed border-2 border-gray-500 p-2 text-center md:w-full md:mt-1">
                                <img src={LineSvg} alt="Line Chart" />
                            </li>
                        </Draggable>
                    ):(
                        <li className="block md:py-3 align-middle border-b-2 border-dashed border-2 border-gray-500 p-2 text-center md:w-full md:mt-1 opacity-20 cursor-not-allowed">
                            <img src={LineSvg} alt="Line Chart" />
                        </li>
                    )
                }
                {
                    !actives.includes('bar') ? (
                        <Draggable type="chart" data="bar" className="cursor-move">
                            <li className="block md:py-3 align-middle border-b-2 hover:border-pink-500 border-dashed border-2 border-gray-500 p-2 text-center md:w-full md:mt-1">
                                <img src={BarSvg} alt="Bar Chart" />
                            </li>
                        </Draggable>
                    ):(
                        <li className="block md:py-3 align-middle border-b-2 border-dashed border-2 border-gray-500 p-2 text-center md:w-full md:mt-1 opacity-20 cursor-not-allowed">
                            <img src={BarSvg} alt="Bar Chart" />
                        </li>
                    )
                }
                {
                    !actives.includes('pie') ? (
                        <Draggable type="chart" data="pie" className="cursor-move">
                            <li className="block md:py-3 align-middle border-b-2 hover:border-pink-500 border-dashed border-2 border-gray-500 p-2 text-center md:w-full md:mt-1">
                                <img src={PieSvg} alt="Pie Chart" />
                            </li>
                        </Draggable>
                    ):(
                        <li className="block md:py-3 align-middle border-b-2 border-dashed border-2 border-gray-500 p-2 text-center md:w-full md:mt-1 opacity-20 cursor-not-allowed">
                            <img src={PieSvg} alt="Pie Chart" />
                        </li>
                    )
                }
                

                
                
            </ul>
          </div>
        </div>
    )
}

export default Sidebar;