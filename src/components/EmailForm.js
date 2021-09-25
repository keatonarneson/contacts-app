const EmailForm = ({
  showEmailForm,
  formValue,
  setFormValue,
  emailArray,
  setEmailArray,
}) => {
  const handleChange = e => {
    setFormValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEmailArray([...emailArray, formValue]);
    setFormValue('');
  };

  return (
    <div className={`${showEmailForm ? '' : 'hidden'}`}>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          value={formValue}
          onChange={handleChange}
        />
        <button
          id="addEmail-btn"
          type="submit"
          disabled={formValue.length <= 0}
        >
          Add Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
