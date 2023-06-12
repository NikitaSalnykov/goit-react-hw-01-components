import { TableRaw } from "./TransactionHistory.styled"
import PropTypes from 'prop-types'

export const TransactionTr = ({ items }) => {
  return items.map((item) => {
    return (
            <TableRaw key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
            </TableRaw>
    )
  })

}


TransactionTr.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired, 
   })).isRequired
}