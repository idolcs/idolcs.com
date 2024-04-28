import ResourceItem from "./ResourceItem/ResourceItem"

const ExtraResources = () => {


    const resourceslist = [
        {
            title: "Recursion in Python, a deep dive in the DSA with Py world",
            type: "VIDEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta et laboriosam"
        },
        {
            title: "A whitepaper on the Speeds",
            type: "TEXT",
            description: "dolore illo corrupti sint perspiciatis maxime voluptate! Ab distinctio eius vel inventore et. dolore illo corrupti sint perspiciatis maxime voluptate! Ab distinctio eius vel inventore et."
        },
        {
            title: "Python Best Practices",
            type: "VIDEO"
        }
    ]

    return (
        <>
            <div>
            <p className="text-[1.7em] font-semibold w-full max-w-full mb-4">Extra Resourcess</p>
            {resourceslist.map(item => <ResourceItem data={item} />)}
            </div>
        </>
    )
}

export default ExtraResources