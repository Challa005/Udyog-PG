import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "../components/Header/Header";
import Spinner from "../components/Spinner/Spinner";
import PaymentHeader from "../components/Header/PaymentHeader";
import PayoutHeader from "../components/Header/PayoutHeader";
import OurProductHeader from "../components/Header/OurProductHeader";

// Lazy imports
const HomePage = lazy(() => import("../pages/MainHomePage/MainHome"));
const PaymentMainHome = lazy(() => import("../pages/PaymentMainHome/PaymentMainHome"));
const PayoutMainHome = lazy(() => import("../pages/PayoutMainHome/PayoutMainHome"));
const OurProductMainHome = lazy(() => import("../pages/OurProductMainHome/OurProductMainHome")); 

// Loader component
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <Spinner size={50} />
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  // Conditional header based on current path
  const renderHeader = () => {
    if (location.pathname.startsWith("/paymentmainhome")) {
      return <PaymentHeader />;
    } else if (location.pathname.startsWith("/payoutmainhome")) {
      return <PayoutHeader />;
    } else if (location.pathname.startsWith("/ourproductmainhome")) {
      return <OurProductHeader />;
    }
    return <Header />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditional Header */}
      {renderHeader()}

      {/* Main Content Area */}
      <div className="flex-1">
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/paymentmainhome" element={<PaymentMainHome />} />
            <Route path="/payoutmainhome" element={<PayoutMainHome />} />
            <Route path="/ourproductmainhome" element={<OurProductMainHome />} />

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default AppRoutes;
