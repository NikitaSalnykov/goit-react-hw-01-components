import { List } from "components/Profile/profile.styled"
import { StatisticsItem } from "../StatisticsItem/Statistics-item"
import { Section } from "./Statistics-styled"
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    return <Section>
       {title && <h2>{title}</h2>}    
    <List>
        <StatisticsItem stats={stats}/>
        </List>
    </Section>
}   
    
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}