import { useEffect, useState } from 'react';
import { Draggable } from 'react-drag-and-drop'

function Sidebar(props) {
    const [actives, setActives] = useState([]);

    useEffect(() => {
        if (props.charts && props.charts.length !== 0) {
            let drags = props.charts.map((v) => {
                return v.value;
            });
            setActives(drags);
        }else{
            setActives([]);
        }
    }, [ props.charts ]);


    return(
        <div className="bg-gray-800 h-16 fixed bottom-0 md:relative z-10 w-full md:w-32">
          <div className="md:mt-4 md:w-32 md:left-0 md:top-0 content-center md:content-start text-left">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left justify-center">
                {
                    !actives.includes('line') ? (
                        <Draggable type="chart" data="line" className="cursor-move flex-col">
                            <li className="block md:py-3 align-middle border-b-2 hover:border-blue-500 border-dashed border-2 border-gray-500 p-2 text-center md:w-full sideicon line" onClick={ () => props.clickDraggable('line') }></li>
                        </Draggable>
                    ):(
                        <li className="block md:py-3 align-middle border-b-2 border-dashed border-2 border-gray-500 p-2 text-center md:w-full opacity-20 cursor-not-allowed sideicon line"></li>
                    )
                }
                {
                    !actives.includes('bar') ? (
                        <Draggable type="chart" data="bar" className="cursor-move  flex-col">
                            <li className="block md:py-3 align-middle border-b-2 hover:border-blue-500 border-dashed border-2 border-gray-500 p-2 text-center md:w-full sideicon bar" onClick={() => props.clickDraggable('bar')} ></li>
                        </Draggable>
                    ):(
                        <li className="block md:py-3 align-middle border-b-2 border-dashed border-2 border-gray-500 p-2 text-center md:w-full opacity-20 cursor-not-allowed sideicon bar"></li>
                    )
                }
                {
                    !actives.includes('pie') ? (
                        <Draggable type="chart" data="pie" className="cursor-move flex-col">
                            <li className="block md:py-3 align-middle border-b-2 hover:border-blue-500 border-dashed border-2 border-gray-500 p-2 text-center md:w-full sideicon pie" onClick={() => props.clickDraggable('pie')}></li>
                        </Draggable>
                    ):(
                        <li className="block md:py-3 align-middle border-b-2 border-dashed border-2 border-gray-500 p-2 text-center md:w-full opacity-20 cursor-not-allowed sideicon pie"></li>
                    )
                }
                

                
                
            </ul>
          </div>
        </div>
    )
}

export default Sidebar;