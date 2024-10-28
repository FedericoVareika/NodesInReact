import { useState } from 'react';
import './App.css';
// import MovingDot from './MovingDot.jsx';
import NodeRenderer from './Node.jsx';
import NodeWrapper from './Store';

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
  
  return (
    <>
      <h1>Nodes!!</h1>
      <NodeWrapper initialState={initialNodes}> 
        <NodeRenderer/>
      </NodeWrapper>
    </>
  );
}

export default App;

const initialNodes = [
    {
        id: 0,
        rect: {
            x: 0,
            y: 0,
            w: 50,
            h: 25,
        },
        name: "Hola1",
    },
    {
        id: 1,
        rect: {
            x: 75,
            y: 0,
            w: 50,
            h: 25,
        },
        name: "Hola2",
    },
    {
        id: 2,
        rect: {
            x: 150,
            y: 0,
            w: 50,
            h: 25,
        },
        name: "Hola3",
    },
];
