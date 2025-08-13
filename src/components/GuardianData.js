const GuardianData = () => {
  const person = [
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, Othertown, USA",
      relationship: "Mother",
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "555-555-5555",
      address: "789 Oak St, Sometown, USA",
      relationship: "Father",
    },
  ];
  return (
    <div>
      <h2>Guardian Data</h2>
      <ul>
        {person.map((guardian, index) => (
          <li key={index}>
            {guardian.name} - {guardian.relationship}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GuardianData;
