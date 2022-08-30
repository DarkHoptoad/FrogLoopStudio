import { Creations } from "./Components/Creations/Creations";
import { Interactive } from "./Components/Interactive/Interactive";
import { Footer } from "./Layout/Footer/Footer";
import { Header } from "./Layout/Header/Header";
// import { HeaderImg } from "./Layout/Header/HeaderImg";

function App() {
  return (
    <>
      {/* <HeaderImg /> */}
      <Header />
      <Interactive />
      <Creations />
      <Footer />
    </>
  );
}

export default App;
