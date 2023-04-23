# Supriti-Vats_Front-End

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

![AFTER ERROR FIXING](https://user-images.githubusercontent.com/97901522/233856290-2670eb71-f586-4edc-a8fc-96707a0afd62.png)



# Code Optimization

#### Before Optimization of code the WrappedSingleListItem renders multiple times when we click on the list item

![BEFORE OPTIMIZATION](https://user-images.githubusercontent.com/97901522/233856355-bf4ca13a-9ec7-4858-82b3-7fdbcaa698ea.png)



#### After Optimization of code the WrappedSingleListItem renders only 2 times when we click on the list item

![AFTER OPTMIZATION](https://user-images.githubusercontent.com/97901522/233856470-4b5e0420-8b48-407f-9288-2b6bfbdc0263.png)




