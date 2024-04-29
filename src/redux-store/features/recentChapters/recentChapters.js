import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    chapters: [
        {
            id: nanoid(),
            title: "OOPS in C",
            subject: "Programming with C",
            date: "12 March 2024"
        },
        {
            id: nanoid(),
            title: "HTTP Server with Flask",
            subject: "Python Programming",
            date: "19 February 2024"
        },
        {
            id: nanoid(),
            title: "Objects and Classes",
            subject: "Programming with C",
            date: "10 February 2024"
        },
        {
            id: nanoid(),
            title: "The concept of Web",
            subject: "Web Development",
            date: "08 February 2024"
        }
    ]
}

export const recentlyUpdatedChapterSlice = createSlice({
    name: 'recentChapters',
    initialState,
    reducers: {
        addRecentChapter: (state, action) => {
            const chapter = {
                title: action.payload,
                subject: action.payload,
                date: new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }).format(new Date()),
            }
            state.chapters.unshift(chapter);
        },
        removeRecentChapter: (state, action) => {
            state.chapters = state.chapters.filter(chapter => chapter.id != action.payload);
        }
    }
});

export const {addRecentChapter, removeRecentChapter} = recentlyUpdatedChapterSlice.actions;

export default recentlyUpdatedChapterSlice.reducer;

