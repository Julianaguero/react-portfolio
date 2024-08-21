import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages";
import Contact from "../pages/Contact";


// const basename = process.env.NODE_ENV === "production" ? "/" : "/";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [  
            {
                path: "/",
                element: <Home />
            } ,
         
        ]
    },
    {
        path: "/contact",
        element: <Contact />
    }
]
// , { basename }
);
