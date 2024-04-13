const AnnouncementItem = (props) => {

    return (
        <>
            <div className="bg-[#F3F1F2] mt-3 p-4 py-5 w-full rounded-md">
                <p className="text-[1.1em] font-medium mb-2">{props["data"]["title"]}</p>
                <p className="text-[0.9rem] mb-2">{props["data"]["description"]}</p>
                <p className="text-[0.8rem]">{props["data"]["date"]}</p>
            </div>
        </>
    )
}

export default AnnouncementItem;