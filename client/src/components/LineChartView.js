import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'A',
    pv: 2400,
  },
  {
    name: 'B',
    pv: 1398,
  },
  {
    name: 'C',
    pv: 9800,
  },
  {
    name: 'D',
    pv: 3908,
  },
  {
    name: 'E',
    pv: 4800,
  },
  {
    name: 'F',
    pv: 3800,
  },
  {
    name: 'G',
    pv: 4300,
  },
];

export default class LineChartView extends PureComponent {
  render() {
    return (
      <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="p-5 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
      
    );
  }
}
