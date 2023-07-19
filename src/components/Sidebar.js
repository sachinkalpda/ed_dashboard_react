


export default function Sidebar() {
    return (
        <>
            <aside>
                <div className="aside-container">
                    <div className="aside-header">
                        <h2><i className="fa-solid fa-gear"></i> Edviron<span>v1.01</span></h2>
                    </div>
                    <div className="aside-body">
                        <nav>
                            <ul>
                                <li>
                                    <a ><i className="fa-solid fa-gauge"></i> Dashboard</a>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                <a ><i className="fa-solid fa-cube"></i> Fee Management</a>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                    <a ><i className="fa-solid fa-address-book"></i> Students</a>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                <a ><i className="fa-solid fa-coins"></i> Disbursal</a>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                <a ><i className="fa-solid fa-percent"></i> Promote</a>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                <a ><i className="fa-solid fa-circle-info"></i> Helper</a>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    )
}