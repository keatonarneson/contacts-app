const Main = () => {
  return (
    <div className="main-container">
      <div className="alert-container"></div>

      <div className="form-container">
        <form>
          <label for="first-name">First Name</label>
          <br />
          <input
            type="text"
            id="first-name"
            name="first-name"
            value="First Name"
          />
        </form>
        <form>
          <label for="last-name">Last Name</label>
          <br />
          <input
            type="text"
            id="last-name"
            name="last-name"
            value="Last Name"
          />
        </form>
      </div>

      <br />

      <div className="email-container">
        <h6>Email</h6>
        <ul>
          <li>keaton@gmail.com</li>
          <li>arneson@gmail.com</li>
          <li>keaton@test.com</li>
        </ul>
      </div>

      <div className="button-container">
        <button id="delete-btn">Delete</button>
        <div className="button-group">
          <button id="cancel-btn">Cancel</button>
          <button id="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
