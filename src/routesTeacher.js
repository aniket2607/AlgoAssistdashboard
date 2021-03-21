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
import DashboardPage from "views/Teacher/TeacherDashboard/Dashboard.js";
import UserProfile from "views/Teacher/TeacherUserProfile/UserProfile";
import Leaderboard from "views/Leaderboard/Leaderboard.js";
import Subjects from "views/Subjects/Subjects.js";
import BubbleSort from "views/Subjects/Algorithm/BubbleSort/BubbleSort.js";
import SelectionSort from "views/Subjects/Algorithm/SelectionSort/SelectionSort.js";
import MergeSort from "views/Subjects/Algorithm/MergeSort/MergeSort.js";
import LinearSearch from "views/Subjects/Algorithm/LinearSearch/LinearSearch.js"
import BinarySearch from "views/Subjects/Algorithm/BinarySearch/BinarySearch.js"
import TeacherAssignment from "views/Teacher/TeacherAssignment/Assignment.js"
import Typography from "views/Typography/Typography.js";
import Playground from "views/Playground/Playground.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import SubmitAssignment from "components/Assignment/SubmitAssignment.js";
import StudentsReport from "views/Teacher/StudentsReport/StudentsReport";
import IndividualStudentReport from "views/Teacher/StudentsReport/IndividualStudentReport";
import AddAssignment from "components/Assignment/AddAssignmentPopUp";
import AddQuiz from "components/Assignment/AddQuiz";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/teacher"
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    icon: "content_paste",
    component: Leaderboard,
    layout: "/teacher"
  },
  {
    path: "/studentsReport",
    name: "Student's Report",
    icon: "content_paste",
    component: StudentsReport,
    layout: "/teacher"
  },
  {
    path: "/assignment",
    name: "Assignment",
    icon: "content_paste",
    component: TeacherAssignment,
    layout: "/teacher"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/teacher"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/teacher"
  },
  {
    path: "/playground",
    name: "Playground",
    icon: BubbleChart,
    component: Playground,
    layout: "/teacher"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/teacher"
  },
  {
    path: "/bubblesort",
    icon: "",
    component: BubbleSort,
    layout: "/teacher"
  },
  {
    path: "/selectionsort",
    icon: "",
    component: SelectionSort,
    layout: "/teacher"
  },
  {
    path: "/mergesort",
    icon: "",
    component: MergeSort,
    layout: "/teacher"
  },
  {
    path: "/linearsearch",
    icon: "",
    component: LinearSearch,
    layout: "/teacher"
  },
  {
    path: "/binarysearch",
    icon: "",
    component: BinarySearch,
    layout: "/teacher"
  },
  {
    path: "/bubblesort",
    icon: "",
    component: BubbleSort,
    layout: "/teacher"
  },
  {
    path: "/submitAssignment",
    icon: "",
    component: SubmitAssignment,
    layout: "/teacher"
  },
  {
    path: "/addAssignment",
    icon: "",
    component: AddAssignment,
    layout: "/teacher"
  },
  {
    path: "/addQuiz",
    icon: "",
    component: AddQuiz,
    layout: "/teacher"
  },
  {
    path: "/individualStudentReport",
    icon: "",
    component: IndividualStudentReport,
    layout: "/teacher"
  },
];

export default dashboardRoutes;
