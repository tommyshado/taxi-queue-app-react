import useTaxiStore from "../stores/useTaxiStore";
import { Card, Button, Stack } from 'react-bootstrap';

const TaxiQueue = () => {
  const { taxiQueue, increaseTaxiQueue, decreaseTaxiQueue } = useTaxiStore();

  const handleTaxiLeavingQueue = () => {
    if (taxiQueue < 1) {
      alert("Not enough taxis in the queue.");
      return;
    }
    if (taxiQueue >= 1) {
      decreaseTaxiQueue();
    }
  }

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title as="h1" className="mb-4 fs-2">Taxi queue: {taxiQueue}</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <Button variant="warning" onClick={increaseTaxiQueue}>
            Join queue
          </Button>

          <Button variant="danger" onClick={handleTaxiLeavingQueue}>
            Leave queue
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default TaxiQueue;