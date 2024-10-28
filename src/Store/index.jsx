import { useState, createContext, useReducer } from 'react'; 

export const NodeContext = createContext(null);
const NodeProvider = NodeContext.Provider;

export default function NodeWrapper(children) {
    const [nodeId, setId] = useState(0);
    const [nodes, dispatch] = useReducer(nodesReducer, []);

    const getNode = (id) => {
        dispatch({
            type: "gotted",
            id: id,
        });
    };

    const setNode = (id, node) => {
        dispatch({
            type: "changed",
            id: id,
            node: node,
        });
    };
    
    const addNode = (node) => {
        dispatch({
            type: 'added',
            id: nodeId,
            node: node,
        });
        setId((id) => id + 1);
    };

    const removeNode = (id) => {
        dispatch({
            type: 'removed',
            id: id, 
        });
    };

    return (
        <NodeProvider value={ nodes, getNode, setNode, addNode, removeNode }>
        {children}
        </NodeProvider>
    );
}

function nodesReducer(nodes, action) {
    switch (action.type) {
    case 'gotted': 
        return nodes[action.id];
    case 'changed': 
        return nodes.map((n) => n.id === action.id ? action.node : n);
    case 'added': 
        action.node.id = action.id;
        return [...nodes, action.node]; 
    case 'removed': 
        return nodes.filter((node) => node.id !== action.id);
    default: 
        throw Error('Unknown action: ' + action.type);
    }
}
