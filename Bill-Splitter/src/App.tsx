function App() {
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
                <input type="text" name="total" />
              </div>
              <div className="people">
                <label className="peopleLabel" htmlFor="people">
                  Number of People
                </label>
                <i className="fa-solid fa-user"></i>
                <input type="text" name="people" />
              </div>
              <div className="tip">
                <label className="tipLabel" htmlFor="tip">
                  Tip Percentage
                </label>
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <input type="text" name="tip" />
              </div>
            </form>
          </div>
          <div className="results">
            <h2>Results</h2>
            <h4>Amount Per Person: </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
