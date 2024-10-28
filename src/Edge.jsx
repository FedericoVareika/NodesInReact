import { NodeContext } from 'Store';
import { useContext } from 'react';
import { PropTypes } from 'prop-types';

export default function EdgeRenderer( {edge} ) {
    const nodeContext = useContext(NodeContext);

    const source = nodeContext.getNode(edge.source);
    const sPos = source.position;

    const dest = nodeContext.getNode(edge.source);
    const dPos = dest.position;
    return (
        <svg>
           <path d={`M ${sPos.x} ${sPos.y} l ${dPos.x} ${dPos.y}`}
            fill="none"
            stroke="black"
            strokeWidth="3pt"
            /> 
        </svg>
    ); 
}

EdgeRenderer.propTypes = {
    edge: PropTypes.exact({
        id: PropTypes.number,
        source: PropTypes.number,
        dest: PropTypes.number,
    }),
};
