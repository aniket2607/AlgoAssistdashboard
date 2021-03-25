import { Container } from "@material-ui/core";
import React from "react";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import image from "assets/img/LinearSearch1.png";

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
            <b>Linear Search</b>
          </h2>

          <h3>Definition:</h3>
          <Typography variant="body1" gutterBottom>
            A linear search or sequential search is a method for finding an
            element within a list. It sequentially checks each element of the
            list until a match is found or the whole list has been searched.
          </Typography>
          <h3>Steps:</h3>
          <Typography>
            <ul>
              <li>Find out the length of the list.</li>
              <li>Set counter to 0.</li>
              <li>Examine value held in the list at the counter position.</li>
              <li>
                Check to see if the value at that position matches the value
                searched for.
              </li>
              <li>If it matches, the value is found. End the search.</li>
              <li>
                If not, increment the counter by 1 and go back to step 3 until
                there are no more items to search.
              </li>
            </ul>
          </Typography>

          <img src={image} alt="Linear Search Explanation" />

          <h3>Advantages:</h3>
          <Typography>
            <ul>
              <li>
                With today's powerful computers, small to medium arrays can be
                searched relatively quickly.
              </li>
              <li>
                Unlike a binary search, linear searching does not require an
                ordered list.
              </li>
              <li>
                As the linear search does not require the list to be sorted,
                additional elements can be added and deleted. As other searching
                algorithms may have to reorder the list after insertions or
                deletions, this may sometimes mean a linear search will be more
                efficient.
              </li>
            </ul>
          </Typography>
          <h3>Disadvantages:</h3>
          <Typography>
            <ul>
              <li>
                Slow searching of large lists, due to this speed disadvantage is
                why other search methods have been developed.
              </li>
            </ul>
          </Typography>
          <h3>Complexity Analysis:</h3>
          <Typography>
            The time complexity of the above algorithm is <b>O(n)</b>.
          </Typography>
        </div>
      </Container>
    </div>
  );
}
