const PersonalData = () => {
  const personalInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    dob: "01-01-2000",
    courses: ["Course 1", "Course 2", "Course 3"],
    branch: "Computer Science",
    batch: "2023",
    profilepic: "https://via.placeholder.com/150",
    hostel: "Unit 3 Hostel",
    room: "118",
  };
  return (
    <div>
      <h2>Personal Data</h2>
      <ul>
        <li>Name: {personalInfo.name}</li>
        <li>Email: {personalInfo.email}</li>
        <li>Phone: {personalInfo.phone}</li>
        <li>Address: {personalInfo.address}</li>
        <li>Date of Birth: {personalInfo.dob}</li>
        <li>Courses: {personalInfo.courses.join(", ")}</li>
        <li>Branch: {personalInfo.branch}</li>
        <li>Batch: {personalInfo.batch}</li>
        <li>Hostel: {personalInfo.hostel}</li>
        <li>Room: {personalInfo.room}</li>
      </ul>
    </div>
  );
};
export default PersonalData;
