import { ItemList } from "../Statistics/Statistics-styled"
import PropTypes from "prop-types";
import { Span } from "./Statistics-item.styled";


export const StatisticsItem = ({ stats }) => {
    return(
        stats.map((stat) => {
            return <ItemList key={stat.id}>
      <Span>{stat.label}</Span>
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