import Note from "../../Note/Note";

const Noteslist = () => {
    return (
        <>
            <div>
                <p className="text-[1.4em] font-semibold w-full max-w-full">Notes</p>
                <Note />
                <Note />
            </div>
        </>
    )
}

export default Noteslist;