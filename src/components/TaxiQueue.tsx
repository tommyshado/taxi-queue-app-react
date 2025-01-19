import useTaxiStore from "../stores/useTaxiStore";
import usePeopleStore from "../stores/usePeopleStore";

const TaxiQueue = () => {
  const { taxiQueue, increaseTaxiQueue, taxiDeparture } = useTaxiStore();
  const { peopleQueue, decreaseWhenTaxiDepart } = usePeopleStore();
  
  const handleTaxiDeparture = () => {
    if (taxiQueue >= 1 && peopleQueue >= 12) {
      taxiDeparture();
      decreaseWhenTaxiDepart();
    } else {
      alert("Not enough people to depart!");
    }
  }

  return (
    <div>
      <h1>Taxi Queue: {taxiQueue}</h1>
      <button onClick={increaseTaxiQueue}>Join Queue</button>
      <button onClick={handleTaxiDeparture}>Depart</button>
    </div>
  );
};

export default TaxiQueue;