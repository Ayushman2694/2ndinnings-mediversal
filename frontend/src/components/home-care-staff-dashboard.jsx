import React, { useEffect } from "react";
import {
  Calendar,
  CheckCircle,
  Clock,
  User,
  MapPin,
  Phone,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetAllAssignment } from "../query/useGetAllAssignment";
import logout from "../services/auth";
import { requestPermission } from "../services/firebase";

const VisitCard = ({
  name,
  address,
  phone,
  time,
  status,
  navigate,
  date,
  id,
}) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold text-green-800">{name}</h3>
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          status === "Upcoming"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {status}
      </span>
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-1">
      <MapPin className="w-4 h-4 mr-2" />
      {address}
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-2">
      <Phone className="w-4 h-4 mr-2" />
      {phone}
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-2">
      <Clock className="w-4 h-4 mr-2" />
      {time}
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-2">
      <Calendar className="w-4 h-4 mr-2" />
      {date}
    </div>
    {status === "Not Completed" ? (
      <button
        onClick={() => {
          navigate(`/homecare-dashboard/home-care-vitals/${id}`);
        }}
        className="mt-3 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
      >
        Start Visit
      </button>
    ) : (
      <button
        onClick={() => {
          navigate(`/homecare-dashboard/home-care-vitals-view/${id}`);
        }}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        See Report
      </button>
    )}
  </div>
);

export default function HomeCareStaffDashboard() {
  const navigate = useNavigate();
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

  if (loadingAssignments) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-green-50">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-green-500"></div>
        <span className="ml-2 text-green-800">Loading...</span>
      </div>
    );
  }

  const homeCareAssignments = assignments.filter(
    (assignment) =>
      assignment.role === "Home Care Staff" &&
      assignment.staff._id === userData._id
  );

  const completedhomeCareAssignments = homeCareAssignments.filter(
    (assignment) => assignment.status === "Completed"
  );
  const notCompletedhomeCareAssignments = homeCareAssignments.filter(
    (assignment) => assignment.status === "Not Completed"
  );

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">
          Home Care Dashboard
        </h1>
        <div className="flex items-center">
          <User className="w-5 h-5 text-green-600 mr-2" />

          <span className="text-green-800 mr-2">Welcome, {userData.name}</span>

          <LogOut
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              logout(userData._id);
              navigate("/");
            }}
          />
        </div>
      </header>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-800 mb-4">
          Today's Visits
        </h2>
        {notCompletedhomeCareAssignments.map((visit) => (
          <VisitCard
            key={visit._id}
            id={visit._id}
            name={visit.patient.fullName}
            address={visit.patient.address}
            phone={visit.patient.phone}
            time={visit.time}
            status={visit.status}
            navigate={navigate}
            date={visit.date}
          />
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-green-800 mb-4">
          Completed Visits
        </h2>

        {completedhomeCareAssignments.map((visit) => (
          <VisitCard
            key={visit._id}
            id={visit._id}
            name={visit.patient.fullName}
            address={visit.patient.address}
            phone={visit.patient.phone}
            time={visit.time}
            status={visit.status}
            navigate={navigate}
          />
        ))}
      </div>
    </div>
  );
}
