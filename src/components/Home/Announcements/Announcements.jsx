import { Link } from "react-router-dom";
import AnnouncementItem from "./AnnouncementItem/AnnouncementItem";
import { useState } from "react";

const Announcements = () => {

    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const [tags, setTags] = useState(['General', 'Important', 'Sem1', 'Sem2', 'Sem3', 'Sem4', 'Sem5', 'Sem6']);
    const [selectedTags, setSelectedTags] = useState([]);

    const [announcementslist, setAnnouncement] = useState([
        {
            title: "Sem 3 Exam results (improved)",
            description: "This is the graphically improved version of the Sem 3 results edited by Vijay Raj from Bhavans PCP centre. Exclusively on idolcs.com",
            date: "10 April 2024",
            tags: ['General', 'Sem1']
        },
        {
            title: "Sem 3 Exam results",
            description: "",
            date: "10 April 2024",
            tags: ['General', 'Sem2']
        },
        {
            title: "Scholarship form",
            description: "This form is only for students who fall under the SC/ST caste group. Others can ignore this",
            date: "10 April 2024",
            tags: ['Important']
        }
    ]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3);

    const handleViewMore = () => {
        setEndIndex(endIndex + 3);
    }

    const updateAnnouncement = (e) => {
        e.preventDefault();
        setAnnouncement(prevAnnouncement => [ 
            {
                title: newTitle,
                description: newDescription,
                date: new Date().toDateString(),
                tags: selectedTags,
            },...prevAnnouncement
        ]
    );
            setNewTitle("");
            setNewDescription("");
        }

    const handleSelectedTags = (e) => {
        e.preventDefault();
        const newTags = [...selectedTags, e.target.innerText];
        setSelectedTags(newTags);
        console.log(newTags);
        setAnnouncement(prevAnnouncement => prevAnnouncement.filter(announcement => {
            return newTags.every(tag => announcement.tags.includes(tag));
        }));
    }

    const removeFilter = (e) => {
        e.preventDefault();
        setSelectedTags([]);
        setAnnouncement(announcementslist);
    }

    return (
        <>
            <p className="text-[1.3rem] font-semibold opacity-70">Announcements</p>
            <div className="flex flex-col space-y-4">
                <form className="border border-greyPink-700 p-3 my-3">
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Announcement Title"
                        className="p-2 mt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Announcement Description"
                        className="p-2 mt-2 h-20 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <caption className="flex flex-wrap rounded my-3 text-xs text-gray-500 border border-greyPink-500 w-full">Tags
                        {tags.map((tag, index) => (
                            <label key={index} className="m-2" onClick={handleSelectedTags}>
                                <span className="px-3 py-1 rounded-2xl bg-blueMagenta-500 hover:bg-blueMagenta-900 hover:text-white" onClick={handleSelectedTags}>{tag}</span>
                            </label>
                        ))}
                    </caption>
                    <button
                        type="submit"
                        className="text-white bg-[#D5CEFF] mt-3 rounded-[50%] float-end w-10 h-10 text-center text-3xl font-bold cursor-pointer"
                        onClick={updateAnnouncement}
                    >+</button>
                </form>
            </div>
            <div>
                {Array.isArray(announcementslist) && announcementslist.map((announcement, index) => 
                        (index >= startIndex && index < endIndex) &&
                        <AnnouncementItem key={index} data={announcement} filterAnnouncement={handleSelectedTags} removeFilter={removeFilter}/>
                    )}
            </div>
            <div className="w-full flex justify-end">
                <button className="p-[0.7em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" onClick={handleViewMore}>View More</button>
            </div>
        </>
    )
}

export default Announcements;