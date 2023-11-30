import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/pages/Landing";
import MapView from "./components/pages/MapView";
import RoundInfo from "./components/pages/RoundInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/round",
        element: <RoundInfo />,
    },
    {
        path: "/game",
        element: <MapView />,
    }
])

export default router;
