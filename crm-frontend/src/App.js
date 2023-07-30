import React from "react";
import './App.css';
import { Button } from "react-bootstrap";
import {Entrypage} from "./page/entry/Entrypage";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from './page/dashboardpage'
import AddTicket from "./page/new-ticket/AddTicket";

function App() {
  return (
    <div className="App">
    
    {/*<Entrypage/>*/}

    <DefaultLayout>
    {/*<Dashboard/>*/}
    <AddTicket/>
    </DefaultLayout>
    
    </div>
  );
}

export default App;
