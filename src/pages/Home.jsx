
import Header from "../components/Header";
import Prototypes from "../components/Prototypes";
import Orders from "../components/Orders";
import Footer from "../components/Footer";

import AppStateProvider from "../providers/AppStateProvider";

export default function Home(props) {

    return (
    
      <div className="container">
      <AppStateProvider>
        <Header />
        <Prototypes />
      <Orders />
      <Footer />
     </AppStateProvider>
      </div>
    );
  }
  