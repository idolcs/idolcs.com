import { Link } from "react-router-dom";
import AnnouncementItem from "./AnnouncementItem/AnnouncementItem";

const Announcements = () => {

    const announcementslist = [
        {
            title: "Sem 3 Exam results (improved)",
            description: "This is the graphically improved version of the Sem 3 results edited by Vijay Raj from Bhavans PCP centre. Exclusively on idolcs.com",
            date: "10 April 2024",
            exclusive: true
        },
        {
            title: "Sem 3 Exam results",
            date: "10 April 2024"
        },
        {
            title: "Scholarship form",
            description: "This form is only for students who fall under the SC/ST caste group. Others can ignore this",
            date: "10 April 2024"
        }
    ]

    return (
        <>
            <h2 className="text-[1.3rem] font-semibold opacity-70 text-white">Announcements</h2>
            <div>
                {announcementslist.map((data) => (<AnnouncementItem data={data}/>))}
            </div>
            <div className="w-full flex justify-end">
                <Link className="p-[0.7em] bg-[#D5CEFF] mt-3 rounded-[0.3rem]" href="/null">view more</Link>
            </div>
        </>
    )
}

export default Announcements;