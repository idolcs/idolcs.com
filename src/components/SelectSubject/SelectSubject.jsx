import { useState } from "react";
import Dropdown from "../Utils/Dropdown/Dropdown";

const SelectSubject = () => {

    const [selectedSubject, setSelectedSubject] = useState();

    const dropdowndata = [
        {
            text: "Semester 1",
            value: "1"
        },
        {
            text: "Semester 2",
            value: "2"
        },
        {
            text: "Semester 3",
            value: "3"
        },
        {
            text: "Semester 4",
            value: "4"
        },
        {
            text: "Semester 5",
            value: "5"
        },
        {
            text: "Semester 6",
            value: "6"
        },
    ]

    const subjectList = [];

    for(let i = 0; i < 10; i++){
        subjectList.push(
            <>
                <div className="p-3 w-full bg-[#6B71D0] hover:bg-[#D5CFFE] cursor-pointer mt-4 rounded-md text-[#020303] shadow-md shadow-[rgba(0,0,0,0.5)] text-[1.1em]">
                    {`Subject ${i + 1}`}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="p-4 mt-6">
                <p className="text-[1.4em] font-semibold">B.SC. Computer Science</p>
                <div className="mt-4">
                    <Dropdown setValue={setSelectedSubject} data={dropdowndata} />
                </div>
                <div className="pt-4">
                    {subjectList}
                </div>
            </div>
        </>
    )
}

export default SelectSubject;