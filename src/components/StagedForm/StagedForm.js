import React from 'react';
import {AreaChart, linearGradient, XAxis, Tooltip, Area, CartesianGrid, YAxis, PieChart, Pie, defs, stop} from 'recharts'
import styled from "styled-components";

const StagedForm = () => {
    let [formMode, setFormMode] = React.useState(1);
    let [name, setName] = React.useState("");
    let [email, setEmail] = React.useState("");

    const inputHandler = (event, id) => {
        id === "email" && setEmail(event.target.value)
        id === "name" && setName(event.target.value)
        console.log(email)
        console.log(name)
    }
    const data = [
      {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
      },
      {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
      },
      {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
      },
      {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
      },
      {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
      },
      {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      },
      {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      }
    ]

    const data01 = [
      {
        "name": "Group A",
        "value": 400
      },
      {
        "name": "Group B",
        "value": 300
      },
      {
        "name": "Group C",
        "value": 300
      },
      {
        "name": "Group D",
        "value": 200
      },
      {
        "name": "Group E",
        "value": 278
      },
      {
        "name": "Group F",
        "value": 189
      }
    ];
    const data02 = [
      {
        "name": "Group A",
        "value": 2400
      },
      {
        "name": "Group B",
        "value": 4567
      },
      {
        "name": "Group C",
        "value": 1398
      },
      {
        "name": "Group D",
        "value": 9800
      },
      {
        "name": "Group E",
        "value": 3908
      },
      {
        "name": "Group F",
        "value": 4800
      }
    ];

    const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const Title = styled.h4`
    color: green;
    font-size: 70px
    `
  return (
    <>
    {formMode === 1 && <div style={{textAlign: 'center', margin: "5em"}}>
      <input type="text" placeholder="name" value={name} onChange={(e) => inputHandler(e, "name")} />
    </div>}

    {formMode === 2 && <div style={{textAlign: 'center', margin: "5em"}}>
      <input type="text" placeholder="email" value={email} onChange={(e) => inputHandler(e, "email")} />
    </div>}

    <div style={{textAlign: 'center'}}>
        <button onClick={() => setFormMode(1)}>previous</button>
        <button onClick={() => setFormMode(2)}>next</button>
    </div>
    <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

{/* <Div>
  <Title>You again</Title> */}
<PieChart width={730} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
{/* </Div> */}
    </>
  )
}

export default StagedForm;