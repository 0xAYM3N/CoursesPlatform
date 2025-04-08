import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">كورسات</Link>
                </div>

                <div className="btns">
                    <i className="fas fa-user user"></i>
                    <i className="fas fa-bars menu"></i>
                    <i className="fas fa-search search"></i>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
