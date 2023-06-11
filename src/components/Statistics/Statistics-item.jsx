import { ItemList } from "./Statistics-styled"


export const StatisticsItem = ({ stats }) => {
    return(
        stats.map((stat) => {
            return <ItemList key={stat.id}>
      <span>{stat.label}</span>
      <span>{stat.percentage}%</span>
    </ItemList>
    }))   
}