import React, { useState, useEffect, memo, useCallback } from "react";
import PropTypes from "prop-types";

//This components has been modified by fixing 6 errors and did optimization too

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  console.log(" Rendering WrappedSingleListItem ");

  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={() => onClickHandler(index)} //ERROR 1 : onClickHandler(index) changes to ()=>onClickHandler(index) because  to create a new function that will be executed later when the user clicks on the element, which will then invoke the onClickHandler function with the appropriate index argument.
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool.isRequired, // to optimize
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component

const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState([]); // ERROR 2:  -> [setSelectedIndex,selectedIndex] changes to [selectedIndex, setSelectedIndex] AS during destructuring the The current state resides first and then a function that updates the state.

  // ERROR: 6 -> removing useEffect

  // useEffect(() => {
  //   setSelectedIndex(null);
  // }, []);

  // Before optimization: handelClick()

  // const handleClick = index => {
  //   setSelectedIndex(index);
  // };

  // optimized version of handleClick with use of useCallback

  const handleClick = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  console.log("Rendering WrappedListComponent");

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item, index) => (
        <SingleListItem
          key={item.id} // To optimize: I added key to avoid, warning: each child in a list should have a unique "key" prop.
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index} // ERROR 3: Changing {selectedIndex} to {selectedIndex === index} as isSelected returns a boolean
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      // ERROR 4 : Removing shapeOf to shape and array to arrayOf
      text: PropTypes.string,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: [
    // ERROR 5: Removing null and did modification as array of objects
    {
      id: 1,
      text: "MY NAME IS",
    },
    {
      id: 2,
      text: "SUPRITI VATS",
    },
    {
      id: 3,
      text: "ANS I AM EXCITED TO JOIN YOUR ESTEEMED ORGANIZATION",
    },
    {
      id: 4,
      text: "STEELEYE",
    },
  ],
};

const List = React.memo(WrappedListComponent);

export default List;
