const RecentChaptersItem = (props) => {
    return (
        <>
            <div className="bg-[#AEB3EF] mt-2 p-3 w-full rounded-md">
                <h3 className="text-sm font-semibold">{props["data"]["title"]}</h3>
                <div className="flex justify-between">
                <p className="text-xs ">{props["data"]["subject"]}</p>
                <p className="text-xs ">{props["data"]["date"]}</p>
                </div>
            </div>
        </>
    )
}

export default RecentChaptersItem;