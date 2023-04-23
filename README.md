# Supriti-Vats_Front-End

#### Supriti Vats | 12007319 | supritivats123@gmail.com |

## EXPLAINATION OF THE LIST COMPONENT:
The React, useState, useEffect, memo, and useCallback are imported from the React library, and PropTypes is imported from the prop-types package.

The WrappedSingleListItem component is defined, which is responsible for rendering a single item in the list. It receives four props: index, isSelected, onClickHandler, and text. It renders an li element with a background color based on whether the item is selected or not. It also invokes the onClickHandler prop when clicked, passing in the item's index.

The SingleListItem component is a memoized version of the WrappedSingleListItem component, which means it will only re-render if its props change.

The WrappedListComponent component is defined, which is responsible for rendering the entire list. It receives one prop: items, an array of objects, each representing an item in the list. It initializes a state variable selectedIndex using the useState hook, which represents the currently selected item's index.

The handleClick function is defined using the useCallback hook, which updates the selectedIndex state variable when an item is clicked.

The WrappedListComponent component renders an unordered list (ul) with each item in the items array rendered as a SingleListItem component. It passes in the necessary props to each SingleListItem component, including the isSelected prop, which is determined based on whether the item's index matches the selectedIndex.

The WrappedListComponent component is memoized using the memo function, which means it will only re-render if its props change.

Finally, the List component is defined as a memoized version of the WrappedListComponent component, which will only re-render if its props change. The List component is then exported as the default export of the module.


## Total 6 Errors Found and Performed Optimization too


### Error 1

In the WrappedListComponent component, useState was used incorrectly and initial value given [] after correction. [setSelectedIndex,selectedIndex] changes to [selectedIndex, setSelectedIndex] As during destructuring the the current state resides first and then a function that updates the state.

incorrect one:

```
const [setSelectedIndex,selectedIndex] = useState();

```


correct should be:

```
const [selectedIndex, setSelectedIndex] = useState([]);
```

### Error 2
In the WrappedListComponent component, defaultProps for items should not be null. It should be:

incorrect:

```
items:null
```

correct: 

 ```
items: [                    
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
  ]
 ```


### Error 3

In the SingleListItem component, the isSelected prop is currently receiving the state variable selectedIndex, which is an object generated by invoking the useState hook. However, the isSelected prop ought to hold a boolean value that indicates whether the item is selected or not. 

incorrect:

```
isSelected={selectedIndex}
```

Therefore, it should be changed to:

```
isSelected={selectedIndex === index}
```

### Error 4

In the WrappedSingleListItem component, onClickHandler is being called with an argument (index). onClickHandler(index) changes to ()=>onClickHandler(index) because  to create a new function that will be executed later when the user clicks on the element, which will then invoke the onClickHandler function with the appropriate index argument.

incorrect one:

```
onClick={onClickHandler(index)}

```

correct one:

```
onClick={()=>onClickHandler(index)}
```


### Error 5

In the WrappedListComponent component, the propTypes for items is incorrectly defined. It sholud be arrayOf instead of array and shape instead of shapeOf

Incorrect:

```
WrappedListComponent.propTypes = {
  items: PropTypes.array(PropTypes.shapeOf({
    text: PropTypes.string.isRequired,
  })),
};
```


correct:

```
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      // ERROR  : Removing shapeOf to shape and array to arrayOf
      text: PropTypes.string,
    })
  ),
};
```



### Error 6

Removing useEffect for no use

```
useEffect(() => {
    setSelectedIndex(null);
}, []);
```

We can remove the above code.

 
# Code Output after removing the error

![AFTER ERROR FIXING](https://user-images.githubusercontent.com/97901522/233856290-2670eb71-f586-4edc-a8fc-96707a0afd62.png)



# Code Optimization

#### Before Optimization of code the WrappedSingleListItem renders multiple times when we click on the list item

![BEFORE OPTIMIZATION](https://user-images.githubusercontent.com/97901522/233856355-bf4ca13a-9ec7-4858-82b3-7fdbcaa698ea.png)



#### After Optimization of code the WrappedSingleListItem renders only 2 times when we click on the list item

![AFTER OPTMIZATION](https://user-images.githubusercontent.com/97901522/233856470-4b5e0420-8b48-407f-9288-2b6bfbdc0263.png)




