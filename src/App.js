import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./common/ProtectedRoute";
import PageLayout from "./components/PageLayout";
import About from "./pages/About";
import BookList from "./pages/BookList";
import Dashboard from "./pages/Dashboard";
import Notice from "./pages/Notice";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="books" element={<BookList />} />
              <Route path="notice" element={<Notice />} />
            </Route>
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
