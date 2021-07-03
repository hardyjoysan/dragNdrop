import { Draggable } from 'react-drag-and-drop'

function Sidebar() {
    return(
        <div className="bg-gray-800 h-16 fixed bottom-0 md:relative z-10 w-full md:w-48">
          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                <Draggable type="chart" data="line">
                    <li className="block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-gray-800 hover:border-pink-500">
                        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Line Chart</span>
                    </li>
                </Draggable>
                <Draggable type="chart" data="bar">
                    <li className="block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-gray-800 hover:border-pink-500">
                        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Bar Chart</span>
                    </li>
                </Draggable>
                <Draggable type="chart" data="pie">
                    <li className="block py-1 md:py-3 pl-1 align-middleno-underline border-b-2 border-gray-800 hover:border-pink-500">
                        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Pie Chart</span>
                    </li>
                </Draggable>
            </ul>
          </div>
        </div>
    )
}

export default Sidebar;