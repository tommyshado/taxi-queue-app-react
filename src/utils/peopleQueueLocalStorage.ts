export const fetchPeopleQueueFromLocalStorage = () => {
    return Number(localStorage.getItem('peopleQueue')) || 0; // Default to 0 if not set
};

export const updatePeopleQueueInLocalStorage = (newQueueValue: number) => {
    localStorage.setItem('peopleQueue', JSON.stringify(newQueueValue));
};