## SOLUTIONS

### Alternate Solution 1
```js
function truncateString(str, num) {
  // Clear out that junk in your trunk 
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
```
### Code Explanation
- We start off with a simple `if` statement to determine one of two outcomes...
- If our string length is greater than the `num` we want to truncate it, we return a slice of our string starting at character 0, and ending at `num`.  We then append our `'...'` to the end of the string.
- However, if above situation is not true, it means our string length is less than our truncation `num`.  Therefore, we can just return the string.


### Alternate Solution 2
```js
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```
### Code Explanation
- This solution is very similar to basic solution.  To determine the new string, we use a ternary operator.  In our ternary operation, if `str.length` is larger than `num`, we return a new string which is slice of our string starting at character 0, and ending at `num` and the `'...'` is appended to the end of our new string.  If `str.length` is less than or equal to `num`, we return the string without any truncation.
- **NOTE** In order to understand the above code, you need to understand how a Ternary Operator works.  The Ternary Operator is frequently used as a shortcut for the `if` statement and follows this format: `condition ? expr : expr2`.  If the `condition` evaluates to true, the operator returns the value of `expr1`.  Otherwise, it returns the value of `expr2`.

### REFERENCE LINKS
- [Conditional(ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [`String.prototype.slice()`](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

