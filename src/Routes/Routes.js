import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
    { path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
    },
    {
      path:'/services',
      element:<Services></Services>
  },
  {
            path:'/projects',
            element:<Portfolio></Portfolio>
        },
      //   {
      //     path:'/projects',
      //     element:<Portfolio></Portfolio>
      // },
      ]
}
]) 