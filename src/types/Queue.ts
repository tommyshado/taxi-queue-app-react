export interface Queue {
    queue: number;
    incrementQueue: () => void;
    decrementQueue: () => void;
}