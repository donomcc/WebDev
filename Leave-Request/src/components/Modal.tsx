import React, { type ReactNode } from "react";

interface ModalProps {
  open: boolean;
  name: string;
  employeeId: string;
  department: string;
  startDate: string;
  endDate: string;
  onClose: () => void;
  ptoHours: number;
}

export default function Modal({
  open,
  name,
  employeeId,
  department,
  startDate,
  endDate,
  ptoHours,
  onClose,
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="modal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h1>Review Your Request</h1>
          <h4>Name: {name}</h4>
          <h4>Employee ID: {employeeId}</h4>
          <h4>Department: {department}</h4>
          <h4>Start Date: {startDate}</h4>
          <h4>End Date: {endDate}</h4>
          <h4>Total PTO Used: {ptoHours} hours</h4>
        </div>
        {}
        <button onClick={onClose} style={{ top: "10px", right: "10px" }}>
          Back
        </button>
      </div>
    </div>
  );
}
