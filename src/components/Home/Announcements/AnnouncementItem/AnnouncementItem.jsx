const AnnouncementItem = (props) => {

    return (
        <>
            <div className="bg-[#AEB3EF] mt-2 p-3 w-full rounded-md">
                <h3 className="text-base font-medium">{props["data"]["title"]}</h3>
                <p className="text-xs mb-0.5">{props["data"]["description"]}</p>
                <p className="text-right text-[10px]">{props["data"]["date"]}</p>
            </div>
        </>
    )
}

export default AnnouncementItem;