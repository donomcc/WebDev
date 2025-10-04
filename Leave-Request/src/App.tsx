import { useState } from "react";
import logo from "./assets/logo.png";
import Modal from "./components/Modal";

const INITIAL_FORM_STATE = {
  employeeName: "",
  employeeID: "",
  department: "Revenue",
  startDate: "",
  endDate: "",
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculatePTOHours = (start, end) => {
    // If dates are missing, return 0
    if (!start || !end) return 0;

    const startDate = new Date(start);
    const endDate = new Date(end);

    // Calculate the difference in time and convert to days
    // Add 1 day (86400000 ms) to include the end date in the count
    let totalDays =
      Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1;
    let businessDays = 0;

    // Loop through each day from start to end
    for (let i = 0; i < totalDays; i++) {
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + i);

      // Get the day of the week (0 = Sunday, 6 = Saturday)
      const dayOfWeek = currentDay.getDay();

      // Check if it's a weekday (Monday=1 to Friday=5)
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        businessDays++;
      }
    }

    // Return total hours (8 hours per business day)
    return businessDays * 8 + 8;
  };

  const ptoHours = calculatePTOHours(formData.startDate, formData.endDate);

  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <img src={logo} alt="" />
          <h1>Leave Request</h1>
        </div>
        <div className="card-body">
          <form className="pto-form">
            <div className="employee-name form-input">
              <label htmlFor="">Name: </label>
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                id="employeeName"
              />
            </div>
            <div className="employee-id form-input">
              <label htmlFor="">Empoyee ID: </label>
              <input
                type="text"
                name="employeeID"
                value={formData.employeeID}
                onChange={handleChange}
                id="employeeID"
              />
            </div>
            <div className="department form-input">
              <label htmlFor="">Department: </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                id="department"
              >
                <option value="Revenue">Revenue</option>
                <option value="Engineering">Engineering</option>
                <option value="Customer Experience">Customer Experience</option>
              </select>
            </div>
            <div className="start-date form-input">
              <label htmlFor="">Start Date: </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                id="startDate"
              />
            </div>
            <div className="end-date form-input">
              <label htmlFor="">End Date: </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                id="endDate"
              />
            </div>
          </form>
        </div>
        <div className="card-footer">
          <button onClick={() => setIsModalOpen(true)}>Review</button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={formData.employeeName}
        employeeId={formData.employeeID}
        department={formData.department}
        startDate={formData.startDate}
        endDate={formData.endDate}
        ptoHours={ptoHours}
      ></Modal>
    </>
  );
}

export default App;
