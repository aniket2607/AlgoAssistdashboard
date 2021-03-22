import { Container } from "@material-ui/core";
import React from "react";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  blue: {
    align: "center",
    size: 66,
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    width: theme.spacing(20),
    height: theme.spacing(20),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

var explain =
  "Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.The algorithm runs as follows: \n 1. Look at the first number in the list. 2. Compare the current number with the next number.3. Is the next number smaller than the current number? ...4. Move to the next number along in the list and make this the current number.5. Repeat from step 2 until the last number in the list has been reached.6. If any numbers were swapped, repeat again from step 1.7. If the end of the list is reached without any swaps being made, then the list is ordered and the algorithm can stop.";
var imagepath = "./assets/img/BubbleSortMainImage.png";
//___To show data________
function createData(algoName, algoExplanation, algoImage) {
  return { algoName, algoExplanation, algoImage };
}
const rows = [createData("Bubble Sort", explain, imagepath)];

export default function Explanation() {
  const classes = useStyles();
  return (
    <div>
      <Container fixed>
        <div>
          <br />
          <h2 style={{ color: blue[500] }}>
            <b>Binary Search</b>
          </h2>

          <h3>Definition:</h3>
          <Typography variant="body1" gutterBottom>
            Binary search is a fast search algorithm with run-time complexity of
            Ο (log n). This search algorithm works on the principle of divide
            and conquer. For this algorithm to work properly, the data
            collection should be in the sorted form.
          </Typography>
          <h3>Steps:</h3>
          <Typography>
            <ul>
              <li>Start searching data from middle of the list.</li>
              <li>If it is a match, return the index of the item, and exit.</li>
              <li>If it is not a match, probe position.</li>
              <li>
                Divide the list using probing formula and find the new middle.
              </li>
              <li>
                If data is greater than middle, search in higher sub-list.
              </li>
              <li>If data is smaller than middle, search in lower sub-list.</li>
              <li>Above steps are repeated until match. </li>
            </ul>
          </Typography>

          <h3>Advantages:</h3>
          <Typography>
            <ul>
              <li>
                It eliminates half of the list from further searching by using
                the result of each comparison.
              </li>
              <li>
                It indicates whether the element being searched is before or
                after the current position in the list.
              </li>
              <li>This information is used to narrow the search.</li>
              <li>
                For large lists of data, it works significantly better than
                linear search.
              </li>
            </ul>
          </Typography>
          <h3>Disadvantages:</h3>
          <Typography>
            <ul>
              <li>
                It employs recursive approach which requires more stack space.
              </li>
              <li>
                Programming binary search algorithm is error prone and
                difficult.
              </li>
              <li>
                The interaction of binary search with memory hierarchy i.e.
                caching is poor. (because of its random access nature)
              </li>
            </ul>
          </Typography>
          <h3>Complexity Analysis:</h3>
          <Typography>
            The time complexity of the binary search algorithm is{" "}
            <b>O(log n).</b>
          </Typography>
        </div>
      </Container>
    </div>
  );
}
