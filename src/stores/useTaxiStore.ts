import { create } from "zustand";
import { fetchTaxiQueueFromLocalStorage, updateTaxiQueueInLocalStorage } from "../utils/taxiQueueLocalStorage";
import { Queue } from "../types/Queue";

interface TaxiQueue extends Queue {
    taxiDeparture: () => void;
}

const useTaxiStore = create<TaxiQueue>((set) => ({
    queue: fetchTaxiQueueFromLocalStorage(),
    incrementQueue: () => set((state) => {
        const updatedQueue = state.queue + 1;
        updateTaxiQueueInLocalStorage(updatedQueue);
        return { queue: updatedQueue };
    }),
    taxiDeparture: () => set((state) => {
        const updatedQueue = state.queue - 1;
        updateTaxiQueueInLocalStorage(updatedQueue);
        return { queue: updatedQueue };
    }),
    decrementQueue: () => set((state) => {
        const updatedQueue = state.queue - 1;
        updateTaxiQueueInLocalStorage(updatedQueue);
        return { queue: updatedQueue };
    }),
}));

export default useTaxiStore;