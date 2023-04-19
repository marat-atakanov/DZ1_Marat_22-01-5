import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <ul style={{listStyleType: "none", display: "flex", justifyContent: "center"}}>
                <li style={{marginRight: "10px"}}>
                    <NavLink to={'/one'} className="link">Page One</NavLink>
                </li>
                <li style={{marginRight: "10px"}}>
                    <NavLink to={'/two'} className="link">Page Two</NavLink>
                </li>
                <li style={{marginRight: "10px"}}>
                    <NavLink to={'/three'} className="link">Page Three</NavLink>
                </li>
                <li style={{marginRight: "10px"}}>
                    <NavLink to={'/users'} className="link">Users</NavLink>
                </li>
            </ul>
        </>
    )
}