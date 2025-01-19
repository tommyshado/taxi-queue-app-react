import usePeopleStore from "../stores/usePeopleStore";

const PeopleQueue = () => {
  const { peopleQueue, increasePeopleQueue, decreasePeopleQueue } = usePeopleStore();

  return (
    <div>
      <h1>People Queue: {peopleQueue}</h1>
      <button onClick={increasePeopleQueue}>Join Queue</button>
      <button onClick={decreasePeopleQueue}>Leave Queue</button>
    </div>
  );
};

export default PeopleQueue;