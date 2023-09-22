import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function CustomCard({
  CardTexto = "Miau miau miau miau",
  CardNombre = "Le Miau",
  Imagen = "https://i.pinimg.com/1200x/69/46/e5/6946e5c3d69fb51efc83f6c64785f25e.jpg",
  TagColor = "primary",
  TagTexto = "dos Miau",
}) {
  return (
    <>
      <Card className="custom-card">
        <Card.Img variant="top" src={Imagen} />
        <Card.Body>
          <Card.Title>{CardNombre}</Card.Title>
          <Card.Text>{CardTexto}</Card.Text>
        </Card.Body>
        <Tags TagColor={TagColor} TagTexto={TagTexto} />
      </Card>
    </>
  );
}

export default CustomCard;
