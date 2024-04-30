import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: nanoid(),
            title: "Sem 3 Exam results (improved)",
            description: "This is the graphically improved version of the Sem 3 results edited by Vijay Raj from Bhavans PCP centre. Exclusively on idolcs.com",
            date: "10 April 2024",
            exclusive: true
        },
        {
            id: nanoid(),
            title: "Sem 3 Exam results",
            description: "",
            date: "10 April 2024"
        },
        {
            id: nanoid(),
            title: "Scholarship form",
            description: "This form is only for students who fall under the SC/ST caste group. Others can ignore this",
            date: "10 April 2024"
        }
    ]
}

const announcementSlice = createSlice({
    name: 'announcementItems',
    initialState,
    reducers: {
        addAnnouncement: (state, action) => {
            const item = {
                id: nanoid,
                title: action.payload,
                description: action.payload,
                date: new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                }).format(new Date()),
                sem: 2,
            }
            state.items.unshift(item);
        },
        removeAnnouncement: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload);
        }
    }
});

export const { addAnnouncement, removeAnnouncement } = announcementSlice.actions;

export default announcementSlice.reducer;