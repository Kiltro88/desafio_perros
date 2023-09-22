import Badge from "react-bootstrap/Badge";

function Tags({ TagTexto = "Un Miau", TagColor = "primary" }) {
  return (
    <>
      <Badge bg={TagColor}>{TagTexto}</Badge>
    </>
  );
}

export default Tags;
