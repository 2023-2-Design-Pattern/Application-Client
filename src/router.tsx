import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/pages/Landing";
import MapView from "./components/pages/MapView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/game",
        element: <MapView />,
    }
])

export default router;
