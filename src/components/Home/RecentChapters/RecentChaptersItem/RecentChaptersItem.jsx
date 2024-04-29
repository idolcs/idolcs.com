import { useDispatch } from "react-redux";
import { removeRecentChapter } from "../../../../redux-store/features/recentChapters/recentChapters";

const RecentChaptersItem = (props) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="bg-[#AEB3EF] mt-2 p-4 py-4 w-full rounded-md">
                <h3 className="text-sm font-semibold mb-1">{props["data"]["title"]}</h3>
                <button className="absolute top-0 right-0 w-8 h-8 p-2 bg-blueMagenta-500 hover:bg-blueMagenta-700 text-white rounded-tr-md" onClick={() => dispatch(removeRecentChapter(props.data.id))}>X</button>
                <div className="flex ">
                <p className="text-xs mr-2">{props["data"]["subject"]}</p>
                <p className="text-xs mr-2">{props["data"]["date"]}</p>
                </div>
            </div>
        </>
    )
}

export default RecentChaptersItem;