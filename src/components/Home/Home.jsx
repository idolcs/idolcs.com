import About from "./About/About";
import Announcements from "./Announcements/Announcements";
import Greeting from "./Greeting/Greeting";
import RecentChapters from "./RecentChapters/RecentChapters";
import Redirects from "./Redirects/Redirects";
import Login from "./Login/Login";

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-10 gap-10 sm:gap-10 bg-[#1F1F65]">
                <div className="col-span-1 sm:col-span-2">
                    <Login />
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <Greeting />
                </div>
                <div>
                    <input type="search" className='pl-10 p-2 rounded w-full bg-[url("./src/assets/icons/search.svg")] bg-no-repeat bg-[0.5rem_0.5rem]' placeholder="Search" />
                </div>
                <div>
                    <Announcements />
                </div>
                <div>
                    <RecentChapters />
                </div>
            </div>
        </>
    )
}

export default Home;