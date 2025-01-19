import useTaxiStore from "../stores/useTaxiStore";
import usePeopleStore from "../stores/usePeopleStore";
import { Card, Button, Stack } from 'react-bootstrap';

const TaxiQueue = () => {
  const { taxiQueue, increaseTaxiQueue, taxiDeparture } = useTaxiStore();
  const { peopleQueue, decreaseWhenTaxiDepart } = usePeopleStore();
  
  const handleTaxiDeparture = () => {
    if (taxiQueue < 1) {
      alert("Not enough taxis to depart!");
      return;
    }
    if (taxiQueue >= 1 && peopleQueue >= 12) {
      taxiDeparture();
      decreaseWhenTaxiDepart();
    } else {
      alert("Not enough people in the queue to depart!");
      return;
    }
  }

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title as="h1" className="mb-4">Taxi Queue: {taxiQueue}</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <Button variant="warning" onClick={increaseTaxiQueue}>
            Join Queue
          </Button>
          <Button variant="success" onClick={handleTaxiDeparture}>
            Depart
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default TaxiQueue;