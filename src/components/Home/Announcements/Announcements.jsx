import { Link } from "react-router-dom";
import AnnouncementItem from "./AnnouncementItem/AnnouncementItem";
import { useDispatch, useSelector } from "react-redux";
import { addAnnouncement } from "../../../redux-store/features/announcement/announcement";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const Announcements = () => {
    const announcementslist = useSelector(state => state.announcementItems.items);
    console.log(announcementslist);
    const dispatch = useDispatch();
    const [announcement, setAnnouncement] = useState({
        id: nanoid(),
        title: "",
        description: "",
        date: new Date(),
    });

    const addAnnouncementHandler = (e) => {
        e.preventDefault();
        dispatch(addAnnouncement(announcement));
        setAnnouncement({
            id: nanoid(),
            title: "",
            description: "",
            sem: 2,
        });
    };

    return (
        <>
            <h2 className="text-xl font-semibold text-white">Announcements</h2>
            <div>
                <div className='text-white p-3 border border-dashed border-white rounded'>
                    <form onSubmit={addAnnouncementHandler}>
                        <p className='text-white mt-2'>Add an announcement?</p>
                        <div className='flex flex-col justify-center items-center'>
                            <input type='text' className='w-[100%] placeholder:text-white md:max-w-[40%] md:min-[300px] bg-blueMagenta-500 p-3 mt-3 rounded hover:bg-blueMagenta-700' placeholder="Announcement Title..." value={announcement.title} onChange={(e) => setAnnouncement(e.target.value)} />
                            <textarea className='w-[100%] placeholder:text-white md:max-w-[40%] md:min-[300px] bg-greyPink-800 p-3 mt-3 rounded hover:bg-greyPink-900' placeholder="Announcement Description" value={announcement.description} onChange={(e) => setAnnouncement(e.target.value)}></textarea>
                            <button className="m-2 p-2 w-8 h-8 bg-blueMagenta-500 hover:bg-blueMagenta-700 rounded-full">+</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                {announcementslist.map((data) => (<AnnouncementItem key={data.id} data={data}/>))}
            </div>
            <div className="w-full flex justify-end">
                <Link className="p-[0.5em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" href="/null">view more</Link>
            </div>
        </>
    )
}

export default Announcements;