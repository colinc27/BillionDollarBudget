import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
          "name": "Miscellaneous",
          "Expected": 400,
          "Actual": 225
        },
        {
          "name": "Going Out",
          "Expected": 100,
          "Actual": 200
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
          width={500}
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
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="Expected" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="Actual" fill="#82ca9d" />
        </BarChart>
        )
    };
}

export default Chart;