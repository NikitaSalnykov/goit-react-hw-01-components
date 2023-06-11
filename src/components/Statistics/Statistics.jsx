import { List } from "components/Profile/profile.styled"
import { StatisticsItem } from "./Statistics-item"
import { Section } from "./Statistics-styled"


export const Statistics = ({ title, stats }) => {
    return <Section>
        <h2>{title}</h2>    
    <List>
        <StatisticsItem stats={stats}/>
        </List>
    </Section>
    }   