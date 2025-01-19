import { create } from "zustand";
import { fetchPeopleQueueFromLocalStorage, updatePeopleQueueInLocalStorage } from "../utils/peopleQueueLocalStorage";

interface PeopleQueue {
    peopleQueue: number;
    increasePeopleQueue: () => void;
    decreasePeopleQueue: () => void;
    decreaseWhenTaxiDepart: () => void;
}

const usePeopleStore = create<PeopleQueue>((set) => ({
    peopleQueue: fetchPeopleQueueFromLocalStorage(),
    increasePeopleQueue: () => set((state) => { 
        const updatedQueue = state.peopleQueue + 1;
        updatePeopleQueueInLocalStorage(updatedQueue);
        return { peopleQueue: updatedQueue };
     }),
    decreasePeopleQueue: () => set((state) => {
        const updatedQueue = state.peopleQueue - 1;
        updatePeopleQueueInLocalStorage(updatedQueue);
        return { peopleQueue: updatedQueue };
     }),
    decreaseWhenTaxiDepart: () => set((state) => { 
        const updatedQueue = state.peopleQueue - 12;
        updatePeopleQueueInLocalStorage(updatedQueue);
        return { peopleQueue: updatedQueue };
     }),
}));

export default usePeopleStore;