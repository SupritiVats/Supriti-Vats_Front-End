# Supriti-Vats_Front-End
<<<<<<< HEAD
 Steeleye assignment using ReactJs
=======

#### Supriti Vats | 12007319 | supritivats123@gmail.com |

## Total 6 Errors Found.


### Error 1

In the WrappedListComponent component, useState was used incorrectly.

incorrect one:

```
const [setSelectedIndex,selectedIndex] = useState([]);

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
      text: "I ",
    },
    {
      text: "Will",
    },
    {
      text: "Take",
    },
    {
      text: "Placement",
    },
    {
      text: "In",
    },
    {
      text: "SteelEye",
    },
  ]
 ```


### Error 3

In the SingleListItem component, the isSelected prop is being passed the state variable selectedIndex, which is an object returned by the useState hook. isSelected should be a boolean value representing whether the item is selected or not. 

incorrect:

```
isSelected={selectedIndex}
```

Therefore, it should be changed to:

```
isSelected={selectedIndex === index}
```

### Error 4

In the WrappedSingleListItem component, onClickHandler is being called with an argument (index) , so its our 1st error . 

incorrect one:

```
onClick={onClickHandler(index)}

```

correct one:

```
onClick={()=>onClickHandler(index)}
```


### Error 5

In the WrappedListComponent component, the propTypes for items is incorrectly defined. It sholud be arrayOf instead of shapeOf

Incorrect:

```
WrappedListComponent.propTypes = {
  items: PropTypes.array(PropTypes.shape({ // error 4 -> the term is arrayOf not shapeOf 
    text: PropTypes.string,
  })),
};
```


correct:

```
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ // error 4 -> the term is arrayOf not shapeOf 
    text: PropTypes.string,
  })),
};
```



### Error 6

There is no need of useEffect hook for this code

```
useEffect(() => {
    setSelectedIndex(null);
}, []);
```

We can remove the above code.

 
# Code Output after removing the error


# Code Optimization

#### Before Optimization of code the WrappedSingleListItem renders multiple times when we click on the list item




#### After Optimization of code the WrappedSingleListItem renders only 2 times when we click on the list item




>>>>>>> c980c9467d3c33e835bf8fe9badba68ea4c22c24


