const carsDataApi = async () => {
  // const response = await fetch('https://drive-nest-server-p7yijc5fa-peyarafuls-projects.vercel.app/exploreCars');
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVICE_URL}/car`);
  const data = await response.json();
  return data;
};

export default carsDataApi;
