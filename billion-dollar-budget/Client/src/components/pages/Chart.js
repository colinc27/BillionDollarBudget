import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Chart extends React.Component {

    data = [
        {
            "name": "Rent",
            "Expected": 600,
            "Actual": 600
        },
        {
          "name": "Food",
          "Expected": 300,
          "Actual": 200
        },
        {
          "name": "Misc.",
          "Expected": 400,
          "Actual": 225
        },
        {
          "name": "Going Out",
          "Expected": 100,
          "Actual": 200,
        },
        {
          "name": "Gas",
          "Expected": 200,
          "Actual": 500
        }
    ]

    render() {
        return (
        <BarChart
          width={600}
          height={300}
          data={this.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#EC7063" />
          <YAxis yAxisId="right" orientation="right" stroke="#58D68D" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="Expected" fill="#EC7063" />
          <Bar yAxisId="right" dataKey="Actual" fill="#58D68D" />
        </BarChart>
        )
    };
}

export default Chart;
