import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, Work, Contact, Resume } from "../pages";

const basename = process.env.NODE_ENV === "production" ? "https://julianaguero.netlify.app" : "/";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [  
            {
                path: "/",
                element: <Home />
            } ,
            {
                path: "/work",
                element: <Work />
            } ,
            {
                path: "/resume",
                element: <Resume />
            } ,
         
        ]
    },
    {
        path: "contact",
        element: <Contact />
    }
]
, { basename }
);
