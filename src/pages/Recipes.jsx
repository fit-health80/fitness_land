import { useState } from 'react';

function Recipes() {
  const [selectedRecipe, setSelectedRecipe] =
    useState(null);

  const recipes = [
    {
      title: 'Chicken Power Bowl',

      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',

      calories: '520 kcal',
      protein: '45g',
      carbs: '40g',
      fats: '15g',

      description:
        'High protein chicken bowl with rice and vegetables.',

      ingredients: [
        '200g grilled chicken',
        '1 cup rice',
        'Mixed vegetables',
        'Olive oil',
        'Greek yogurt sauce',
      ],

      steps: [
        'Cook the rice.',
        'Grill the chicken.',
        'Prepare vegetables.',
        'Assemble bowl.',
        'Add sauce and serve.',
      ],
    },

    {
      title: 'Protein Pancakes',

      image:
        'https://images.unsplash.com/photo-1528207776546-365bb710ee93',

      calories: '430 kcal',
      protein: '32g',
      carbs: '38g',
      fats: '12g',

      description:
        'Healthy protein pancakes perfect for breakfast.',

      ingredients: [
        '2 eggs',
        '1 scoop protein powder',
        'Oats',
        'Banana',
        'Milk',
      ],

      steps: [
        'Blend ingredients.',
        'Heat non-stick pan.',
        'Cook pancakes.',
        'Flip carefully.',
        'Serve with fruits.',
      ],
    },

    {
      title: 'Salmon Rice Plate',

      image:
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288',

      calories: '580 kcal',
      protein: '48g',
      carbs: '42g',
      fats: '22g',

      description:
        'Omega-3 rich salmon meal for recovery and health.',

      ingredients: [
        '200g salmon',
        'Rice',
        'Broccoli',
        'Lemon',
        'Olive oil',
      ],

      steps: [
        'Bake salmon.',
        'Cook rice.',
        'Steam broccoli.',
        'Plate everything.',
        'Add lemon on top.',
      ],
    },
  ];

  return (
    <div className="recipes-page">
      <div className="container py-5">
        <h1 className="recipes-title">
          Healthy Premium Recipes
        </h1>

        <p className="recipes-subtitle">
          Fuel your body with elite nutrition
        </p>

        <div className="row g-4 mt-4">
          {recipes.map((recipe, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
            >
              <div className="recipe-card">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-image"
                />

                <div className="recipe-content">
                  <h2>{recipe.title}</h2>

                  <p className="recipe-description">
                    {recipe.description}
                  </p>

                  <div className="nutrition-grid">
                    <div>
                      <span>Calories</span>
                      <strong>
                        {recipe.calories}
                      </strong>
                    </div>

                    <div>
                      <span>Protein</span>
                      <strong>
                        {recipe.protein}
                      </strong>
                    </div>

                    <div>
                      <span>Carbs</span>
                      <strong>
                        {recipe.carbs}
                      </strong>
                    </div>

                    <div>
                      <span>Fats</span>
                      <strong>
                        {recipe.fats}
                      </strong>
                    </div>
                  </div>

                  <button
                    className="btn btn-lime w-100 mt-4"
                    onClick={() =>
                      setSelectedRecipe(recipe)
                    }
                  >
                    View Full Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedRecipe && (
          <div className="popup-overlay">
            <div className="recipe-popup">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="popup-image"
              />

              <h2 className="popup-recipe-title">
                {selectedRecipe.title}
              </h2>

              <p className="popup-description">
                {selectedRecipe.description}
              </p>

              <h4 className="text-lime mt-4">
                Ingredients
              </h4>

              <ul className="popup-list">
                {selectedRecipe.ingredients.map(
                  (ingredient, index) => (
                    <li key={index}>
                      ✓ {ingredient}
                    </li>
                  )
                )}
              </ul>

              <h4 className="text-lime mt-4">
                Preparation Steps
              </h4>

              <ol className="popup-list">
                {selectedRecipe.steps.map(
                  (step, index) => (
                    <li key={index}>
                      {step}
                    </li>
                  )
                )}
              </ol>

              <button
                className="btn btn-lime w-100 mt-4"
                onClick={() =>
                  setSelectedRecipe(null)
                }
              >
                Close Recipe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipes;