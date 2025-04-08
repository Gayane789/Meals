
export function AboutPage() {
  return (
    <div className="AboutPage p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Our Food Project</h1>

      <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800">
        <p className="mb-4">
          Welcome to our food explorer app! 🍽️ Here, you can browse a wide variety of meals from around the world, categorized for your convenience.
        </p>
        <p className="mb-4">
          This project was created with love for food and curiosity for global cuisine. Each meal tells a story — of culture, flavor, and tradition.
        </p>
        <p className="mb-4">
          Our goal is to inspire users to try new dishes, learn interesting facts about food categories, and enjoy the beauty of culinary diversity.
        </p>
        <p className="mb-4">
          Whether you're a foodie, a home cook, or just exploring, we hope you enjoy using this app as much as we enjoyed creating it!
        </p>
      </div>

      {/* image */}
      <div className="max-w-xl mx-auto mt-8">
        <img 
          src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg" 
          alt="Delicious Meal"
          className="w-full rounded shadow-md"
        />
        <p className="text-center text-gray-500 mt-2">A sample meal from our collection</p>
      </div>
    </div>
  );
}
