const Navbar = () => {
  return (
    <>
      <div className="bg-amber-300 w-[100%] h-20 px-20">
        <ul className="flex justify-between h-[100%] items-center text-xl font-bold">
          <li className="flex gap-3 cursor-pointer">
            <div>Image</div>
            <div>Title</div>
          </li>

          <li src="/" className="cursor-pointer">
            Home
          </li>

          <li className="flex gap-3 cursor-pointer ">
            <div>View Profile</div>
            <div>Logout</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
