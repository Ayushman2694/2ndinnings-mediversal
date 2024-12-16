import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

// Import all role-based routes
import AdminRoute from "./routes/Admin";
import AssessorRoute from "./routes/AssesorRoute";
import CareManagerRoute from "./routes/CareManagerRoute";
import HomeCareStaffRoute from "./routes/HomeCareStaffRoute";
import FrontDeskRoute from "./routes/MultiRoleRoutes";
import LoginPrivateRoute from "./routes/LoginPrivateRoute";

// Import components
import BanyanThemePageWithAdmin from "./components/second-innings-banyan-theme-with-admin";
import NewRegistration from "./components/second-innings-new-registration";
import AdminDashboardView from "./components/admin-dashboard-view";
import AssessorDashboard from "./components/assessor-dashboard";
import RevisedCareManagerDashboard from "./components/revised-care-manager-dashboard";
import HomeCareStaffDashboard from "./components/home-care-staff-dashboard";
import FrontDeskDashboard from "./components/second-innings-front-desk-dashboard";
import ShowAllPatient from "./UI/show-all-members";
import AdminShowAllPatient from "./UI/admin-show-all-member";
import ViewAllPlans from "./components/view-all-plans";
import VitalsRecordingScreen from "./components/home-care-vitals-recording-with-photos";
import StaffRegistration from "./components/staff-registration";
import HomeCareVitalDetails from "./components/home-care-vitail-detail";
import NotAuthorised from "./UI/NotAuthorised";
import PageNotFound from "./UI/PageNotFound";
import ViewMemberDetails from "./components/second-innings-member-details-with-benefit-tracking";
import IndianGeriatricAssessmentForm from "./components/indian-geriatric-assessment-form";
import SubmitReportView from "./components/care-manager-submit-report";
import ViewGeriatricReport from "./components/view-geriatric-report";
import ViewAllStaff from "./components/view-all-staff";
import SomeThingWentWrong from "./UI/SomeThingWentWrong";
import NoPermission from "./UI/NoPermission";
import ViewCallReports from "./components/view-call-reports";
import EditPatient from "./components/EditPatient";
import Index from "./landing_page/index";
import Plan from "./landing_page/Plan";
import Services from "./landing_page/Services";
import Commitment from "./landing_page/Commitment";
import BlogPage from "./landing_page/blog";
import ServicesPage from "./landing_page/main-services";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/not_Working" element={<SomeThingWentWrong />} />
          <Route path="/not-authorised" element={<NotAuthorised />} />
          <Route path="/no-permission" element={<NoPermission />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/login"
            element={
              <LoginPrivateRoute>
                <BanyanThemePageWithAdmin />
              </LoginPrivateRoute>
            }
          />
          <Route path="/" element={<Index />} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/commitment" element={<Commitment />} />

          {/* <Route
            path="/"
            element={
              <LoginPrivateRoute>
                <BanyanThemePageWithAdmin />
              </LoginPrivateRoute>
            }
          /> */}

          <Route
            path="admin-dashboard"
            element={
              <AdminRoute>
                <AdminDashboardView />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/add-staff"
            element={
              <AdminRoute>
                <StaffRegistration />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/view-all-staff"
            element={
              <AdminRoute>
                <ViewAllStaff />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/assign-care-manager"
            element={
              <AdminRoute>
                <AdminShowAllPatient role="Care Manager" />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/assign-assessor"
            element={
              <AdminRoute>
                <AdminShowAllPatient role="Assessor" />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/assign-home-care-staff"
            element={
              <AdminRoute>
                <AdminShowAllPatient role="Home Care Staff" />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/show-all-member"
            element={
              <AdminRoute>
                <ShowAllPatient role="admin-dashboard" />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/edit-patient/:id"
            element={
              <AdminRoute>
                <EditPatient role="admin-dashboard" />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/member-detail/:id"
            element={
              <AdminRoute>
                <ViewMemberDetails role="admin-dashboard" />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/home-care-vitals-view/:id"
            element={
              <AdminRoute>
                <HomeCareVitalDetails />
              </AdminRoute>
            }
          />
          <Route
            path="admin-dashboard/view-geriatic-assesment/:id"
            element={
              <AdminRoute>
                <ViewGeriatricReport />
              </AdminRoute>
            }
          />

          <Route
            path="frontdesk-dashboard"
            element={
              <FrontDeskRoute>
                <FrontDeskDashboard />
              </FrontDeskRoute>
            }
          />
          <Route
            path="frontdesk-dashboard/show-all-member"
            element={
              <FrontDeskRoute>
                <ShowAllPatient role="frontdesk-dashboard" />
              </FrontDeskRoute>
            }
          />
          <Route
            path="frontdesk-dashboard/member-detail/:id"
            element={
              <FrontDeskRoute>
                <ViewMemberDetails role="frontdesk-dashboard" />
              </FrontDeskRoute>
            }
          />
          <Route
            path="frontdesk-dashboard/edit-patient/:id"
            element={
              <FrontDeskRoute>
                <EditPatient role="frontdesk-dashboard" />
              </FrontDeskRoute>
            }
          />
          <Route
            path="frontdesk-dashboard/patient-new-registration"
            element={
              <FrontDeskRoute>
                <NewRegistration />
              </FrontDeskRoute>
            }
          />
          <Route
            path="frontdesk-dashboard/view-all-plans"
            element={
              <FrontDeskRoute>
                <ViewAllPlans />
              </FrontDeskRoute>
            }
          />

          <Route
            path="assessor-dashboard"
            element={
              <AssessorRoute>
                <AssessorDashboard />
              </AssessorRoute>
            }
          />
          <Route
            path="assessor-dashboard/idian-geriatric-assessment-form/:id"
            element={
              <AssessorRoute>
                <IndianGeriatricAssessmentForm />
              </AssessorRoute>
            }
          />
          <Route
            path="assessor-dashboard/view-geriatic-assesment/:id"
            element={
              <AssessorRoute>
                <ViewGeriatricReport />
              </AssessorRoute>
            }
          />

          <Route
            path="care-manager-dashboard"
            element={
              <CareManagerRoute>
                <RevisedCareManagerDashboard />
              </CareManagerRoute>
            }
          />
          <Route
            path="care-manager-dashboard/member-detail/:id"
            element={
              <CareManagerRoute>
                <ViewMemberDetails />
              </CareManagerRoute>
            }
          />
          <Route
            path="care-manager-dashboard/call-report/:id"
            element={
              <CareManagerRoute>
                <SubmitReportView />
              </CareManagerRoute>
            }
          />
          <Route
            path="care-manager-dashboard/view-call-report/:id"
            element={
              <CareManagerRoute>
                <ViewCallReports />
              </CareManagerRoute>
            }
          />

          <Route
            path="homecare-dashboard"
            element={
              <HomeCareStaffRoute>
                <HomeCareStaffDashboard />
              </HomeCareStaffRoute>
            }
          />
          <Route
            path="homecare-dashboard/home-care-vitals/:id"
            element={
              <HomeCareStaffRoute>
                <VitalsRecordingScreen />
              </HomeCareStaffRoute>
            }
          />
          <Route
            path="homecare-dashboard/home-care-vitals-view/:id"
            element={
              <HomeCareStaffRoute>
                <HomeCareVitalDetails />
              </HomeCareStaffRoute>
            }
          />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={false}
          style={{
            fontSize: "16px",
            maxWidth: "1000px",
            margin: "0 50px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "black",
          }}
          toastStyle={{
            backgroundColor: "white",
            color: "black",
            padding: "16px 24px",
          }}
        />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            duration: 5000, // Matches autoClose duration
            style: {
              fontSize: "16px",
              maxWidth: "700px",
              margin: "0 50px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
            success: {
              duration: 3000, // Specific for success
            },
            error: {
              duration: 5000, // Specific for error
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
