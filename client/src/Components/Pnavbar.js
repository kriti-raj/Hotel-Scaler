import { Link } from "react-router-dom";

const Pnavbar = () => {
  return (
    <div>
      <div className="bg-gray-800 p-2 pl-8">
        <Link to="/" className="text-gray-300 hover:text-white">Admin Page</Link>
      </div>
    </div>
  );
};

export default Pnavbar;
