import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialListOfRecentItems = {
    items: [
    {
        id: nanoid(),
        name: "Object Oriented Programming",
        subject: "Programming with C",
        sem: "B.Sc. CS Sem 3"
    },
    {
        id: nanoid(),
        name: "File Structure",
        subject: "Linux",
        sem: "B.Sc. IT Sem 2"
    },
    {
        id: nanoid(),
        name: "HTTP Server",
        subject: "Programming with C",
        sem: "B.Sc. CS Sem 3"
    },
    {
        id: nanoid(),
        name: "Fundamentals of Marco-economics",
        subject: "Economics",
        sem: "B.Com Sem 1"
    },
]
}

const recentlyVisitedItemsSlice = createSlice({
    name: 'recentItems',
    initialState: initialListOfRecentItems,
    reducers: {
        addRecentlyVisitedItem : (state, action) => {
            const item = {
                id : nanoid,
                name: action.payload,
                subject: action.payload,
                sem:2,
            }
            state.items.push(item);
        },
        removeRecentlyVisitedItem : (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload.id);
        }
    }
});

export const {addRecentlyVisitedItem, removeRecentlyVisitedItem} = recentlyVisitedItemsSlice.actions;

export default recentlyVisitedItemsSlice.reducer;