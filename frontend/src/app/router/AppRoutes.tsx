import { Routes, Route } from "react-router-dom";

import ContactListPage from "../../pages/ContactListPage";
import ContactDetailPage from "../../pages/ContactDetailPage";
import ContactFormPage from "../../pages/ContactFormPage";
// import Login from "../../pages/Login";
// import ProtectedRoute from "../../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ContactListPage />
          </ProtectedRoute>
        }
      /> */}
      <Route path="/" element={<ContactListPage />} />

      <Route path="/contact/:id" element={<ContactDetailPage />} />

      <Route path="/create" element={<ContactFormPage />} />

      <Route path="/edit/:id" element={<ContactFormPage />} />
    </Routes>
  );
};

export default AppRoutes;
