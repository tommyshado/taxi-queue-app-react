export const fetchTaxiQueueFromLocalStorage = () => {
    return Number(localStorage.getItem('taxiQueue')) || 0; // Default to 0 if not set
};

export const updateTaxiQueueInLocalStorage = (newQueueValue: number) => {
    localStorage.setItem('taxiQueue', JSON.stringify(newQueueValue));
};
