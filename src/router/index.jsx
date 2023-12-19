// import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
// import Home from "@/pages/Home"
// import Article from "@/pages/Article"
// import Publish from '@/pages/Publish'
import AuthRoute from "../components/AuthRoute";
import { lazy } from "react";
import { Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Article = lazy(() => import("@/pages/Article"));
const Publish = lazy(() => import("@/pages/Publish"));

const router = [
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="加载中">
            <Home />
          </Suspense>
        ), //<Home />
      },
      {
        path: "/article",
        element: (
          <Suspense fallback="加载中">
            <Article />
          </Suspense>
        ), //<Article />
      },
      {
        path: "/publish",
        element: (
          <Suspense fallback="加载中">
            <Publish />
          </Suspense>
        ), //<Publish />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <AuthRoute>
//         <Layout />
//       </AuthRoute>
//     ),
//     children: [
//       {
//         index: true,
//         element: (
//           <Suspense fallback="加载中">
//             <Home />
//           </Suspense>
//         ), //<Home />
//       },
//       {
//         path: "/article",
//         element: (
//           <Suspense fallback="加载中">
//             <Article />
//           </Suspense>
//         ), //<Article />
//       },
//       {
//         path: "/publish",
//         element: (
//           <Suspense fallback="加载中">
//             <Publish />
//           </Suspense>
//         ), //<Publish />
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

export default router;
