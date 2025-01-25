import { create } from "zustand";
import { fetchPeopleQueueFromLocalStorage, updatePeopleQueueInLocalStorage } from "../utils/peopleQueueLocalStorage";
import { Queue } from "../types/Queue";

interface PeopleQueue extends Queue {
    decreaseWhenTaxiDepart: () => void;
}

const usePeopleStore = create<PeopleQueue>((set) => ({
    queue: fetchPeopleQueueFromLocalStorage(),
    incrementQueue: () => set((state) => { 
        const updatedQueue = state.queue + 1;
        updatePeopleQueueInLocalStorage(updatedQueue);
        return { queue: updatedQueue };
     }),
    decrementQueue: () => set((state) => {
        const updatedQueue = state.queue - 1;
        updatePeopleQueueInLocalStorage(updatedQueue);
        return { queue: updatedQueue };
     }),
    decreaseWhenTaxiDepart: () => set((state) => { 
        const updatedQueue = state.queue - 12;
        updatePeopleQueueInLocalStorage(updatedQueue);
        return { queue: updatedQueue };
     }),
}));

export default usePeopleStore;