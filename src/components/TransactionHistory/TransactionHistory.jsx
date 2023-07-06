import { Table } from "./TransactionHistory.styled"
import { TransactionTr } from "./TransactionRaw"
import PropTypes from 'prop-types'

export const TransactionHistory = ({items}) => {
      return <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionTr items={items} />
        </tbody>
      </Table>
}


TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
}

