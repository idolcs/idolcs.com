import RedirectItem from "./RedirectItem/RedirectItem";

const Redirects = () => {

    const links = [
        {
            title: "B.Sc. CS Sem 3",
            link: "/sem3",
            importance: true
        },
        {
            title: "Explore all courses",
            link: "/courses",
            importance: false
        }
    ]

    return(
        <>
            <div>
                <p className="text-[1.2rem] font-semibold opacity-70">Go to</p>
                <div>
                    {links.map(item => <RedirectItem data={item} />)}
                </div>
            </div>
        </>
    )
}

export default Redirects;