const EmailForm = ({ showEmailForm, value, setValue, setTempContactEmail }) => {
  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setTempContactEmail(value);
    setValue('');
  };

  return (
    <div className={`${showEmailForm ? '' : 'hidden'}`}>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={value}
          onChange={handleChange}
        />
        <button id="addEmail-btn" type="submit">
          Add Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
