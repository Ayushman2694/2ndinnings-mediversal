import React, { useEffect } from "react";
import {
  Users,
  FileText,
  Activity,
  Bell,
  Clipboard,
  TrendingUp,
  AlertTriangle,
  LogOut,
} from "lucide-react";
import { useAllPatient } from "../query/useAllPatient";
import { useGetAllAssignment } from "../query/useGetAllAssignment";
import { useAllStaff } from "../query/useAllStaff";
import { useNavigate } from "react-router-dom";
import logout from "../services/auth";
// import { requestPermission } from "../services/firebase";

const DashboardCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
    <div className="rounded-full bg-green-100 p-3 mr-4">
      <Icon className="text-green-600" size={24} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-green-800">{value}</p>
      {trend && (
        <p
          className={`text-sm ${trend > 0 ? "text-green-600" : "text-red-600"}`}
        >
          {/* {trend > 0 ? (
            <TrendingUp size={16} className="inline mr-1" />
          ) : (
            <TrendingUp
              size={16}
              className="inline mr-1 transform rotate-180"
            />
          )} */}
          <p
            className={`text-sm ${
              trend > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend > 0 ? (
              <TrendingUp size={16} className="inline mr-1" />
            ) : (
              <TrendingUp
                size={16}
                className="inline mr-1 transform rotate-180"
              />
            )}
            {Math.abs(trend)}% from last month
          </p>
        </p>
      )}
    </div>
  </div>
);

const QuickActionButton = ({ label, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 w-full"
  >
    <Icon className="mr-2" size={20} />
    {label}
  </button>
);

const RecentActivityItem = ({ title, description, time }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 mb-2">
    <h4 className="font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
    <p className="text-xs text-gray-500 mt-1">{time}</p>
  </div>
);

const AlertItem = ({ message, type }) => (
  <div
    className={`rounded-lg p-4 mb-2 ${
      type === "warning"
        ? "bg-yellow-100 text-yellow-800"
        : "bg-red-100 text-red-800"
    }`}
  >
    <div className="flex items-center">
      <AlertTriangle size={20} className="mr-2" />
      <p>{message}</p>
    </div>
  </div>
);

export default function AdminDashboardView() {
  const navigate = useNavigate();
  const { isLoading, allPatient: patients } = useAllPatient();
  const { isLoading: loadingStaff, allStaff } = useAllStaff();
  const { isLoading: loadingAssignments, assignments } = useGetAllAssignment();

  const userData = JSON.parse(localStorage.getItem("userData")) || null;

  // useEffect(() => {
  //   const handleRequestPermission = async () => {
  //     const result = await requestPermission(userData._id);
  //     console.log(result);
  //     if (result === "not_granted") {
  //       navigate("/no-permission");
  //     }
  //   };

  //   handleRequestPermission(); // call the async function
  // }, [userData._id, navigate]);

  if (isLoading || loadingStaff || loadingAssignments) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-green-50">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-green-500"></div>
        <span className="ml-2 text-green-800">Loading...</span>
      </div>
    );
  }

  const completedAssignments = assignments.filter(
    (assignment) => assignment.status === "Completed"
  );
  const notCompletedAssignments = assignments.filter(
    (assignment) => assignment.status === "Not Completed"
  );

  const currentDate = new Date();
  const startOfThisMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const startOfLastMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );

  // for patients
  const patientsThisMonth = patients.filter((patient) => {
    const createdAt = new Date(patient.createdAt);
    return createdAt >= startOfThisMonth;
  });
  const patientsLastMonth = patients.filter((patient) => {
    const createdAt = new Date(patient.createdAt);
    return createdAt >= startOfLastMonth && createdAt < startOfThisMonth;
  });

  const increaseInPatients =
    patientsThisMonth.length - patientsLastMonth.length;

  // Calculate the percentage increase in patients
  const percentageIncreaseInPatients =
    patientsLastMonth.length === 0
      ? 100
      : (increaseInPatients / patientsLastMonth.length) * 100;

  // for  staff

  const staffsThisMonth = allStaff.filter((staff) => {
    const createdAt = new Date(staff.createdAt);
    return createdAt >= startOfThisMonth;
  });
  const staffsLastMonth = allStaff.filter((staff) => {
    const createdAt = new Date(staff.createdAt);
    return createdAt >= startOfLastMonth && createdAt < startOfThisMonth;
  });

  const increaseInStaffs = staffsThisMonth.length - staffsLastMonth.length;

  // Calculate the percentage increase in patients
  const percentageIncreaseInStaffs =
    staffsLastMonth.length === 0
      ? 100
      : (increaseInStaffs / staffsLastMonth.length) * 100;

  return (
    <div className="bg-gray-100 min-h-screen ">
      <header className="bg-green-800 font-bold text-white text-2xl p-4 flex justify-between items-center">
        Admin Dashboard
        <div className="flex items-center space-x-4">
          <span className="text-sm">Welcome, {userData.name}</span>
          <LogOut
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              logout(userData._id);
              navigate("/");
            }}
          />
        </div>
      </header>

      <div className="bg-gray-100 min-h-screen p-6">
        <div className="bg-gray-100 min-h-screen p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <DashboardCard
              title="Total Members"
              value={`${patients.length}`}
              icon={Users}
              trend={percentageIncreaseInPatients}
            />
            <DashboardCard
              title="Active Staff"
              value={`${allStaff.length}`}
              icon={Users}
              trend={percentageIncreaseInStaffs}
            />
            <DashboardCard
              title="Reports This Month"
              value={`${completedAssignments.length}`}
              icon={FileText}
              trend={12.7}
            />
            <DashboardCard
              title="Pending Assignments"
              value={`${notCompletedAssignments.length}`}
              icon={Clipboard}
            />
          </div>

          {/* Quick Actions and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <QuickActionButton
                  label="Assign Care Manager To Member"
                  icon={Clipboard}
                  onClick={() => {
                    navigate("/admin-dashboard/assign-care-manager");
                  }}
                />
                <QuickActionButton
                  label="Add New Staff"
                  icon={Users}
                  onClick={() => {
                    navigate("/admin-dashboard/add-staff");
                  }}
                />

                <QuickActionButton
                  label="Assign Assessor"
                  icon={Clipboard}
                  onClick={() => {
                    navigate("/admin-dashboard/assign-assessor");
                  }}
                />
                <QuickActionButton
                  label="View Vitals"
                  icon={Activity}
                  onClick={() => {
                    navigate("/admin-dashboard/show-all-member");
                  }}
                />
                <QuickActionButton
                  label="Assign Home Care Staff"
                  icon={Clipboard}
                  onClick={() => {
                    navigate("/admin-dashboard/assign-home-care-staff");
                  }}
                />
                <QuickActionButton
                  label="View All Staff"
                  icon={Clipboard}
                  onClick={() => {
                    navigate("/admin-dashboard/view-all-staff");
                  }}
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Activity
              </h2>
              <RecentActivityItem
                title="New Member Registered"
                description="John Doe (72) joined Premium plan"
                time="2 hours ago"
              />
              <RecentActivityItem
                title="Staff Assignment"
                description="Nurse Sarah assigned to 3 new members"
                time="5 hours ago"
              />
              <RecentActivityItem
                title="Report Submitted"
                description="Monthly health report for Jane Smith"
                time="Yesterday"
              />
            </div>
          </div>

          {/* Alerts and Notifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Alerts & Notifications
            </h2>
            <AlertItem
              message="5 members have upcoming medication renewals"
              type="warning"
            />
            <AlertItem
              message="Urgent: 2 members missed their scheduled check-ups"
              type="error"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
