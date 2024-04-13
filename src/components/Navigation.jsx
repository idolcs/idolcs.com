import { Link } from "react-router-dom";

export default function Navigation(props) {
    return (
        <> 
        {props.visibility && <nav className="text-center m-3">
            <ul className="md:flex">
                <li className="p-3 my-3 border border-transparent hover:border-slate-400">
                    <Link to="/">B.Sc. CS Sem 3</Link>
                </li>
                    <li className="p-3 my-3 border border-transparent hover:border-slate-400">
                    <Link to="/courses">Courses</Link>
                </li>
                    <li className="p-3 my-3 border border-transparent hover:border-slate-400">
                    <Link to="/about">About</Link>
                </li>
                    <li className="p-3 my-3 border border-transparent hover:border-slate-400">
                    <Link to="/profile">My Profile</Link>
                </li>
                    <li className="p-3 my-3 border border-transparent hover:border-slate-400">
                    <Link to="/announcements">Announcements</Link>
                </li>
                    <li className="p-3 my-3 border border-transparent hover:border-slate-400">
                    <Link to="/contactus">Contact Us</Link>
                </li>
            </ul>
        </nav>}
        </>
);
}