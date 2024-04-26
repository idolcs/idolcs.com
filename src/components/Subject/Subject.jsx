import { useState } from "react";
import Dropdown from "../Utils/Dropdown/Dropdown";
import Noteslist from "./Noteslist/Noteslist";

const Subject = () => {

const [selectedChapter, setSelectedChapter] = useState(null)

  const data = {
    title: "Python 2",
    description:
      "Foundational guide to Python 2 programming: syntax, data types, functions, loops, modules, debugging, OOP, algorithms, applications",
    chapters: [
      {
        title: "Python file I/O",
        chapId: "something",
      },
      {
        title: "Exception Handling",
        chapId: "execept-hand",
      },
    ],
  };

  return (
    <>
      <div className="min-h-[100vh] px-4 py-4 sm:px-10">
        <div className="my-4">
          <p className="mb-4 text-[2em] font-bold">{data.title}</p>
          <p className="sm:max-w-[800px]">{data.description}</p>
        </div>
        <div className="my-8 sm:max-w-[800px]">
          <Dropdown
            data={data.chapters.map((item) => {
              return {
                text: item.title,
                value: item.chapId,
              };
            })}
            setValue={setSelectedChapter}
            defaultText={"Select Chapter"}
          />
        </div>
        <div className="my-4 sm:max-w-[800px]">
            <Noteslist />
        </div>
      </div>
    </>
  );
};

export default Subject;
