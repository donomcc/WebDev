import React, { useState, useEffect } from "react";

function App() {
  const [values, setValues] = useState({
    totalBill: "",
    totalPeople: "",
    totalTip: "",
  });

  const [perPersonAmount, setPerPersonAmount] = useState<number>(0);

  const eventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const newValue = e.target.value;

    setValues((prevValues) => ({
      ...prevValues,
      [value]: newValue,
    }));
  };

  useEffect(() => {
    const { totalBill, totalTip, totalPeople } = values;

    if (!totalBill || !totalTip || !totalPeople || Number(totalPeople) === 0) {
      setPerPersonAmount(0);
      return;
    }

    const bill = parseFloat(totalBill);
    const tip = parseFloat(totalTip);
    const people = parseInt(totalPeople, 10);

    const totalWithTip = bill + tip;
    const amountPerPerson = totalWithTip / people;

    setPerPersonAmount(parseFloat(amountPerPerson.toFixed(2)));
  }, [values]);

  return (
    <>
      <div className="card">
        <div className="container">
          <div className="title">
            <h1>Bill Splitter</h1>
          </div>
          <div className="input">
            <form>
              <div className="bills">
                <label className="billsLabel" htmlFor="total">
                  Total Bill
                </label>
                <i className="fa-solid fa-dollar-sign"></i>
                <input
                  type="text"
                  name="total"
                  value={values.totalBill}
                  onChange={(e) => eventHandler(e, "totalBill")}
                />
              </div>

              <div className="tip">
                <label className="tipLabel" htmlFor="tip">
                  Tip Percentage
                </label>
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <input
                  type="text"
                  name="tip"
                  value={values.totalTip}
                  onChange={(e) => eventHandler(e, "totalTip")}
                />
              </div>
              <div className="people">
                <label className="peopleLabel" htmlFor="people">
                  Number of People
                </label>
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="people"
                  value={values.totalPeople}
                  onChange={(e) => eventHandler(e, "totalPeople")}
                />
              </div>
            </form>
          </div>
          <div className="results">
            <h2>Amount Per Person: ${perPersonAmount}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
