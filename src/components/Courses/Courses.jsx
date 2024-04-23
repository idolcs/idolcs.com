import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: 'B.Sc Computer Science',
        },
        {
            id: 2,
            title: 'B.Sc Information Technology',
        },
        {
            id: 3,
            title: 'M.Sc Computer Science',
        },
        {
            id: 4,
            title: 'M.Sc Information Technology',
        },
    ];
    const [toggleRequestCourse, setToggleRequestCourse] = React.useState(false);
    const handleToggleRequestCourse = () => {
        setToggleRequestCourse(!toggleRequestCourse);
    };
    return (
        <div className='flex flex-col justify-center p-3 my-12 m-auto max-w-80 relative text-center'>
            <h2 className='text-base'>Select Course</h2>
            {courses.map(course => (
                <button key={course.id} className='p-3 mt-3 bg-blueMagenta-400 rounded text-sm'>
                    <h3>{course.title}</h3>
                </button>
            ))}
            <p className='mt-3 text-sm'>Not seeing your course? <a href='#' className='underline' onClick={handleToggleRequestCourse}>Request a new course</a></p>
            {/* Request a new Course */}
            {toggleRequestCourse && 
            <>
                <div className='fixed top-0 left-0 bg-black opacity-65 z-[110] w-screen h-screen'></div>
                <div className='fixed bg-white rounded px-6 py-12 text-left max-w-full md:min-w-96 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-[120]'>
                    <div className='flex justify-between'>
                        <h3 className='text-base'>Request a new Course</h3>
                        <button className='p-1 bg-blueMagenta-500 rounded-[50%]' onClick={handleToggleRequestCourse}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <form>
                        <label>
                            <p className='mt-3 text-sm'>Course Name:</p>
                            <input type="text" placeholder='Course Name' className='mt-1 px-2 py-3 w-full rounded md:min-[300px] bg-greyPink-400'/>
                        </label>
                        <br />
                        <label>
                            <p className='mt-3 text-sm'>Type:</p>
                            <input type="text" placeholder='Course Description' className='mt-1 px-2 py-3 w-full rounded md:min-[300px] bg-greyPink-400'/>
                        </label>
                        <label>
                            <p className='mt-3 text-sm'>Offered by Mumbai University?</p>
                            <input type="text" placeholder='Course Description' className='mt-1 px-2 py-3 w-full rounded md:min-[300px] bg-greyPink-400' />
                        </label>
                        <label>
                            <p className='mt-3 text-sm'>Additional Comments</p>
                            <textarea placeholder='Give us additional information which will help us decide' className='mt-1 px-2 py-3 w-full rounded md:min-[300px] bg-greyPink-400' />
                        </label>
                        <br />
                        <button className='w-[100%] md:min-[300px] bg-blueMagenta-500 p-3 mt-3 rounded hover:bg-blueMagenta-700'>Submit Request</button>
                    </form>
                </div>
            </>}
        </div>
    );
};

export default Courses;