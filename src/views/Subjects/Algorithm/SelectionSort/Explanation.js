import { Container } from "@material-ui/core";
import React from "react";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import image from "assets/img/SelectionSortExplanations.png";

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
            <b>Selection Sort</b>
          </h2>

          <h3>Definition:</h3>
          <Typography variant="body1" gutterBottom>
            Selection sort is a simple sorting algorithm. This sorting algorithm
            is an in-place comparison-based algorithm in which the list is
            divided into two parts, the sorted part at the left end and the
            unsorted part at the right end.
            <ul>
              <li>
                Initially, the sorted part is empty and the unsorted part is the
                entire list.
              </li>{" "}
              <li>
                The smallest element is selected from the unsorted array and
                swapped with the leftmost element, and that element becomes a
                part of the sorted array.
              </li>{" "}
              <li>
                This process continues moving unsorted array boundary by one
                element to the right.
              </li>
            </ul>
          </Typography>
          <h3>Steps:</h3>
          <Typography>
            <ul>
              <li>
                First we try to find the minimum element in the array and swap
                it with the element on the index 0.
              </li>
              <li>
                Then, we move to the second position and find the smallest
                element in the array excluding index 0 and swap it with the
                element at index 1.
              </li>
              <li>
                The above steps are then repeatedly followed until a sorted
                array is found.
              </li>
            </ul>
          </Typography>
          <img src={image} alt="Selection Sort Explanation" />

          <h3>Advantages:</h3>
          <Typography>
            <ol>
              <li>
                The main advantage of the selection sort is that it performs
                well on a small list
              </li>
              <li>
                Because it is an in-place sorting algorithm, no additional
                temporary storage is required beyond what is needed to hold the
                original list.
              </li>
              <li>
                Its performance is easily influenced by the initial ordering of
                the items before the sorting process
              </li>
            </ol>
          </Typography>
          <h3>Disadvantages:</h3>
          <Typography>
            <ol>
              <li>
                The primary disadvantage of the selection sort is its poor
                efficiency when dealing with a huge list of items.
              </li>
              <li>
                The selection sort requires n-squared number of steps for
                sorting n elements.
              </li>
            </ol>
          </Typography>
          <h3>Complexity Analysis:</h3>
          <Typography>
            Time complexity of selection sort is <b>Ο(n2)</b>
          </Typography>
        </div>
      </Container>
    </div>
  );
}
