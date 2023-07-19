
export default function MainCard({data}) {
    
    return (
        <>
            <h1>{data.school.name}</h1>
            <div className="card">
                <div className="card-item">
                    <div className="icon-wrapper bg-success text-success">
                        <i className="fa-solid fa-dollar-sign"></i>
                    </div>
                    <div className="card-details">
                        <div className="card-details-title">
                            Collection Till Date
                        </div>
                        <div className="card-data">
                            ₹{parseFloat(data.total_amount.amount/10000000).toFixed(2)}Cr
                        </div>
                        <p><span><i className="fa-solid fa-arrow-up"></i> 10%</span> in Last 30 Days</p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="icon-wrapper bg-primary text-primary">
                        <i className="fa-solid fa-coins"></i>
                    </div>
                    <div className="card-details">
                        <div className="card-details-title">
                            Balance
                        </div>
                        <div className="card-data">
                            ₹2.4L
                        </div>
                    </div>
                </div>
                <div className="card-item">
                    <div className="icon-wrapper bg-danger text-danger">
                        <i className="fa-solid fa-chart-simple"></i>
                    </div>
                    <div className="card-details">
                        <div className="card-details-title">
                            Defaulters
                        </div>
                        <div className="card-data">
                            11<span>/{data.school.student_count} Students</span>
                        </div>
                        <p><span><i className="fa-solid fa-arrow-down"></i> 10%</span> in Last 30 Days</p>
                    </div>
                </div>
            </div>
        </>
    )
}