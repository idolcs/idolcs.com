const RecentChaptersItem = (props) => {
    return (
        <>
            <div className="bg-[#AEB3EF] mt-3 p-4 py-4 w-full rounded-md">
                <h3 className="text-sm font-medium mb-2">{props["data"]["title"]}</h3>
                <div className="flex ">
                <p className="text-xs mr-2">{props["data"]["subject"]}</p>
                <p className="text-xs mr-2">{props["data"]["date"]}</p>
                </div>
            </div>
        </>
    )
}

export default RecentChaptersItem;