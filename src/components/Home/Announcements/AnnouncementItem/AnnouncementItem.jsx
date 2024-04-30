const AnnouncementItem = (props) => {
    return (
        <>
            <div className="bg-[#AEB3EF] mt-3 p-4 py-5 w-full rounded-md relative">
                <h3 className="text-[1.2em] font-medium sm:font-medium mb-2">{props.data.title}</h3>
                <p className="text-[0.85em] mb-2">{props["data"]["description"]}</p>
                <p className="text-right text-[0.8em]">{props["data"]["date"]}</p>
            </div>
        </>
    )
}

export default AnnouncementItem;