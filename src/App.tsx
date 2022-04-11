import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { PATHS } from "./const";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import SuggestionsPage from "./pages/Suggestions";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={PATHS.profile} element={<ProfilePage />} />
        <Route path={PATHS.suggestions} element={<SuggestionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
