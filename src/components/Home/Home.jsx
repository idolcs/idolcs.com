import About from "./About/About";
import Announcements from "./Announcements/Announcements";
import Greeting from "./Greeting/Greeting";
import RecentChapters from "./RecentChapters/RecentChapters";
import Redirects from "./Redirects/Redirects";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-10 gap-10 sm:gap-10">
            <div className="col-span-1 sm:col-span-2">
                <Greeting />
            </div>
            <div className="col-span-1">
                <Redirects />
            </div>
            <div>
                <Announcements />
            </div>
            <div>
                <RecentChapters />
            </div>
            <div>
                <About />
            </div>
        </div>
        </>
    )
}

export default Home;