import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    option: '',
    complaint: '',
    appointment: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Mobile:
        <input type="tel" name="mobile" onChange={handleChange} />
      </label>
      <label>
        Option:
        <select name="option" onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value="complaint">Register a complaint</option>
          <option value="appointment">Book an appointment</option>
        </select>
      </label>
      {form.option === 'complaint' && (
        <label>
          Complaint:
          <textarea name="complaint" onChange={handleChange} />
        </label>
      )}
      {form.option === 'appointment' && (
        <label>
          Appointment:
          <input type="datetime-local" name="appointment" onChange={handleChange} />
        </label>
      )}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
