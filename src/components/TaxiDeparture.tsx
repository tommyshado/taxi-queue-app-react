import useTaxiStore from "../stores/useTaxiStore";
import usePeopleStore from "../stores/usePeopleStore";
import { Card, Button, Stack } from "react-bootstrap";

const TaxiDeparture = () => {
  const { queue: taxiQueue, taxiDeparture } = useTaxiStore();
  const { queue: peopleQueue, decreaseWhenTaxiDepart } = usePeopleStore();

  const handleTaxiDeparture = () => {
    if (taxiQueue < 1) {
      alert("Not enough taxis to depart!");
      return;
    }
    if (taxiQueue >= 1 && peopleQueue >= 12) {
      taxiDeparture();
      decreaseWhenTaxiDepart();
      alert("Taxi departed successfully!");
    } else {
      alert("Not enough people in the queue to depart!");
      return;
    }
  };

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title as="h1" className="mb-4 fs-2">
          Depart taxi
        </Card.Title>
        <Stack direction="horizontal">
          <Button variant="success" onClick={handleTaxiDeparture}>
            Depart
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default TaxiDeparture;
