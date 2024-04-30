const AnnouncementItem = (props) => {
    return (
        <>
            <div className="bg-[#AEB3EF] mt-3 p-4 py-5 w-full rounded-md relative">
                <h3 className="text-base font-medium mb-2">{props.data.title}</h3>
                <p className="text-xs mb-2">{props["data"]["description"]}</p>
                <p className="text-[10px]">{props["data"]["date"]}</p>
            </div>
        </>
    )
}

export default AnnouncementItem;