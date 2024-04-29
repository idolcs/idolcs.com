const ResourceItem = (props) => {

    const type = props.data.type;
    const title = props.data.title;
    const description = props.data.description;

    return (
        <>
            <div className="bg-[] p-4 mt-3 rounded-lg"
             style={{
                background:
                  "linear-gradient(157deg, rgba(116,63,169,0.8) 32%, rgba(43,52,150,0.8) 100%)",
              }}>
                <div className="bg-[rgba(0,0,0,0.2)] p-1 w-fit rounded mb-2">
                    <p className="text-[0.8em]">{type}</p>
                </div>
                    <p className="text-[1.1em] font-semibold mb-2">{title}</p>
                    <p className="text-[0.8em]">{description}</p>
            </div>
        </>
    )
}

export default ResourceItem;