import { NavLink } from "react-router-dom/dist";

import { Container, Button, Nav, Navbar as Navbarbs } from "react-bootstrap";
import { useShoppingCart } from "./Context/ShoppingCartContext";
export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <Navbarbs
      sticky="top"
      className="d-flex flex-column bd-highlight mb-100 mw-300 bg-info text-white"
      style={{ margin: ".3rem", padding: "10px", height: "140px" }}
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <h1 className="display-1"> Home </h1>
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            <h1 className="display-1"> Store</h1>
          </Nav.Link>
          <Nav.Link to="/about " as={NavLink}>
            <h1 className="display-1 "> About</h1>
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "5rem ", height: "5rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <div
              className="rounded-circle, bg-danger d-flex justfy-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                transform: "translate(25% , 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </Navbarbs>
  );
}
