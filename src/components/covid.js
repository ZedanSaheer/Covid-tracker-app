import React, { useEffect ,useState} from 'react'
import './covid.css'

const Covid = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const data = await res.json();
            console.log(data.statewise[0])
            setData(data.statewise[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <div>
                <div className="container">
                    <div className="covid-card">
                        <div className="text-one"><p><span className="one">total</span><span className="two">Cases</span></p></div>
                        <div className="text-two"><p>India</p></div>
                    </div>
                    <div className="covid-card">
                        <div className="text-one"><p><span className="one">total</span><span className="two">recovered</span></p></div>
                        <div className="text-two"><p>{data.recovered}</p></div>
                    </div>
                    <div className="covid-card">
                        <div className="text-one"><p><span className="one">total</span><span className="two">confirmed</span></p></div>
                        <div className="text-two"><p>{data.confirmed}</p></div>
                    </div>
                    <div className="covid-card">
                        <div className="text-one"><p><span className="one">total</span><span className="two">death</span></p></div>
                        <div className="text-two"><p>{data.deaths}</p></div>
                    </div>
                    <div className="covid-card">
                        <div className="text-one"><p><span className="one">total</span><span className="two">active</span></p></div>
                        <div className="text-two"><p>{data.active}</p></div>
                    </div>
                    <div className="covid-card">
                        <div className="text-one"><p><span className="one">last</span><span className="two">updates</span></p></div>
                        <div className="text-two"><p>{data.lastupdatedtime}</p></div>
                    </div>
                </div>
            </div>
    )
}

export default Covid
