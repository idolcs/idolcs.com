import RecentItem from "./RecentItem/RecentItem";
import { useScrollContainer } from 'react-indiana-drag-scroll';
import { useSelector } from "react-redux";

const Greeting = () => {
    
    const scrollContainer = useScrollContainer();
    const items = useSelector(state => state.recentItems.items);

    return (
        <>
            <div className="">
                <div className="sm:p-6 rounded-lg overflow-x-hidden">
                    <h1 className="text-2xl font-bold text-white">Hey Sumeet 👋</h1>
                    <p className="text-white opacity-80">What's cooking?</p>
                    <p className="font-light text-white mt-6">Continue where you left</p>
                    <div className="flex mt-3 overflow-x-scroll no-scrollbar" ref={scrollContainer.ref}>
                        {items.map(item => (<RecentItem item={item}/>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Greeting;