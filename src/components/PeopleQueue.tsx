import usePeopleStore from "../stores/usePeopleStore";

const PeopleQueue = () => {
  const { peopleQueue, increasePeopleQueue, decreasePeopleQueue } = usePeopleStore();

  function handlePeopleLeavingQueue() {
    if (peopleQueue < 1) {
      alert("No one is in the queue!");
      return;
    };

    decreasePeopleQueue();
  }

  return (
    <div>
      <h1>People Queue: {peopleQueue}</h1>
      <button onClick={increasePeopleQueue}>Join Queue</button>
      <button onClick={handlePeopleLeavingQueue}>Leave Queue</button>
    </div>
  );
};

export default PeopleQueue;