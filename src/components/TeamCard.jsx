export default function TeamCard() {
  return (
    <div className="w-full bg-[#F5F5F5] rounded-lg shadow-md flex flex-col items-center justify-center space-y-4 text-center p-4">
      <img src="/assets/team-1-user-1.jpg" alt="team member" />
      <h3 className="text-xl font-semibold">John Doe</h3>
      <p className="text-gray-500">Web Developer</p>
      <div className="flex space-x-2 mt-2 px-10">
        <a href="#">
          <i className="fab fa-facebook text-blue"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram text-blue"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter text-blue"></i>
        </a>
      </div>
    </div>
  );
}
