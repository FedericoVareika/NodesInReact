import './Node.css';
import { PropTypes } from 'prop-types';

export default function NodeRenderer({ node }) {
    return (
      <rect className={'node'} 
        x={node.rect.x} 
        y={node.rect.y} 
        width={node.rect.w}
        height={node.rect.h}>
        {node.name}
      </rect>
    );
}

NodeRenderer.propTypes = {
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

