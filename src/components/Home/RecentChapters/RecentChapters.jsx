import { Link } from "react-router-dom";
import RecentChaptersItem from "./RecentChaptersItem/RecentChaptersItem";
import { useSelector } from "react-redux";

const RecentChapters = () => {
    const recentChaptersList = useSelector(state => state.recentChapters.chapters);

    return (
        <>
            <h2 className="text-xl text-white font-semibold">Recently Updated Chapters</h2>
            <div>
                {recentChaptersList.map((data)=> (<RecentChaptersItem key={data.id} data={data}/>))}
            </div>
            <div className="w-full flex justify-end">
                <Link  className="px-[0.5em] py-[0.4em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" href="/null">view more</Link>
            </div>
        </>
    )
}

export default RecentChapters;