import { Container } from "@material-ui/core";
import React from "react";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import image from "assets/img/MergeSortExplanation.png";

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
            <b>Merge Sort</b>
          </h2>

          <h3>Definition:</h3>
          <Typography variant="body1" gutterBottom>
            The merge sort (also commonly spelled mergesort) is an efficient,
            general-purpose, comparison-based sorting algorithm. Most
            implementations produce a stable sort, which means that the order of
            equal elements is the same in the input and output. Merge sort is a
            divide and conquer algorithm.
          </Typography>
          <h3>Steps:</h3>
          <Typography>
            <ul>
              <li>
                If it is only one element in the list it is already sorted,
                return.
              </li>
              <li>
                Divide the list recursively into two halves until it can no more
                be divided.
              </li>
              <li>Merge the smaller lists into new list in sorted order.</li>
            </ul>
          </Typography>
          <img src={image} alt="Merge Sort Explanation" />
          <h3>Advantages:</h3>
          <Typography>
            <ol>
              <li>It can be applied to files of any size.</li>
              <li>
                Input during the run-creation step is sequential ==> Not much
                seeking.
              </li>
              <li>
                If heap sort is used for the in-memory part of the merge, its
                operation can be overlapped with I/O
              </li>
            </ol>
          </Typography>
          <h3>Disadvantages:</h3>
          <Typography>
            <ol>
              <li>Requires extra space » N</li>
              <li>Merge Sort requires more space than other sort.</li>
              <li>Merge sort is less efficient than other sort</li>
            </ol>
          </Typography>
          <h3>Complexity Analysis:</h3>
          <Typography>
            Time complexity of Merge Sort is <b>O(n*Log n)</b> in all the 3
            cases (worst, average and best) as merge sort always divides the
            array in two halves and takes linear time to merge two halves.
          </Typography>
        </div>
      </Container>
    </div>
  );
}
