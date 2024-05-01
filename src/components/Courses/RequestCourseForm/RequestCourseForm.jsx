const RequestCourseForm = (props) => {
  return (
    <>
      <div className="fixed left-0 top-0 z-[1000] flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-65 p-6">
        <div className="w-full rounded-md bg-[#32323B] p-4 text-[1.1em] opacity-100 relative">
            <button onClick={() => {props.setToggleRequestCourse(false)}} className="text-[0.7em] absolute top-0 right-4 translate-y-[-50%] py-1 px-2  rounded-xl bg-black">close</button>
          <p>Request a New Course</p>
          <label htmlFor="inp1">
            <p className="mb-[0.3em] pt-3 text-[0.8em] opacity-70">
              Course Name
            </p>
            <input
              className="w-full rounded bg-[#444447] p-2"
              type="text"
              name=""
              id="inp1"
              placeholder="Masters of Computer Application"
            />
          </label>
          <label htmlFor="inp2">
            <p className="mb-[0.3em] pt-3 text-[0.8em] opacity-70">Type</p>
            <input
              className="w-full rounded bg-[#444447] p-2"
              type="text"
              name=""
              id="inp2"
              placeholder="Post Graduate"
            />
          </label>
          <label htmlFor="inp3">
            <p className="mb-[0.3em] pt-3 text-[0.8em] opacity-70">
              Available in IDOL (CDOE)?
            </p>
            <select
              name=""
              id="inp3"
              className="w-full rounded bg-[#444447] p-2"
            >
              <option defaultValue disabled name="" id="">
                -- select --
              </option>
              <option name="" id="">
                Yes
              </option>
              <option name="" id="">
                No
              </option>
            </select>
          </label>
          <label htmlFor="inp4">
            <p className="mb-[0.3em] pt-3 text-[0.8em] opacity-70">
              Additional Comments
            </p>
            <textarea
              className="w-full rounded bg-[#444447] p-2"
              name=""
              id=""
              cols="30"
              rows={3}
              placeholder="Provide additional information about why do you want this course to be added"
            ></textarea>
          </label>
          <button className="mt-4 p-3 bg-[#6B71D0] w-full rounded-xl">Submit Request</button>
        </div>
      </div>
    </>
  );
};

export default RequestCourseForm;
