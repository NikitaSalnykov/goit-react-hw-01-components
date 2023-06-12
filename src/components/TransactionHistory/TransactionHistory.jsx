import { Table } from "./TransactionHistory.styled"
import { TransactionTr } from "./TransactionRaw"

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

