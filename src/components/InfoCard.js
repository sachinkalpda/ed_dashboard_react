import { useEffect, useState } from "react";
import Loader from "./Loader";



export default function InfoCard() {
    const [cardData, setCardData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // function for fetching the school details
        async function getData() {
            try {
                 await fetch(
                    "https://ed-dashboard.vercel.app/school/details")
                    .then((res) => res.json())
                    .then((json) => {
                        setCardData(json);
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
            <div className="card-group">
                <div className="card-sm">
                    <div className="card-details">
                        <div className="card-details-title">
                            Students
                        </div>
                        <div className="card-data">
                            {cardData.students_count}
                        </div>
                    </div>
                </div>
                <div className="card-sm">
                    <div className="card-details">
                        <div className="card-details-title">
                            Sections
                        </div>
                        <div className="card-data">
                            {cardData.sections_count}<span>In 12 class</span>
                        </div>
                    </div>
                </div>
                <div className="card-sm">
                    <div className="card-details">
                        <div className="card-details-title">
                            Collection this Month
                        </div>
                        <div className="card-data">
                            ₹{Math.round(cardData.monthly_collection / 100000)}L
                        </div>
                    </div>
                </div>
                <div className="card-sm">
                    <div className="card-details">
                        <div className="card-details-title">
                            Fine Collected Till Date
                        </div>
                        <div className="card-data">
                            ₹{Math.round(cardData.fine_amount / 100000)}L
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}