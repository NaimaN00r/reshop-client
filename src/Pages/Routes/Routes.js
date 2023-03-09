import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Dashboard/AddProduct";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import DashboardLayout from "../../Dashboard/DashboardLayout/DashboardLayout";
import MyBuyers from "../../Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Dashboard/MyProduct/MyProduct";
import MywishList from "../../Dashboard/MyWishlist/MyWishlist";
import Payment from "../../Dashboard/Payment/Payment";
import Main from "../../Layout/Main";
import NotFound from "../../NotFound/NotFound";
import SubCategories from "../Categories/SubCategories";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoutes";
import SellerRoutes from "./SellerRoutes";


// import Blog from "../../Pages/Blog/Blog";
// import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
// import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
// import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
// import DashboardLayout from "../../Pages/Dashboard/DashboardLayout/DashboardLaout";
// import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
// import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
// import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
// import MywishList from "../../Pages/Dashboard/MywishList/MywishList";
// import Payment from "../../Pages/Dashboard/Payment/Payment";
// import CategoryCard from "../../Pages/Home/Categorie/Categories/CategoryCard";
// import SubCategories from "../../Pages/Home/Categorie/Categories/SubCategories";
// import Login from "../../Pages/Login/Login";
// import NotFound from "../../Pages/NotFound/NotFound";
// import Login from "../../Pages/Login/Login";
// import SignUp from "../../Pages/SignUp/SignUp";
// import AdminRoutes from "../AdminRoutes/AdminRoutes";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import SellerRoutes from "../SellerRoutes/SellerRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            // {
            //     path: '/blog',
            //     element: <Blog></Blog>
            // },
            {
                path:'/products/:title',
                element:<SubCategories></SubCategories>,
                loader: ({ params }) => fetch(`https://watch-box-serverside.vercel.app/products/${params.title}`)
               
            },
            // {
            //     path: '/appointment',
            //     // element: <Appointment></Appointment>
            
            // }
        ]
    },
    {
        path:"/*",
        element:<NotFound></NotFound>
    },
    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <MyAppointment></MyAppointment>
            // },
            {
                path: '/dashboard/addproduct',
                element:<SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myproduct',
                element:<SellerRoutes><MyProduct></MyProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myorder',
                element:<MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allsellers',
                element:<AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboard/mybuyers',
                element: <SellerRoutes><MyBuyers></MyBuyers></SellerRoutes>
            },
            {
                path: '/dashboard/mywishlist',
                element:<MywishList></MywishList>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://watch-box-serverside.vercel.app/bookings/${params.id}`)
            },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoute>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <AdminRoutes><Payment></Payment></AdminRoutes>,
            //     loader: ({params}) => fetch(`http://localhost:4500/bookings/${params.id}`)
            // },
        ]
    }
])

export default router;