const ResourceItem = (props) => {
  const type = props.data.type;
  const title = props.data.title;
  const description = props.data.description;

  return (
    <>
      <div
        className="relative mt-3 rounded-2xl bg-[] px-4 py-2"
        style={{
          background:
            "linear-gradient(157deg, rgba(116,63,169,0.8) 32%, rgba(43,52,150,0.8) 100%)",
        }}
      >
        <div className="flex w-full justify-between gap-2">
          <div >
            <p className="mb-2 mt-3 text-[1.1em] font-semibold">{title}</p>
          </div>
        <div className="">
          <p className="w-fit rounded-2xl bg-[rgba(0,0,0,0.2)] px-2 py-0.5 text-[0.6em]">
            {type}
          </p>
        </div>
        </div>
        <p className="text-[0.8em] mb-4">{description}</p>
      </div>
    </>
  );
};

export default ResourceItem;
