const RecentItem = (props) => {
  return (
    <>
      <div className="p-3 min-w-[166px] bg-[#787CF8] rounded-md mr-2 sm:mr-4 sm:pt-4 flex flex-col justify-between bg-[url('src/assets/images/inner-circle.svg')] bg-no-repeat bg-right-bottom">
        <h3 className="text-base sm:font-medium">{props["item"]["name"]}</h3>
        <div className="mt-1 sm:mt-2 pt-4">
          <p className="h-[1.3em] text-xs opacity-70">
            {props["item"]["subject"]}
          </p>
          <p className="h-[1.3em] text-xs opacity-70">
            {props["item"]["sem"]}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecentItem;
