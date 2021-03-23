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
            <b>Binary Search Tree(BST)</b>
          </h2>

          <h3>Definition:</h3>
          <Typography variant="body1" gutterBottom>
            The binary search tree (BST), also called an ordered or
            sorted binary tree, is a rooted binary tree whose internal nodes
            each store a key greater than all the keys in the node&#39;s left
            subtree and less than those in its right subtree.
          </Typography>
          <h3>Operations in BST:</h3>
          <h5>Searching: </h5>
          <p>
            Searching means finding or locating some specific element or node
            within a data structure. However, searching for some specific node
            in binary search tree is pretty easy due to the fact that, element
            in BST is stored in a particular order.
          </p>
          <Typography>
            <ul>
              <li>Compare the element with the root of the tree.</li>
              <li>
                If the item is matched then return the location of the node.
              </li>
              <li>
                Otherwise check if item is less than the element present on
                root, if so then move to the left sub-tree.
              </li>
              <li>If not, then move to the right sub-tree.</li>
              <li>Repeat this procedure recursively until match found.</li>
              <li>If element is not found then return NULL.</li>
            </ul>
          </Typography>

          <h5>Insertion: </h5>
          <p>
            Insert function is used to add a new element in a binary search tree
            at appropriate location. Insert function is to be designed in such a
            way that, it must node violate the property of binary search tree at
            each value.
          </p>
          <Typography>
            <ul>
              <li>Allocate the memory for tree.</li>
              <li>
                Set the data part to the value and set the left and right
                pointer of tree, point to NULL.
              </li>
              <li>
                If the item to be inserted will be the first element of the
                tree, then the left and right of this node will point to NULL.
              </li>
              <li>
                Else, check if the item is less than the root element of the
                tree, if this is true, then recursively perform this operation
                with the left of the root.
              </li>
              <li>
                If this is false, then perform this operation recursively with
                the right sub-tree of the root.
              </li>
            </ul>
          </Typography>

          <h5>Deletion</h5>
          <p>
            Delete function is used to delete the specified node from a binary
            search tree. However, we must delete a node from a binary search
            tree in such a way, that the property of binary search tree doesn't
            violate. There are three situations of deleting a node from binary
            search tree.
          </p>
          <Typography>
            <ul>
              <li>
                The node to be deleted is a leaf node (It is the simplest case;
                in this case, replace the leaf node with the NULL and simple
                free the allocated space.)
              </li>
              <li>
                The node to be deleted has only one child.(In this case, replace
                the node with its child and delete the child node, which now
                contains the value which is to be deleted. Simply replace it
                with the NULL and free the allocated space.)
              </li>
              <li>
                The node to be deleted has two children. (It is a bit complex
                case compare to other two cases. However, the node which is to
                be deleted is replaced with its in-order successor or
                predecessor recursively until the node value (to be deleted) is
                placed on the leaf of the tree. After the procedure, replace the
                node with NULL and free the allocated space.)
              </li>
            </ul>
          </Typography>

          <h3>Advantages:</h3>
          <Typography>
            <ol>
              <li>
                Searching become very efficient in a binary search tree since,
                we get a hint at each step, about which sub-tree contains the
                desired element.
              </li>
              <li>
                The binary search tree is considered as efficient data structure
                in compare to arrays and linked lists. In searching process, it
                removes half sub-tree at every step. Searching for an element in
                a binary search tree takes o(log2n) time. In worst case, the
                time it takes to search an element is o(n).
              </li>
              <li>
                It also speed up the insertion and deletion operations as
                compare to that in array and linked list.
              </li>
            </ol>
          </Typography>
          <h3>Disadvantages:</h3>
          <Typography>
            <ol>
              <li>
                Shape of the tree depends upon order of insertion and it can be
                degenerated.
              </li>
              <li>Searching takes long time.</li>
            </ol>
          </Typography>
          <h3>Complexity Analysis:</h3>
          <Typography>
            The time complexity of the binary search algorithm is{" "}
            <b>O(log n)</b>.
          </Typography>
        </div>
      </Container>
    </div>
  );
}
