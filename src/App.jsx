/* filepath: c:\Users\tvc45\CoderStore\CoderStore\src\App.jsx */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainlayout from "./pages/Mainlayout";
import Contentpage from "./pages/Contentpage";
import Homepage from "./pages/Homepage";
import { AuthProvider } from "./context/Auth";
import AuthRequeired from "./routes/Authrequired.jsx";
import { Navigate } from "react-router-dom";
import Errorpage from "./pages/Errorpage.jsx";
import Detailpage from "./pages/Detailpage.jsx";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* public route */}
          <Route path="/" element={<Mainlayout children={<Homepage />} />} />

          {/* private route */}
          <Route
            path="/user"
            element={
              <AuthRequeired>
                <Mainlayout children={<Contentpage />} />
              </AuthRequeired>
            }
          />
          <Route
            path="/product/:id"
            element={
              <AuthRequeired>
                <Mainlayout children={<Detailpage />} />
              </AuthRequeired>
            }
          />
          {/* redirect and not found routes */}
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
