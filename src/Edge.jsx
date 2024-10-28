
import { PropTypes } from 'prop-types';

export default function EdgeRenderer( {edge} ) {
        

}

EdgeRenderer.propTypes = {
    edge: PropTypes.exact({
        source: PropTypes.number,
        dest: PropTypes.number,
    }),
};
