import { useState } from 'react';
import './App.css';
// import MovingDot from './MovingDot.jsx';
import NodeRenderer from './Node.jsx';

const nodes = [
    {
        rect: {
            x: 0,
            y: 0,
            w: 50,
            h: 25,
        },
        name: "Hola1",
    },
    {
        rect: {
            x: 75,
            y: 0,
            w: 50,
            h: 25,
        },
        name: "Hola2",
    },
    {
        rect: {
            x: 150,
            y: 0,
            w: 50,
            h: 25,
        },
        name: "Hola3",
    },
];

const newNode = {
    rect: {
        x: 0,
        y: 50,
        w: 50,
        h: 25,
    },
    name: "Hola4",
};

function App() {
  const [nodeList] = useState([...nodes]);
  nodeList.push(newNode);
  console.log(nodeList[0]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
      <svg width="200" height="100">
      {nodeList.map((node, id) => {
        node.id = id; 
        return (<NodeRenderer key={node.id} node={node} />); 
      })}
      </svg>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
