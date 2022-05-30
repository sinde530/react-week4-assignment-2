export default function Restaurants({ restaurants }) {
  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.title}
            |
            {restaurant.category}
            |
            {restaurant.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
