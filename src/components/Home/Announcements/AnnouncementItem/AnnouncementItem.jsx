import { removeAnnouncement } from "../../../../redux-store/features/announcement/announcement";
import { useDispatch } from "react-redux";

const AnnouncementItem = (props) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="bg-[#AEB3EF] mt-3 p-4 py-5 w-full rounded-md relative">
                <h3 className="text-base font-medium mb-2">{props.data.title}</h3>
                <button className="absolute top-0 right-0 w-8 h-8 p-2 bg-blueMagenta-500 hover:bg-blueMagenta-700 text-white rounded-tr-md" onClick={() => dispatch(removeAnnouncement(props.data.id))}>X</button>
                <p className="text-xs mb-2">{props["data"]["description"]}</p>
                <p className="text-[10px]">{props["data"]["date"]}</p>
            </div>
        </>
    )
}

export default AnnouncementItem;