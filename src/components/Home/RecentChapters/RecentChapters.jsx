import { Link } from "react-router-dom";
import RecentChaptersItem from "./RecentChaptersItem/RecentChaptersItem";
import { useSelector, useDispatch } from "react-redux";
import { addRecentChapter } from "../../../redux-store/features/recentChapters/recentChapters";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const RecentChapters = () => {
    const recentChaptersList = useSelector(state => state.recentChapters.chapters);
    console.log(recentChaptersList);

    const dispatch = useDispatch();
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
        <>
<<<<<<< Updated upstream
            <h2 className="text-xl text-white font-semibold">Recently Updated Chapters</h2>
=======
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
>>>>>>> Stashed changes
            <div>
                {recentChaptersList.map((data)=> (<RecentChaptersItem key={data.id} data={data}/>))}
            </div>
            <div className="w-full flex justify-end">
                <Link  className="p-[0.5em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" href="/null">view more</Link>
            </div>
        </>
    )
}

export default RecentChapters;