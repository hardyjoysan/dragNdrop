import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';

class BarchartView extends PureComponent {
  render() {
    return (
      <div className="bg-white border-transparent rounded-lg shadow-xl cursor-move">
        <div className="p-5 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={this.props.expenses}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="month"  />
            <YAxis type="number" domain={[0, 100000]}/>
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="expense" fill="#fb5a57" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses,
})

export default connect(mapStateToProps) (BarchartView);