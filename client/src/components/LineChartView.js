import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class LineChartView extends PureComponent {

  componentDidMount = () => {
    console.log(this.props.expenses);
  }

  render() {
    return (
      <div className="bg-white border-transparent rounded-lg shadow-xl">
        <div className="p-5 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={this.props.expenses}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" padding={{ left: 0 }}/>
            <YAxis type="number" domain={[0, 100000]}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="expense" stroke="#ff9800" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses,
})

export default connect(mapStateToProps) (LineChartView);
