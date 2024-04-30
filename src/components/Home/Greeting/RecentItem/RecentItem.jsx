const RecentItem = (props) => {
  return (
    <>
      <div className={`p-3 min-w-[12em] bg-[#8C8FFC] rounded-md mr-2 sm:mr-4 sm:pt-4 flex flex-col justify-between bg-blend-overlay bg-no-repeat bg-right-bottom`}>
        <h3 className="text-[1.2em] font-medium sm:font-medium">{props["item"]["name"]}</h3>
        <div className="mt-2 sm:mt-2">
          <p className="text-[0.8em]">
            {props["item"]["subject"]}
          </p>
          <p className="text-[0.8em]">
            {props["item"]["sem"]}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecentItem;
