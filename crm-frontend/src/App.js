import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Entrypage } from "./page/entry/Entrypage";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboardpage from "./page/dashboardpage";
import AddTicket from "./page/new-ticket/AddTicket";
import TicketListpage from "./page/ticket-listing/TicketListpage";
import Ticket from "./page/ticket/ticketpage";
import Aboutus from "./page/aboutus";
import PrivateRoute from "./components/privateroute/PrivateRoute";

function App() {
  

  return (
    <div className="App">
    <Router>
      
        <Routes>
          <Route path="/" element={<Entrypage />} />

          {/* All the protected routes are wrapped in PrivateRoute */}
          <Route element={<PrivateRoute />}  />
            <Route path="/dashboard" exact element={<DefaultLayout><Dashboardpage /></DefaultLayout>}  />
            <Route path="/add-ticket" element={<DefaultLayout><AddTicket /></DefaultLayout>} />
            <Route path="/tickets" element={<DefaultLayout><TicketListpage /></DefaultLayout>} />
            <Route path="/aboutus" element={<DefaultLayout><Aboutus /></DefaultLayout>}  />
            <Route path="/ticket/:tId" element={<DefaultLayout><Ticket /></DefaultLayout>}  />
          <Route/>
        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
