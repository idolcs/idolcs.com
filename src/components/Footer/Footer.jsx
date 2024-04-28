import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-white.svg";

export default function Footer() {
    const links = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/dashboard", text: "Dashboard" },
        { href: "/complaints", text: "Complaints" },
    ];
    return (
        <footer className="p-4 pt-10 text-white bg-[#1F1F65] flex flex-col flex-wrap justify-start sm:flex-row md:justify-start md:items-center">
            <div>
                <img className="h-10" src={logo} alt="" />
                <nav className="text-center flex flex-wrap justify-start sm:flex-row lg:justify-between md:items-center">
                    {links.map((link, index) => (
                        <li key={index} className=" mt-4 mr-4 list-none border border-transparent rounded hover:border-[hsl(164,35%,59%)]">
                            <Link to={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </nav>
            </div>
            <p className="my-3 text-xs lg:text-right lg:max-w-[40%]">All the content on this website is uploaded by the users and the website does not take any responsibility for the correctness or legality of the content. Please <Link href="/" className="underline">contact</Link> for complaints and removals.</p>
        </footer>
    );
};