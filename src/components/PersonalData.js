const PersonalData = () => {
  const data = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    dob: "1993-01-01",
    phone: "123-456-7890",
  };

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Age: {data.age}</p>
      <p>Date of Birth: {data.dob}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};

export default PersonalData;

export const personalData = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  dob: "1993-01-01",
  phone: "123-456-7890",
};
