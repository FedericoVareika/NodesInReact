import { useState, createContext, useContext, useReducer } from 'react'; 
import {PropTypes} from 'prop-types'

export const NodeContext = createContext(null);
export const NodeDispatchContext = createContext(null);

const NodeProvider = NodeContext.Provider;
const NodeDispatchProvider = NodeDispatchContext.Provider;

export default function NodeWrapper({ initialState, children }) {
    const initialId = initialState.reduce((accum, node) => 
        node.id > accum ? node.id : accum,
        -1);
    const [nodeId, setId] = useState(initialId + 1);
    const [nodes, dispatch] = useReducer(nodesReducer, initialState);

    const addNode = (node) => {
        dispatch({
            type: 'added',
            id: nodeId,
            node: node,
        });
        setId((id) => id + 1);
    };

    return (
        <NodeProvider value={{ nodes, nodeId }}>
          <NodeDispatchProvider value={ dispatch }>
          {children}
          </NodeDispatchProvider>
        </NodeProvider>
    );
}

NodeWrapper.propTypes = {
    initialState: PropTypes.arrayOf(PropTypes.exact({
        id : PropTypes.number, 
        rect: PropTypes.exact({
            x: PropTypes.number,
            y: PropTypes.number,
            h: PropTypes.number,
            w: PropTypes.number,
        }),
        name: PropTypes.string, 
    })), 
};

Node.propTypes = {
    node: PropTypes.exact({
        id : PropTypes.number, 
        rect: PropTypes.exact({
            x: PropTypes.number,
            y: PropTypes.number,
            h: PropTypes.number,
            w: PropTypes.number,
        }),
        name: PropTypes.string, 
    }),
};

export function useNodeContext() {
    return useContext(NodeContext);
} 

export function useNodeDispatchContext() {
    return useContext(NodeDispatchContext);
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
    case 'get all': 
        return nodes;
    default: 
        throw Error('Unknown action: ' + action.type);
    }
}
