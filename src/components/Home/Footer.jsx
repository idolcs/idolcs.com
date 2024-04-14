import { Link } from "react-router-dom";

export default function Footer() {
    const links = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/dashboard", text: "Dashboard" },
        { href: "/complaints", text: "Complaints" },
    ];
    return (
        <footer className="bg-gradient-to-t from-[#B7DCD2] to-white flex flex-col flex-wrap justify-center sm:flex-row md:justify-between md:items-center">
            <nav className="mx-12 my-3 text-center flex flex-col flex-wrap justify-center sm:flex-row lg:justify-between md:items-center">
                {links.map((link, index) => (
                    <li key={index} className="p-3 list-none">
                        <Link to={link.href}>{link.text}</Link>
                    </li>
                ))}
            </nav>
            <p className="mx-12 my-3 text-center text-xs lg:text-right lg:max-w-[40%]">All the content on this website is uploaded by the users and the website does not take any responsibility for the correctness or legality of the content. Please <Link href="/" className="underline">contact</Link> for complaints and removals.</p>
        </footer>
    );
};