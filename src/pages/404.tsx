import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-9xl text-carrot font-light text-center">404</h1>
            <p className="font-bold text-center">The Page That You Looking For Does Not Exists Any More </p>
            <p className="text-center mt-1">Let's Find Some Foods</p>
            <div className="flex justify-around mt-4">
                <Link to='/' className="bg-carrot px-4 py-2 rounded shadow-2xl text-white">Home</Link>
                <Link to="/dashboard?dashboard" className="px-4 py-2 rounded shadow-2xl border border-carrot text-carrot">Dashboard</Link>
            </div>
        </div>
    );
}
 
export default ErrorPage;