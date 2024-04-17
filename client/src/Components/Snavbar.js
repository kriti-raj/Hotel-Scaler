import { Link } from "react-router-dom";

const navs = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Create Booking",
    href: "/create",
  },
  {
    name: "View Booking",
    href: "/view",
  },
];

const Snavbar = () => {
  return (
    <div className="bg-red-100">
      <div className="py-2">
        {navs.map((nav, index) => (
          <Link
            key={index}
            to={nav.href}
            className="p-6 mx-2 font-semibold text-gray-700 hover:text-red-700"
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Snavbar;