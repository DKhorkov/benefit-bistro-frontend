import PropTypes from 'prop-types'
import './ListElement.css'

export default function ListElement({ children }) {
  return <li className="list-element">{children}</li>
}

ListElement.propTypes = {
  children: PropTypes.node.isRequired
}
