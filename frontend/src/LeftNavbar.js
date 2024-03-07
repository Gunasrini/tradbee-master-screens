import { NavLink } from "react-router-dom"

export default function LeftNavbar() {
    return (
        <div className="left-navbar">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Employee Type</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/company-type">Company Type</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/business-nature">Business Nature</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/industry-type">Industry Type</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/collateral-type">Collateral Type</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/document-type">Document Type</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/bank">Bank</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/relation-type">Relation Type</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/data-consent">Data Consent</NavLink>
                </li>
            </ul>
        </div>
    )
}

