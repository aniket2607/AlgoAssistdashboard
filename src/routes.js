/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Leaderboard from "views/Leaderboard/Leaderboard.js";
import Subjects from "views/Subjects/Subjects.js";
import BubbleSort from "views/Subjects/Algorithm/BubbleSort/BubbleSort.js";
import SelectionSort from "views/Subjects/Algorithm/SelectionSort/SelectionSort.js";
import MergeSort from "views/Subjects/Algorithm/MergeSort/MergeSort.js";
import LinearSearch from "views/Subjects/Algorithm/LinearSearch/LinearSearch.js"
import BinarySearch from "views/Subjects/Algorithm/BinarySearch/BinarySearch.js"
import BST from "views/Subjects/Algorithm/BST/BST.js"
import StudentAssignment from "views/StudentAssignment/StudentAssignment.js"
import Typography from "views/Typography/Typography.js";
import Playground from "views/Playground/Playground.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import SubmitAssignment from "components/Assignment/SubmitAssignment.js";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/student"
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    icon: "content_paste",
    component: Leaderboard,
    layout: "/student"
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: "content_paste",
    component: Subjects,
    layout: "/student"
  },
  {
    path: "/assignment",
    name: "Assignment",
    icon: "content_paste",
    component: StudentAssignment,
    layout: "/student"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/student"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/student"
  },
  {
    path: "/playground",
    name: "Playground",
    icon: BubbleChart,
    component: Playground,
    layout: "/student"
  },
  
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/student"
  },
  {
    path: "/bubblesort",
    icon: "",
    component: BubbleSort,
    layout: "/student"
  },
  {
    path: "/selectionsort",
    icon: "",
    component: SelectionSort,
    layout: "/student"
  },
  {
    path: "/mergesort",
    icon: "",
    component: MergeSort,
    layout: "/student"
  },
  {
    path: "/linearsearch",
    icon: "",
    component: LinearSearch,
    layout: "/student"
  },
  {
    path: "/binarysearch",
    icon: "",
    component: BinarySearch,
    layout: "/student"
  },
  {
    path: "/bubblesort",
    icon: "",
    component: BubbleSort,
    layout: "/student"
  },
  {
    path: "/bst",
    icon: "",
    component: BST,
    layout: "/student"
  },
  {
    path: "/submitassignment",
    icon: "",
    component: SubmitAssignment,
    layout: "/student"
  },
];

export default dashboardRoutes;
