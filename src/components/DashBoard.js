import { useEffect, useState } from "react";
import Graph from "./Graph";
import InfoCard from "./InfoCard";
import MainCard from "./MainCard";
import Loader from "./Loader";


export default function Dashboard() {
    const [mainCardData, setMainCardData] = useState({});
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {

        // function for fetching the school data
        async function getData() {
            try {
                 await fetch("https://ed-dashboard.vercel.app/school")
                    .then((res) => res.json())
                    .then((json) => {
                        setMainCardData(json);
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
            <div className="main-section">
                <div className="container">
                    
                    
                    <MainCard data={mainCardData}/>

                    <InfoCard />
                    <div className="charts">
                        <Graph />
                    </div>
                </div>
            </div>
        </>
    )
}