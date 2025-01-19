import PeopleQueue from "./PeopleQueue";
import TaxiQueue from "./TaxiQueue";
import { Stack, Container, Row, Col } from "react-bootstrap";
import Header from "./Header";

const ShowPeopleAndTaxiQueue = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Container className="flex-grow-1">
        <Row className="h-100 align-items-center justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            <Stack
              direction="horizontal"
              gap={4}
              className="justify-content-center"
            >
              <PeopleQueue />
              <TaxiQueue />
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowPeopleAndTaxiQueue;
