import { TableRaw } from "../TransactionHistory/TransactionHistory.styled"
import PropTypes from 'prop-types'
import { TableData } from "./TransactionRaw.styled"

export const TransactionTr = ({ items }) => {
  return items.map((item) => {
    return (
            <TableRaw key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
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