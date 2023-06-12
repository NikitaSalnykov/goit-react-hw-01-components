import { ItemList } from "./Statistics-styled"
import PropTypes from "prop-types";


export const StatisticsItem = ({ stats }) => {
    return(
        stats.map((stat) => {
            return <ItemList key={stat.id}>
      <span>{stat.label}</span>
      <span>{stat.percentage}%</span>
    </ItemList>
    }))   
}

StatisticsItem.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
})).isRequired
}