import React from "react";
import './App.css';
import { Button } from "react-bootstrap";
import {Entrypage} from "./page/entry/Entrypage";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from './page/dashboardpage'

function App() {
  return (
    <div className="App">
    
    {/*<Entrypage/>*/}

    <DefaultLayout>
    <Dashboard/>
    </DefaultLayout>
    
    </div>
  );
}

export default App;
