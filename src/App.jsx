import Restaurants from './Restaurants';

export default function App() {
  const restaurants = [
    {
      id: 1,
      title: '김밥제국',
      category: '분식',
      address: '서울시 강남구',
    },
  ];

  return (
    <div>
      <h1>Restaurant</h1>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
