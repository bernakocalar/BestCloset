import WorkWithUs from "../components/WorkWithUs";

export default function ContactPage() {
  const image = "/assets/womanblue.png";
  const image2 = "/assets/room.png";
  return (
    <section className="w-11/12 mx-auto">
      <div className="text-black flex flex-col items-center justify-center my-20 p-30 space-y-4">
        <h3 className="text-3xl">Get answers to all your questions.</h3>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md mt-4 border border-white">
          CONTACT OUR COMPANY
        </button>
        <div className="flex space-x-4 mt-4">
          <a href="#">
            <i className="fab fa-facebook text-gray text-4xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram text-gray text-4xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter text-gray text-4xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin text-gray text-4xl"></i>
          </a>
        </div>
      </div>
      <div
        className="my-20 h-[757px] bg-cover bg-center text-black flex justify-center items-center px-10 space-y-4"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="w-6/12 flex flex-col px-20 py-10 space-y-4">
          <h3 className="text-5xl">Questions & Answers</h3>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
          <button className="text-[#23A6F0]">CONTACT US</button>
        </div>
      </div>
      <div
        className="my-20 h-[757px] bg-cover bg-center text-white flex px-10"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="w-6/12 flex flex-col justify-center items-start px-20 py-10 space-y-4">
          <h3>CONTACT US</h3>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md mt-4 border border-white">
            CONTACT US
          </button>
        </div>
        <div></div>
      </div>
      <WorkWithUs />
    </section>
  );
}
