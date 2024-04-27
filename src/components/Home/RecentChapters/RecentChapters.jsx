import { Link } from "react-router-dom";
import RecentChaptersItem from "./RecentChaptersItem/RecentChaptersItem";

const RecentChapters = () => {

    const recentchapterslist = [
        {
            title: "OOPS in C",
            subject: "Programming with C",
            date: "12 March 2024"
        },
        {
            title: "HTTP Server with Flask",
            subject: "Python Programming",
            date: "19 February 2024"
        },
        {
            title: "Objects and Classes",
            subject: "Programming with C",
            date: "10 February 2024"
        },
        {
            title: "The concept of Web",
            subject: "Web Development",
            date: "08 February 2024"
        }
    ]

    return (
        <>
            <h2 className="text-xl text-white opacity-70 font-semibold">Recently Updated Chapters</h2>
            <div>
                {recentchapterslist.map((data)=> (<RecentChaptersItem data={data}/>))}
            </div>
            <div className="w-full flex justify-end">
                <Link  className="p-[0.7em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" href="/null">view more</Link>
            </div>
        </>
    )
}

export default RecentChapters;