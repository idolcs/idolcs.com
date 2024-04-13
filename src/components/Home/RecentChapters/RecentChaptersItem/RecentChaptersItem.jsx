const RecentChaptersItem = (props) => {
    return (
        <>
            <div className="bg-[#F3F1F2] mt-3 p-4 py-4 w-full rounded-md">
                <p className="text-[1.1em] font-medium mb-2">{props["data"]["title"]}</p>
                <div className="flex ">
                <p className="text-[0.9rem] mr-2">{props["data"]["subject"]}</p>
                <p className="text-[0.9rem] mr-2">{props["data"]["date"]}</p>
                </div>
            </div>
        </>
    )
}

export default RecentChaptersItem;