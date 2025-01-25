import useTaxiStore from "../stores/useTaxiStore";
import { Card, Button, Stack } from 'react-bootstrap';

const TaxiQueue = () => {
  const { queue, incrementQueue, decrementQueue } = useTaxiStore();

  const handleTaxiLeavingQueue = () => {
    if (queue < 1) {
      alert("Not enough taxis in the queue.");
      return;
    }
    if (queue >= 1) {
      decrementQueue();
    }
  }

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title as="h1" className="mb-4 fs-2">Taxi queue: {queue}</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <Button variant="warning" onClick={incrementQueue}>
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