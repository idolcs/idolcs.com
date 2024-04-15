import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

export default function Footer() {
    const links = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/dashboard", text: "Dashboard" },
        { href: "/complaints", text: "Complaints" },
    ];
    return (
        <footer className="mt-6 bg-gradient-to-t from-[#B7DCD2] to-white flex flex-col flex-wrap justify-center sm:flex-row md:justify-between md:items-center">
            <div>
                <svg viewBox="0 0 544 319" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 m-auto md:mx-12 md:pl-3 md:w-20">
                    <path d="M0 319V0H47V319H0Z" fill="black" />
                    <path d="M140.676 319H55.1758V0H140.676L156.676 16V302.5L140.676 319ZM110.176 296V23.5H101.676V296H110.176Z" fill="black" />
                    <path d="M266.051 16V302.5L250.051 319H180.551L164.551 302.5V16L180.551 0H250.051L266.051 16ZM219.551 296V23.5H211.551V296H219.551Z" fill="black" />
                    <path d="M328.926 296V319H289.926L273.926 302.5V0H320.926V296H328.926Z" fill="black" />
                    <path d="M387.52 296V160L403.02 144H434.02V302.5L418.02 319H348.52L332.52 302.5V16L348.52 0H418.02L434.02 16V136.5H403.02L387.52 120.5V23.5H379.52V296H387.52Z" fill="black" />
                    <path d="M488.895 97.5L543.395 154V302L527.395 319H457.895L441.895 302V154H467.395L488.895 176V296H496.895V172.5L441.895 116V16L457.895 0H527.395L543.395 16V113L515.395 113.5L496.895 94V23.5H488.895V97.5Z" fill="black" />
                </svg>
                <nav className="mx-12 my-3 text-center flex flex-wrap justify-center sm:flex-row lg:justify-between md:items-center">
                    {links.map((link, index) => (
                        <li key={index} className="p-3 mt-2 mx-2 list-none border border-transparent rounded hover:border-[hsl(164,35%,59%)]">
                            <Link to={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </nav>
            </div>
            <p className="mx-12 my-3 text-center text-xs lg:text-right lg:max-w-[40%]">All the content on this website is uploaded by the users and the website does not take any responsibility for the correctness or legality of the content. Please <Link href="/" className="underline">contact</Link> for complaints and removals.</p>
        </footer>
    );
};