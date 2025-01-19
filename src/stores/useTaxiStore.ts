import { create } from "zustand";
import { fetchTaxiQueueFromLocalStorage, updateTaxiQueueInLocalStorage } from "../utils/taxiQueueLocalStorage";

interface TaxiQueue {
    taxiQueue: number;
    increaseTaxiQueue: () => void;
    taxiDeparture: () => void;
}

const useTaxiStore = create<TaxiQueue>((set) => ({
    taxiQueue: fetchTaxiQueueFromLocalStorage(),
    increaseTaxiQueue: () => set((state) => { 
        const updatedQueue = state.taxiQueue + 1;
        updateTaxiQueueInLocalStorage(updatedQueue);
        return { taxiQueue: updatedQueue };
     }),
    taxiDeparture: () => set((state) => {
        const updatedQueue = state.taxiQueue - 1;
        updateTaxiQueueInLocalStorage(updatedQueue);
        return { taxiQueue: updatedQueue };
    }),
}));

export default useTaxiStore;