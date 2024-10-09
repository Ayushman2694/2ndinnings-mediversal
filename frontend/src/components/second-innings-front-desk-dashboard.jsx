import React, { useEffect, useState } from "react";
import { Search, UserPlus, Users, LogOut } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import BackButton from "../UI/back-button";
import { useAllPatient } from "../query/useAllPatient";
import logout from "../services/auth";
import { requestPermission } from "../services/firebase";

const DashboardCard = ({
  title,
  icon: Icon,
  description,
  linkText,
  onClick,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h2 className="text-xl font-semibold text-green-800 mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <button
      onClick={onClick}
      className="mt-auto bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
    >
      {linkText}
    </button>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <div className="text-3xl font-bold text-green-600 mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default function FrontDeskDashboard() {
  const navigate = useNavigate();

  const { isLoading, allPatient: patients } = useAllPatient();
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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/patient/getAllPatient"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch patients");
        }
        const data = await response.json();
        setPatients(data.allPatient);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-green-50">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-green-500"></div>
        <span className="ml-2 text-green-800">Loading...</span>
      </div>
    );
  }

  function calculateDaysLeft(patients) {
    return patients.map((patient) => {
      const { createdAt, planDuration } = patient;
      const createdDate = new Date(createdAt);
      let planEndDate;

      if (planDuration === "monthly") {
        planEndDate = new Date(createdDate);
        planEndDate.setMonth(planEndDate.getMonth() + 1);
      } else if (planDuration === "yearly") {
        planEndDate = new Date(createdDate);
        planEndDate.setFullYear(planEndDate.getFullYear() + 1);
      }

      const currentDate = new Date();
      const timeDiff = planEndDate - currentDate;
      const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

      return {
        ...patient,
        daysLeft: daysLeft > 0 ? daysLeft : 0, // If the plan has already ended, return 0
      };
    });
  }
  const result = calculateDaysLeft(patients);

  const PlanOverInTenDaysPatients = result.filter(
    (patient) => patient.daysLeft < 10
  );

  const totalPatients = patients.length;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // 0-based index (0 = January, 11 = December)
  const currentYear = currentDate.getFullYear();

  // Filter patients added in the current month
  const newThisMonth = patients.filter((patient) => {
    const createdAtDate = new Date(patient?.createdAt);
    return (
      createdAtDate.getMonth() === currentMonth &&
      createdAtDate.getFullYear() === currentYear
    );
  });

  // Find the number of patients added this month
  const newThisMonthCount = newThisMonth.length;

  return (
    <>
      <div className="min-h-screen bg-green-50">
        <header className="bg-green-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">2nd Innings - Front Desk</h1>
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

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* <DashboardCard
              title="Search Members"
              icon={Search}
              description="Look up member information quickly and easily."
              linkText="Search Now"
              onClick={null}
            /> */}
            <DashboardCard
              title="New Registration"
              icon={UserPlus}
              description="Register new members and set up their profiles."
              linkText="Register"
              onClick={() => {
                navigate("/frontdesk-dashboard/patient-new-registration");
              }}
            />
            <DashboardCard
              title="View Member Details"
              icon={Users}
              description="Access comprehensive member information and benefits."
              linkText="View Members"
              onClick={() => {
                navigate("/frontdesk-dashboard/show-all-member");
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value={totalPatients} label="Total Members" />
            <StatCard value={newThisMonthCount} label="New This Month" />
            <StatCard value="null" label="Appointments Today" />
            <StatCard
              value={PlanOverInTenDaysPatients.length}
              label="Renewals Due"
            />
          </div>
        </main>
      </div>
    </>
  );
}
