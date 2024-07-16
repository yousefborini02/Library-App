import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = form;

    // Create a new User object
    const newUser = new User(name, email, password);

    // Fetch existing users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the array
    users.push(newUser);

    // Store updated users array back into localStorage
    localStorage.setItem('users', JSON.stringify(users));

   
    // Clear the form after submission
    setForm({ name: '', email: '', password: '' });

    // Navigate to home page after successful signup
    navigate('/');

    // Log the updated users array (for debugging purposes)
    console.log(users);
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <label>Enter your name: </label>
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />

      <label>Enter your email: </label>
      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <br />

      <label>Enter your password: </label>
      <input
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
