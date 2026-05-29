import {
  FaDumbbell,
  FaFire,
  FaAppleAlt,
  FaHeartbeat,
  FaArrowRight,
  FaStar,
} from 'react-icons/fa';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      icon: <FaFire />,
      title: 'Fat Loss',
      text:
        'Burn fat with structured training and smart nutrition plans.',
    },

    {
      icon: <FaDumbbell />,
      title: 'Muscle Gain',
      text:
        'Build strength and size using professional workout systems.',
    },

    {
      icon: <FaAppleAlt />,
      title: 'Nutrition',
      text:
        'Healthy recipes and calorie tracking for every fitness goal.',
    },

    {
      icon: <FaHeartbeat />,
      title: 'Healthy Lifestyle',
      text:
        'Improve energy, confidence, recovery, and daily performance.',
    },
  ];

  const stats = [
    {
      number: '15K+',
      label: 'Active Members',
    },

    {
      number: '250+',
      label: 'Workout Plans',
    },

    {
      number: '120+',
      label: 'Healthy Recipes',
    },

    {
      number: '4.9',
      label: 'Average Rating',
    },
  ];

  return (
    <div>

      {/* HERO */}

      <section className="modern-hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                }}
              >

                <div className="hero-badge">
                  <FaStar />
                  #1 Fitness Platform
                </div>

                <h1 className="modern-title">
                  Transform Your Body.
                  <br />
                  Build Your Future.
                </h1>

                <p className="modern-subtitle">
                  Premium workout programs,
                  nutrition systems, and
                  professional coaching for
                  people serious about
                  fitness.
                </p>

                <div className="hero-buttons">

                  <Link
                    to="/programs"
                    className="btn btn-lime btn-lg"
                  >
                    Explore Programs
                  </Link>

                  <Link
                    to="/recipes"
                    className="hero-outline-btn"
                  >
                    View Recipes
                  </Link>

                </div>

              </motion.div>

            </div>

            <div className="col-lg-6">

              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                }}

                transition={{
                  duration: 0.8,
                }}

                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"

                className="hero-image"

                alt=""
              />

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="container">

          <div className="row g-4">

            {stats.map((item, index) => (

              <div
                className="col-md-3"
                key={index}
              >

                <div className="stat-box">

                  <h2>{item.number}</h2>

                  <p>{item.label}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features-section">

        <div className="container">

          <div className="section-heading">

            <h2>
              Why Choose Fitness Land
            </h2>

            <p>
              Everything you need for your
              fitness journey in one place.
            </p>

          </div>

          <div className="row g-4 mt-2">

            {features.map((item, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
              >

                <motion.div
                  whileHover={{
                    y: -10,
                  }}

                  className="feature-card"
                >

                  <div className="feature-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </motion.div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-box">

            <h2>
              Ready To Start Your
              Transformation?
            </h2>

            <p>
              Join thousands of people
              building stronger bodies and
              healthier lifestyles.
            </p>

            <Link
              to="/signup"
              className="btn btn-lime btn-lg mt-3"
            >
              Join Now
              <FaArrowRight className="ms-2" />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;