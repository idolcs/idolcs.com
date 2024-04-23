const AnnouncementItem = (props) => {
    console.log(props.data.tags);
    return (
        <>
            <div className="bg-[#F3F1F2] mt-3 p-4 py-5 w-full rounded-md">
                {props.data.tags.map((tag, index) => <span key={index} className="px-2 py-1 mt-3 mr-1 rounded-2xl text-sm bg-blueMagenta-500 hover:bg-blueMagenta-900 hover:text-white cursor-pointer" onClick={props.filterAnnouncement}>{tag}</span>)}
                <p className="text-[1.1em] font-medium my-2">{props.data.title}</p>
                <p className="text-[0.9rem] mb-2">{props.data.description}</p>
                <p className="text-[0.8rem]">{props.data.date}</p>
            </div>
        </>
    )
}

export default AnnouncementItem;