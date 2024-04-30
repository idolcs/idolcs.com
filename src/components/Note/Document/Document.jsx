const Document = (props) => {

    const title = props.data.title;
    const extension = props.data.extension;
    const pages = props.data.pages;
    const date = props.data.date;

    return (
        <>
            <div className="p-3 bg-[#656DDB] rounded-lg mt-2">
                <p className="text-[1.1em]">{title}</p>
                <div className="flex mt-2 gap-1">
                    <p className="text-[0.7em] bg-[rgba(0,0,0,0.1)] py-[0.3em] px-[0.5em] rounded">{extension}</p>
                    <p className="text-[0.7em] bg-[rgba(0,0,0,0.1)] py-[0.3em] px-[0.5em] rounded">{pages}</p>
                    <p className="text-[0.7em] bg-[rgba(0,0,0,0.1)] py-[0.3em] px-[0.5em] rounded">{date}</p>
                </div>
            </div>
        </>
    )
}

export default Document;