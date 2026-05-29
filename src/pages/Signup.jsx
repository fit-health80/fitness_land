import { useState } from 'react';

function Signup() {

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

  const [message, setMessage] =
    useState('');

  const [success, setSuccess] =
    useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage(
        'Please fill all fields.'
      );

      setSuccess(false);

      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setMessage(
        'Passwords do not match.'
      );

      setSuccess(false);

      return;
    }

    if (
      formData.password.length < 6
    ) {
      setMessage(
        'Password must be at least 6 characters.'
      );

      setSuccess(false);

      return;
    }

    setMessage(
      'Account created successfully!'
    );

    setSuccess(true);

    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  return (
    <div className="signup-page d-flex justify-content-center align-items-center">

      <div className="signup-box">

        <h1 className="signup-title">
          Join Fitness Land
        </h1>

        <p className="signup-subtitle">
          Start your transformation
          today.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"

              className="form-control custom-input"

              value={formData.name}

              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email Address"

              className="form-control custom-input"

              value={formData.email}

              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"

              className="form-control custom-input"

              value={formData.password}

              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"

              placeholder="Confirm Password"

              className="form-control custom-input"

              value={
                formData.confirmPassword
              }

              onChange={handleChange}
            />
          </div>

          {message && (
            <div
              className={
                success
                  ? 'success-message'
                  : 'error-message'
              }
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-lime w-100 mt-3"
          >
            Create Account
          </button>

        </form>

        <p className="login-text mt-4">
          Already have an account?
          <span className="text-lime">
            {' '}Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Signup;