import { Link } from "react-router-dom"

const NotFound = () => (
  <div className="p-8 text-center">
    <h1>404 - Not Found</h1>

    <p>The page you are looking for does not exist.</p>

    <p className="mt-2">
      Return to &nbsp;

      <Link to="/" className="underline text-purple-500">
        Home
      </Link>
    </p>
  </div>
)

export default NotFound
