import { Route, Routes } from "react-router-dom"
import AuthLayout from "./Components/auth/layout.jsx"
import AuthLogin from "./Pages/auth/login.jsx";
import AuthRegister from "./Pages/auth/register.jsx";
import AdminLayout from "./Components/Admin/AdminLayout.jsx";
import AdminDashboard from "./Pages/admin/dashboard.jsx";
import AdminProducts from "./Pages/admin/products.jsx";
import AdminFeatures from "./Pages/admin/features.jsx";
import AdminOrders from "./Pages/admin/orders.jsx";
// import

function App() {
  return (
    <>
      <div className=" flex flex-col overflow-hidden bg-white">
        <h1>Header Component</h1>
        <Routes>
          <Route path="/auth" element={<AuthLayout/>}>
            <Route path="register" element={<AuthRegister/>}/>
            <Route path="login" element={<AuthLogin/>}/>
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}
export default App;
