const RecentItem = (props) => {
  return (
    <>
      <div className="p-3 min-w-[13em] bg-[#D5CEFF] rounded-md mr-2 sm:mr-4 sm:pt-4 flex flex-col justify-between">
        <p className="text-[1.1em]  sm:font-medium">{props["item"]["name"]}</p>
        <div className="mt-1 sm:mt-2">
          <p className="text-[0.85em] h-[1.3em] opacity-70">
            {props["item"]["subject"]}
          </p>
          <p className="text-[0.85em] h-[1.3em] opacity-70">
            {props["item"]["sem"]}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecentItem;
