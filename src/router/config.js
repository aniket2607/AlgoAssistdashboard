const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/student", "/student/dashboard"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/leaderboard"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/subjects"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/bubblesort"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/selectionsort"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/mergesort"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/linearsearch"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/binarysearch"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/bst"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/assignment"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/user"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/playground"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/notifications"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/student/typography"],
    exact: true,
    component: "Student",
  },
  {
    path: ["/teacher", "/teacher/dashboard"],
    exact: true,
    component: "Teacher",
  },
  {
    path: ["/teacher/leaderboard"],
    exact: true,
    component: "Teacher",
  },
  {
    path: ["/teacher/assignment"],
    exact: true,
    component: "Teacher",
  },
];

export default routes;