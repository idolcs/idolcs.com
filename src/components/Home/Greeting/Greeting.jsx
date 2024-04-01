import RecentItem from "./RecentItem/RecentItem";
import { useScrollContainer } from 'react-indiana-drag-scroll';

const Greeting = () => {
    
    const scrollContainer = useScrollContainer();

    const items = [
        {
            name: "Object Oriented Programming",
            subject: "Programming with C",
            sem: "B.Sc. CS Sem 3"
        },
        {
            name: "File Structure",
            subject: "Linux",
            sem: "B.Sc. IT Sem 2"
        },
        {
            name: "HTTP Server",
            subject: "Programming with C",
            sem: "B.Sc. CS Sem 3"
        },
        {
            name: "Fundamentals of Marco-economics",
            subject: "Economics",
            sem: "B.Com Sem 1"
        },
    ]

    return (
        <>
            <div className="">
                <div className="bg-[#F3F1F2] p-4 sm:p-6 rounded-lg overflow-x-hidden">
                    <p className="text-[1.2em] font-semibold">Hey Sumeet 👋</p>
                    <p className="font-light mt-2">Continue where you left</p>
                    <div className="flex mt-1 overflow-x-scroll no-scrollbar" ref={scrollContainer.ref}>
                        {items.map(item => (<RecentItem item={item}/>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Greeting;