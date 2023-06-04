import { Link } from "react-router-dom";
import Checkoutpage from "../components/Checkoutpage";

import Checkoutpage2 from "../components/Checkoutpage2";

import AppStateProvider from "../providers/AppStateProvider";

export default function Checkout(props) {

  return (
    <header>
        <div className="header__container">
        <div className="title">CheckOut</div>
    
      <AppStateProvider>
      <Checkoutpage />
      <div className="title">Total</div>
      <Checkoutpage2 />
      <div className="btn__area2">
              <button claseeName="btn btn--secondary"
            style={{ marginRight: 10 }}
            >Payment</button>
              <Link to="/">
              <button claseeName="btn btn--secondary" style={{ marginTop: 10}}
            >Cancel</button>
  </Link>
          </div>
        
      
      </AppStateProvider>
    </div>
    </header>
  );
}
