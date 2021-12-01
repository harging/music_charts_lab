import {useState, useEffect} from "react";
import ChartList from "../components/ChartList"

const ChartBox = () =>  {
    const [chart, setChart] = useState([]);

    const getChartData = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(response => response.json())
            .then(data => setChart(data.feed.entry))
    }
    
    useEffect(() => getChartData(), []);

    return(
    <ChartList chart={chart}/>
    )
}
export default ChartBox;