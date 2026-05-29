import { useState } from 'react';

function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      title: 'Fat Loss',
      duration: '12 Weeks',
      level: 'Intermediate',
      price: '$49',
      description:
        'Designed to maximize fat burning while preserving muscle mass through intense workouts and smart nutrition.',

      features: [
        '5 workouts per week',
        'Custom meal guide',
        'Weekly progress tracking',
        'Cardio schedule',
        'Fat loss calculator',
      ],
    },

    {
      title: 'Muscle Gain',
      duration: '16 Weeks',
      level: 'Advanced',
      price: '$79',
      description:
        'High-volume hypertrophy training program focused on building serious size and strength.',

      features: [
        'Push Pull Legs split',
        'Bulking nutrition guide',
        'Strength progression system',
        'Recovery recommendations',
        'Protein calculator',
      ],
    },

    {
      title: 'Beginner Plan',
      duration: '8 Weeks',
      level: 'Beginner',
      price: '$29',
      description:
        'Perfect for complete beginners starting their fitness journey safely and effectively.',

      features: [
        'Simple exercises',
        'Easy meal suggestions',
        'Beginner cardio',
        'Technique guidance',
        'Weekly checklists',
      ],
    },

    {
      title: 'Home Workout',
      duration: '10 Weeks',
      level: 'All Levels',
      price: '$39',
      description:
        'Train from home using bodyweight and minimal equipment while still achieving results.',

      features: [
        'No gym required',
        'Quick sessions',
        'HIIT training',
        'Mobility exercises',
        'Daily challenges',
      ],
    },

    {
      title: 'Maintenance',
      duration: 'Ongoing',
      level: 'Intermediate',
      price: '$35',
      description:
        'Maintain your physique and healthy lifestyle with balanced training and nutrition.',

      features: [
        'Balanced workouts',
        'Lifestyle nutrition',
        'Flexible schedule',
        'Wellness tracking',
        'Energy optimization',
      ],
    },

    {
      title: 'Advanced Athlete',
      duration: '20 Weeks',
      level: 'Elite',
      price: '$99',
      description:
        'Extreme performance program for experienced athletes wanting maximum results.',

      features: [
        'Advanced split',
        'Performance analytics',
        'Explosive training',
        'Recovery protocols',
        'Competition prep',
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="program-title">
        Elite Fitness Programs
      </h1>

      <p className="program-subtitle">
        Choose the perfect plan for your goals
      </p>

      <div className="row g-4 mt-4">
        {programs.map((program) => (
          <div className="col-lg-4 col-md-6" key={program.title}>
            <div className="program-card">
              <div className="program-top">
                <h2>{program.title}</h2>

                <span className="price">
                  {program.price}
                </span>
              </div>

              <div className="program-info">
                <span>{program.duration}</span>
                <span>{program.level}</span>
              </div>

              <p className="program-description">
                {program.description}
              </p>

              <button
                className="btn btn-lime w-100 mt-3"
                onClick={() =>
                  setSelectedProgram(program)
                }
              >
                View Full Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProgram && (
        <div className="popup-overlay">
          <div className="plan-popup">
            <h2 className="popup-title">
              {selectedProgram.title}
            </h2>

            <div className="popup-details">
              <span>
                {selectedProgram.duration}
              </span>

              <span>
                {selectedProgram.level}
              </span>

              <span>
                {selectedProgram.price}
              </span>
            </div>

            <p className="popup-description">
              {selectedProgram.description}
            </p>

            <h4 className="mt-4 text-lime">
              What You Get
            </h4>

            <ul className="feature-list">
              {selectedProgram.features.map(
                (feature, index) => (
                  <li key={index}>
                    ✓ {feature}
                  </li>
                )
              )}
            </ul>

            <button
              className="btn btn-lime w-100 mt-4"
              onClick={() =>
                setSelectedProgram(null)
              }
            >
              Close Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Programs;