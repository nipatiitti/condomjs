import PropTypes from 'prop-types'
import penis from 'penis'

const Condom = ({ D: head, B: balls, isHard, children }) => {
    penis.setBalls(balls)
    penis.setHead(head)

    if (isHard) {
        return D === B && children
    } else {
        return D == B && children
    }
}

Condom.propTypes = {
    D: PropTypes.object,
    B: PropTypes.object,
    isHard: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Condom.defaultProps = {
    isHard: false,
    children: '',
}

export default Condom
