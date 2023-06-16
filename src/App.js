import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <MainNavigation />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/places/new" element={<NewPlace />}/>
            <Route path="/:userId/places" element={<UserPlaces />}/>
            
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
