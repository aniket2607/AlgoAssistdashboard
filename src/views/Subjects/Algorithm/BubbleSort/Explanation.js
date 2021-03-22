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
            <b>Bubble Sort</b>
          </h2>

          <h3>Definition:</h3>
          <Typography variant="body1" gutterBottom>
            Bubble sort is a simple sorting algorithm. This algorithm is
            comparison based algorithm in which each pair of adjacent elements
            is compared and the elements are swapped if they are not in order.
          </Typography>
          <h3>Steps:</h3>
          <Typography>
            <ul>
              <li>First we will take starting two elements from the list.</li>
              <li>Then we will compare those elements.</li>
              <li>
                If these elements are found in unsorted order we will sort them.
              </li>
              <li>Else we will compare next to elements.</li>
              <li>
                We will repeat previous steps until we get our sorted array.
              </li>
            </ul>
          </Typography>
          <h3>Example:</h3>
          <pre>
            <h5>First Pass:</h5>
            ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first
            two elements, and swaps since 5 > 1
            <br />( 1 5 4 2 8 ) –> ( 1 4 5 2 8 ), Swap since 5 > 4 <br />( 1 4 5
            2 8 ) –> ( 1 4 2 5 8 ), Swap since 5 > 2 <br />( 1 4 2 5 8 ) –> ( 1
            4 2 5 8 ), Now, since these elements are already in order (8 > 5),
            algorithm does not swap them. <br />
            <br />
            <h5>Second Pass:</h5>( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) ( 1 4 2 5 8 ) –>
            ( 1 2 4 5 8 ), Swap since 4 > 2 <br />( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ){" "}
            <br />( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br />
            Now, the array is already sorted, but our algorithm does not know if
            it is completed. <br />
            The algorithm needs one whole pass without any swap to know it is
            sorted. <br />
            <br />
            <h5>Third Pass:</h5>( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br />( 1 2 4 5 8
            ) –> ( 1 2 4 5 8 ) <br />( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) <br />( 1 2
            4 5 8 ) –> ( 1 2 4 5 8 )
          </pre>
          <h3>Advantages:</h3>
          <Typography>
            <ol>
              <li>
                Bubble sort would need lesser memory then other sorting
                techniques.
              </li>
              <li>Even Noob Programmers can understand it</li>
            </ol>
          </Typography>
          <h3>Disadvantages:</h3>
          <Typography>
            <ol>
              <li>
                The algorithm will be slowest when the array is sorted by in
                reverse
              </li>
              <li>Its, time complexity is O(n^2), which is shit</li>
              <li>
                When you have very large items then, it sucks even more as it
                becomes even more slow thanks to O(n2)
              </li>
              <li>Best Case : O(n), when its already sorted</li>
            </ol>
          </Typography>
          <h3>Complexity Analysis:</h3>
          <Typography>
            Worst and Average Case Time Complexity: <b>O(n*n)</b> <br />
            Best Case Time Complexity: <b>O(n)</b>
          </Typography>
        </div>
      </Container>
    </div>
  );
}
