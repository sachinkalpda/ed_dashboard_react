import { useEffect, useState } from "react"
import Loader from "./Loader";


export default function Graph() {
    const [months, setMonths] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        // function for fetching the month wise collection 
        async function getData() {
            try {
                 await fetch(
                    "https://ed-dashboard.vercel.app/school/monthly")
                    .then((res) => res.json())
                    .then((json) => {
                        setMonths(json);
                        setLoading(false);

                    })
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, []);

    if(loading){
        return <>
        <Loader />
        </>
    }
    return (
        <>
            <div className="graph-card">
                <h3>Overview</h3>
                <div className="card-details-title">
                    Monthly Collections
                </div>
                <div className="bar-group">
                    {months.map((m) =>
                        <div className="bar-wrapper">
                            <div className="bar" style={{ height: m.height + '%' }}>
                                { m.height !== 0 ? 
                                    <div className="bar-percentage">
                                    {m.height+'%'}
                                </div>
                                
                                : ''}
                                <div className="bar-text">
                                    {m.name}
                                </div>
                            </div>
                        </div>

                    )}


                </div>
            </div>
        </>
    )
}