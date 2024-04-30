import { Link } from "react-router-dom";
import AnnouncementItem from "./AnnouncementItem/AnnouncementItem";
import { useSelector } from "react-redux";

const Announcements = () => {
    const announcementslist = useSelector(state => state.announcementItems.items);

    return (
        <>
            <h2 className="text-xl text-white font-semibold">Announcements</h2>
            <div>
                {announcementslist.map((data) => (<AnnouncementItem key={data.id} data={data}/>))}
            </div>
            <div className="w-full flex justify-end">
                <Link  className="px-[0.5em] py-[0.4em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" href="/null">view more</Link>
            </div>
        </>
    )
}

export default Announcements;