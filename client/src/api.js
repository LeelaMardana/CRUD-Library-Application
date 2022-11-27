export const getAllBooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json().then(data => console.log(data));
};
