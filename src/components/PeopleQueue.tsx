import { Stack, Card, Button } from 'react-bootstrap';
import usePeopleStore from "../stores/usePeopleStore";

const PeopleQueue = () => {
  const { peopleQueue, increasePeopleQueue, decreasePeopleQueue } = usePeopleStore();

  function handlePeopleLeavingQueue() {
    if (peopleQueue < 1) {
      alert("No one is in the queue!");
      return;
    }
    decreasePeopleQueue();
  }

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title as="h1" className="mb-4">People Queue: {peopleQueue}</Card.Title>
        <Stack direction="horizontal" gap={3}>
          <Button variant="primary" onClick={increasePeopleQueue}>
            Join Queue
          </Button>
          <Button variant="danger" onClick={handlePeopleLeavingQueue}>
            Leave Queue
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default PeopleQueue;