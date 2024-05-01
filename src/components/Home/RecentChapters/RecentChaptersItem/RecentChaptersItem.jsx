const RecentChaptersItem = (props) => {
    return (
        <>
            <div className="bg-[#A0A4DD] mt-2 p-4 py-4 w-full rounded-md">
                <h3 className="text-[1.1em] font-medium mb-1">{props["data"]["title"]}</h3>
                <div className="flex justify-between">
                <p className="text-[0.78em] mr-2">{props["data"]["subject"]}</p>
                <p className="text-[0.78em] mr-2">{props["data"]["date"]}</p>
                </div>
            </div>
        </>
    )
}

export default RecentChaptersItem;