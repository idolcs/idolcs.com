const RedirectItem = (props) => {

    const background = props["data"]["importance"] ? `bg-[#AB9DFF]` : `bg-[#D5CEFF]`;

    return(
        <>
            <a className={`block w-full p-3 rounded-md mt-2 font-medium ` + background} href="">
                {props["data"]["title"]}
            </a>
        </>
    )
}

export default RedirectItem;