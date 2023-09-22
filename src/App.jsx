import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import CustomCard from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header titulo="Adopta un perrito" />
      </div>
      <div className="card-container">
        <CustomCard
          CardNombre="Bartolo"
          CardTexto="Lleno de energia y listo para jugar."
          Imagen="https://cdn.pixabay.com/photo/2017/08/22/23/45/husky-2671006_1280.jpg"
          TagColor="success"
          TagTexto="Husky"
        />
        <CustomCard
          CardNombre="Messi"
          CardTexto="Es jugueton, amigable y se lleva bien con los niños."
          Imagen="https://cdn.pixabay.com/photo/2016/02/25/15/52/dog-1222370_1280.jpg"
          TagColor="primary"
          TagTexto="Bobtail"
        />
        <CustomCard
          CardNombre="Gohan"
          CardTexto="Un perro de tamaño mediano con un corazon gigante."
          Imagen="https://cdn.pixabay.com/photo/2020/06/04/01/01/shar-pei-5256832_1280.jpg"
          TagColor="danger"
          TagTexto="Shar Pei"
        />
        <CustomCard
          CardNombre="Princesa"
          CardTexto="Es una compañera leal y cariñosa que adora los mimos y los abrazos."
          Imagen="https://cdn.pixabay.com/photo/2014/12/21/12/13/dog-574873_960_720.jpg"
          TagColor="warning"
          TagTexto="Beagle"
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
