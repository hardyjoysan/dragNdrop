import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';

const COLORS = ['#f44336', '#e91e63', '#ff75fa', '#03a9f4', '#3f51b5', '#ffeb3b', '#795548', '#8bc34a', '#2196f3', '#ff9800', '#00bcd4','#607d8b'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" style={{textTransform: 'capitalize', fontSize: '12px'}} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      { payload.month }
    </text>
  );
};

class PieChartView extends PureComponent {

  render() {
    return (
      <div className="bg-white border-transparent rounded-lg shadow-xl cursor-move">
        <div className="p-5 h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={this.props.expenses}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={140}
                fill="#8884d8"
                dataKey="expense"
              >
                {this.props.expenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses,
})

export default connect(mapStateToProps) (PieChartView);
