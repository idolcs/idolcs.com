import Document from "./Document/Document";
import Avatar from "../../assets/images/temp-avatar.jpg";
import CollabratorsList from "./CollabratorsList/CollabratorsList";
const Note = () => {
  const documents = [
    {
      title: "All Notes Merged",
      extension: "PDF",
      pages: 34,
      date: "12 March 2024",
    },
    {
      title: "Editable All Notes Merged",
      extension: "DOCX",
      pages: 34,
      date: "10 March 2024",
    },
  ];

  const collabrators = [
    {
        name: "@yash",
        avatar: Avatar
    },
    {
        name: "@runtimemafia",
        avatar: Avatar
    }
  ]

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(157deg, rgba(116,63,169,0.8) 32%, rgba(43,52,150,0.8) 100%)",
        }}
        className="mt-4 rounded-lg p-4 py-6 overflow-x-hidden w-[100%] max-w-[100%]"
      >
        <div>
          <p className="text-[1.3em] font-semibold">Last Minute Revision Notes</p>
          <div className="mt-3">
            {documents.map((doc) => (
              <Document data={doc} />
            ))}
          </div>
          <div className="mt-3 text-[0.9em] font-light">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              repellendus itaque earum sequi numquam quis ut modi quidem,
              excepturi reprehenderit.
            </p>
            <CollabratorsList list={collabrators}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
