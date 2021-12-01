const ChartList = ({chart}) => {

    const chartItems = chart.map((item, index) => {
        return (
            <div>
                <img src={item["im:image"][0].label} />
                <p>{index + 1}</p>
                <p>{item["im:name"].label}</p>
                <p>{item["im:artist"].label}</p>
                <audio controls src={item.link[1].attributes.href}/>
            </div>
        );
    })

    return (
        <>
            {chartItems}
        </>
        );

}

export default ChartList;