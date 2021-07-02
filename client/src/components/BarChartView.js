import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
