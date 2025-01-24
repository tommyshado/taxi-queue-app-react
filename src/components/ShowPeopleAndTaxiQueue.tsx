import PeopleQueue from "./PeopleQueue";
import TaxiQueue from "./TaxiQueue";
import { Stack, Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import TaxiDeparture from "./TaxiDeparture";

const ShowPeopleAndTaxiQueue = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Container className="flex-grow-1">
        <Row className="h-100 align-items-center justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-center flex-wrap"
            >
              <PeopleQueue />
              <TaxiQueue />
              <TaxiDeparture />
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowPeopleAndTaxiQueue;
