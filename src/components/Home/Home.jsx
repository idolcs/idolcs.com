import About from "./About/About";
import Announcements from "./Announcements/Announcements";
import Greeting from "./Greeting/Greeting";
import RecentChapters from "./RecentChapters/RecentChapters";
import Redirects from "./Redirects/Redirects";
import Login from "./Login/Login";
import { useState } from 'react';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const handleLoginSuccess = (userName) => {
        setIsLoggedIn(true);
        setUserName(userName);
    }
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-10 gap-10 sm:gap-10">
            <div className="col-span-1 sm:col-span-2">
                {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess}/>}
            </div>
            {isLoggedIn && 
                <div className="col-span-1 sm:col-span-2">
                    <Greeting userName={userName}/>
                </div>
            }
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