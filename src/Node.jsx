import './Node.css';
import { PropTypes } from 'prop-types';
import { useNodeContext } from './Store';

export default function NodeRenderer() {
    const { nodes, id } = useNodeContext();
    console.log(useNodeContext());
    return (
        <svg width="200" height="100">
        {nodes.map((node) => 
              <rect key={node.id} className={'node'} 
              x={node.rect.x} 
              y={node.rect.y} 
              width={node.rect.w}
              height={node.rect.h}>
              {node.name}
              </rect>
        )}
        </svg>
    );
}

