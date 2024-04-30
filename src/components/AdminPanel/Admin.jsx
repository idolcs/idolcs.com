
import AnnouncementItem from "../Home/Announcements/AnnouncementItem/AnnouncementItem";
import RecentChaptersItem from "../Home/RecentChapters/RecentChaptersItem/RecentChaptersItem";
import { useDispatch, useSelector } from "react-redux";
import { addAnnouncement } from "../../redux-store/features/announcement/announcement";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

export default function Admin() {

    const announcementslist = useSelector(state => state.announcementItems.items);
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

    const recentChaptersList = useSelector(state => state.recentChapters.chapters);

    const [recentChapter, setRecentChapter] = useState({
        id: nanoid(),
        title: "",
        subject: "",
        date: new Date(),
    });

    const addRecentChaptersHandler = (e) => {
        e.preventDefault();
        dispatch(addRecentChapter(recentChapter));
        setRecentChapter({
            id: nanoid(),
            title: "",
            subject: "",
            sem: 2,
        });
    };
    
    return (
    <div className="p-3">
    {/* Recent Chapter Update */}
        <h2 className="text-xl text-white opacity-70 font-semibold">Recently Updated Chapters</h2>
        <div className='text-white p-3 border border-dashed border-white rounded'>
            <form onSubmit={addRecentChaptersHandler}>
                <p className='text-white mt-2'>Has a new chapter been Uploaded?</p>
                <div className='flex flex-col justify-center items-center'>
                    <input type='text' className='w-[100%] placeholder:text-white md:max-w-[40%] md:min-[300px] bg-blueMagenta-500 p-3 mt-3 rounded hover:bg-blueMagenta-700' placeholder="Recent Chapter Title..." value={recentChapter.title} onChange={(e) => setRecentChapter(e.target.value)} />
                    <input type="text" className='w-[100%] placeholder:text-white md:max-w-[40%] md:min-[300px] bg-greyPink-800 p-3 mt-3 rounded hover:bg-greyPink-900' placeholder="Subject" value={recentChapter.subject} onChange={(e) => setRecentChapter(e.target.value)}></input>
                    <button className="m-2 p-2 w-8 h-8 bg-blueMagenta-500 hover:bg-blueMagenta-700 rounded-full">+</button>
                </div>
            </form>
        </div>
        <div>
            {recentChaptersList.map((data) => (<RecentChaptersItem key={data.id} data={data} />))}
        </div>
        <div className="w-full flex justify-end">
            <Link className="p-[0.5em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" href="/null">view more</Link>
        </div>
        
        {/* Announcement Update */}
        <h2 className="text-xl font-semibold text-white">Announcements</h2>
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
        <div>
            {announcementslist.map((data) => (<AnnouncementItem key={data.id} data={data} />))}
        </div>
        <div className="w-full flex justify-end">
            <Link className="p-[0.5em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" href="/null">view more</Link>
        </div>   
        
    </div>
    );
}