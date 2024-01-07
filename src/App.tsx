import React from "react";

import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ViewForm from "./components/ViewForm";
import CreateForm from "./components/CreateForm";
import Home from "./components/Home";
import EditForm from "./components/EditForm";

/* 
routes :-

/ --> displays all forms with title 
/form/create --> user can create forms
/form/id/edit  --> edit the form 
/form/id --> user can view the form
*/
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/create" element={<CreateForm />} />
          <Route path="/form/:id" element={<ViewForm />} />
          <Route path="/form/:id/edit" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
