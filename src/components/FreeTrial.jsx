export default function FreeTrial() {
  return (
    <div className="text-black flex flex-col items-center justify-center my-20 p-30 space-y-4">
      <h3 className="text-3xl">Start your 14 days free trial</h3>
      <p>
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md mt-4 border border-white">
        TRY IT FREE NOW
      </button>
      <div className="flex space-x-4 mt-4">
        <a href="#">
          <i className="fab fa-facebook text-blue text-4xl"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram text-blue text-4xl"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter text-blue text-4xl"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin text-blue text-4xl"></i>
        </a>
      </div>
    </div>
  );
}
