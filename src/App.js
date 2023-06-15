import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <MainNavigation />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/places/new"></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
