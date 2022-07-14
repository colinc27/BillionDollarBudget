import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";


const Chart = (props) => {

    const expense = [
        {
            "name": "Rent",
            "Expected": 600,
            "Actual": props.rent
            },
        {
          "name": "Utilities",
          "Expected": 300,
          "Actual": props.utilities
        },
        {
          "name": "Misc.",
          "Expected": 400,
          "Actual": props.misc
        },
        {
          "name": "Food",
          "Expected": 100,
          "Actual": props.food,
        },
        {
          "name": "Gas",
          "Expected": 200,
          "Actual": props.gas
        }
    ]
        return (
          <div className="">
        <BarChart
          width={600}
          height={300}
          data={expense}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#58D68D" />
          <YAxis yAxisId="right" orientation="right" stroke="#EC7063" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="Expected" fill="#58D68D" />
          <Bar yAxisId="right" dataKey="Actual" fill="#EC7063" />
        </BarChart>
        </div>
        )
    };

export default Chart;