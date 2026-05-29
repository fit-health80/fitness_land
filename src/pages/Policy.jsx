import { useState } from 'react';
import {
  FaShieldAlt,
  FaLock,
  FaUserCheck,
  FaDumbbell,
} from 'react-icons/fa';

function Policy() {
  const [accepted, setAccepted] =
    useState(false);

  const policies = [
    {
      icon: <FaShieldAlt />,
      title: 'Privacy Protection',

      text:
        'Your personal information is securely stored and never shared with third parties.',
    },

    {
      icon: <FaLock />,
      title: 'Secure Data',

      text:
        'All account activity and personal data are protected with secure authentication systems.',
    },

    {
      icon: <FaUserCheck />,
      title: 'User Responsibility',

      text:
        'Users must provide accurate information and follow all platform guidelines responsibly.',
    },

    {
      icon: <FaDumbbell />,
      title: 'Fitness Disclaimer',

      text:
        'Fitness Land is educational only. Results depend on effort, consistency, and health conditions.',
    },
  ];

  return (
    <div className="policy-page">
      <div className="container py-5">

        <div className="policy-hero">
          <h1>
            Privacy & Policy
          </h1>

          <p>
            Your trust and security matter to us.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {policies.map((item, index) => (
            <div
              className="col-lg-6"
              key={index}
            >
              <div className="policy-card">
                <div className="policy-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="agreement-box mt-5">
          <h2>
            Terms Agreement
          </h2>

          <p>
            By continuing to use Fitness
            Land, you agree to our privacy
            policy, fitness disclaimer, and
            user terms.
          </p>

          <div className="agree-check">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() =>
                setAccepted(!accepted)
              }
            />

            <span>
              I agree to the policy terms
            </span>
          </div>

          <button
            className="btn btn-lime mt-4"
            disabled={!accepted}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Policy;