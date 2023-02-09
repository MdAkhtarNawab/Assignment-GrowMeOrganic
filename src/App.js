import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Warning from "./Components/Warning";
import ProtectedRoute from "./Routes/ProtectedRoutes";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          {/* <Route path='page2' element={<Page2/>} /> */}
          <Route
            path="page2"
            element={
              <ProtectedRoute>
                <Page2 />
              </ProtectedRoute>
            }
          />

          <Route path="warning" element={<Warning />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
