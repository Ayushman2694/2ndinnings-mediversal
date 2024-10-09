/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckCircle,
  Clock,
  User,
  MapPin,
  FileText,
  AlertTriangle,
  LogOut,
} from "lucide-react";

import { useGetAllAssignment } from "../query/useGetAllAssignment";
import logout from "../services/auth";

import { useNavigate } from "react-router-dom";
import { requestPermission } from "../services/firebase";

const VisitCard = ({ visit, onActionClick, navigate, activeTab }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold text-green-800">
        {visit.patient.fullName}
      </h3>
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          visit.status === "Not Completed"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {visit.status}
      </span>
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-1">
      <MapPin className="w-4 h-4 mr-2" />
      {visit.patient.address}
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-2">
      <Calendar className="w-4 h-4 mr-2" />
      {visit.date}
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-2">
      <Clock className="w-4 h-4 mr-2" />
      {visit.time}
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-3">
      <FileText className="w-4 h-4 mr-2" />
      {/* {assessmentType} Geriatric Assessment */}
      Geriatric Assessment
    </div>
    <button
      onClick={() => {
        activeTab === "assigned"
          ? navigate(
              `/assessor-dashboard/idian-geriatric-assessment-form/${visit._id}`
            )
          : navigate(
              `/assessor-dashboard/view-geriatic-assesment/${visit._id}`
            );
      }}
      className={`w-full py-2 rounded-md transition duration-300 flex items-center justify-center ${
        visit.status === "Not Completed"
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {visit.status === "Not Completed"
        ? "Start Assessment"
        : "View Assessment"}
    </button>
  </div>
);

export default function AssessorDashboard() {
  const [activeTab, setActiveTab] = useState("assigned");
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

  const handleActionClick = (visit) => {
    // Here you would navigate to the appropriate assessment form or view
    console.log(
      `${visit.status === "Assigned" ? "Starting" : "Viewing"} assessment for ${
        visit.name
      }`
    );
  };

  if (loadingAssignments) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-green-50">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-green-500"></div>
        <span className="ml-2 text-green-800">Loading...</span>
      </div>
    );
  }

  const assessorAssignments = assignments.filter(
    (assignment) =>
      assignment.role === "Assessor" && assignment.staff._id === userData._id
  );

  const completedAssignments = assessorAssignments.filter(
    (assignment) => assignment.status === "Completed"
  );
  const notCompletedAssignments = assessorAssignments.filter(
    (assignment) => assignment.status === "Not Completed"
  );

  // console.log(assessorAssignments);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <header className="flex justify-between items-center mb-6 ">
        <h1 className="text-2xl font-bold text-green-800">
          Assessor Dashboard
        </h1>
        <div className="flex items-center">
          <User className="w-5 h-5 text-green-600 mr-2" />

          <span className="text-green-800 mr-2">Welcome, {userData.name}</span>

          <LogOut
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              logout();
              navigate("/");
            }}
          />
        </div>
      </header>

      <div className="mb-6 flex">
        <button
          className={`flex-1 py-2 px-4 ${
            activeTab === "assigned"
              ? "bg-green-600 text-white"
              : "bg-green-100 text-green-800"
          } rounded-l-md`}
          onClick={() => setActiveTab("assigned")}
        >
          Assigned Visits
        </button>
        <button
          className={`flex-1 py-2 px-4 ${
            activeTab === "completed"
              ? "bg-green-600 text-white"
              : "bg-green-100 text-green-800"
          } rounded-r-md`}
          onClick={() => setActiveTab("completed")}
        >
          Completed Visits
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-green-800 mb-4">
          {activeTab === "assigned"
            ? "Upcoming Assessments"
            : "Recent Assessments"}
        </h2>
        {activeTab === "assigned"
          ? notCompletedAssignments.map((visit) => (
              <VisitCard
                key={visit.id}
                visit={visit}
                navigate={navigate}
                onActionClick={() => handleActionClick(visit)}
                activeTab={activeTab}
              />
            ))
          : completedAssignments.map((visit) => (
              <VisitCard
                key={visit.id}
                visit={visit}
                navigate={navigate}
                onActionClick={() => handleActionClick(visit)}
              />
            ))}
      </div>
    </div>
  );
}
