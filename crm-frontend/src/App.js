import React from "react";
import './App.css';
import { Button } from "react-bootstrap";
import {Entrypage} from "./page/entry/Entrypage";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from './page/dashboardpage'
import AddTicket from "./page/new-ticket/AddTicket";
import TicketListpage from "./page/ticket-listing/TicketListpage";
import Ticket from "./page/ticket/ticketpage";

function App() {
  return (
    <div className="App">
    
    {/*<Entrypage/>*/}

    <DefaultLayout>
    {/*<Dashboard/>*/}
    {/*<AddTicket/>*/}
    {/* <TicketListpage/> */}
<Ticket />
    </DefaultLayout>
    
    </div>
  );
}

export default App;
