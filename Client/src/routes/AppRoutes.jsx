// import { Routes, Route } from "react-router-dom";
// import Login from "../pages/Auth/Login";
// import Home from "../pages/Auth/Home"
// import PrivateRoute from "./PrivateRoute";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route
//         path="/home"
//         element={
//           <PrivateRoute>
//             <Home />
//           </PrivateRoute>
//         }
//       />
//     </Routes>
//   );
// };

// export default AppRoutes;





import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Home from "../pages/Auth/Home";
import EditProfile from "../components/profile/EditProfile";
import ProfilePage from "../components/profile/ProfilePage";
import Settings from "../pages/settings/Settings";


const AppRoutes = () => {
  return (
<Routes>
      <Route path="/login" element={<Login />} />

      {/* MAIN CHAT ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/chat/:id" element={<Home />} />

      {/* PROFILE */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;