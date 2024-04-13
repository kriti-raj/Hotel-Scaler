import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="text-center text-4xl m-10 p-10 font-semibold">
      <h1>OOPS!! Error Occurred!</h1>
      <h3 className="m-8">
        {err.status} {err.statusText}
      </h3>

      <Link to="/" className="border border-black bg-black text-white hover:text-slate-500 p-2 rounded-lg">Back to Home</Link>
    </div>
  );
};
export default Error;
