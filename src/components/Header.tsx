import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand>Taxi Queue App</Navbar.Brand>
        <Navbar.Text>
          Manage your taxi and passenger queues efficiently
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;