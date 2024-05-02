import Announcements from "./Announcements/Announcements";
import Greeting from "./Greeting/Greeting";
import RecentChapters from "./RecentChapters/RecentChapters";
import Login from "./Login/Login";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 bg-[#1F1F65] p-4 sm:grid-cols-3 sm:gap-10 sm:p-10 text-black">
        <div className="col-span-1 sm:col-span-2">
          <Login />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Greeting />
        </div>
        <div>
          <RecentChapters />
        </div>
        <div>
          <Announcements />
        </div>
      </div>
    </>
  );
};

export default Home;
