import { useScrollContainer } from 'react-indiana-drag-scroll';

const CollabratorsList = (props) => {

  const ScrollContainer = useScrollContainer();

  const list = props.list;
  return (
    <>
      <div className="mt-3 flex w-full overflow-x-auto no-scrollbar active:cursor-grabbing" ref={ScrollContainer.ref}>
        {list.map((item) => {
          return (
            <>
              <div className="mr-1 flex items-center rounded bg-[rgba(0,0,0,0.2)] p-1 px-2 flex-shrink-0">
                <img
                  className="mr-1 w-6 rounded-full"
                  src={item.avatar}
                  alt=""
                />
                <p className="text-[0.9em]">{item.name}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CollabratorsList;
