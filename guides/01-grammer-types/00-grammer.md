**to execute from terminal `node filename.ext`**

#### 1. Basics
- case-sensitive language
- uses unicode-characterset
- syntax is derived from other languages
- statements seperated by semicolons(;)
- read from left to right, 
- whitespaces (spaces, tab, newline)

#### 2. Comments
- single line comment
        ``` 
        // single line comment 
        ```

- multi-line comment
    ``` 
        /* 
        multi-line 
        comment
        */
    ```

#### 3. Declarations
- 3 types: var, let, const
##### variables
- names for values in the applications, naming rules (letters,_,$,0-9)
##### declaring variables
- using var, let, const
##### initializing variables
##### variable scope
- global scope,
- module scope
- function scope
- block scope - between curly braces
- var declared are not block scoped
- let, const are block scoped generally
##### varibale hoisting
- var declare variable declarations are hoisted
##### global variables
- window, globalThis
##### Constants
* read-only values
_ objects, arrays are reassignables

#### 4. Datatypes and Structures
##### Datatypes
|- **primitives**<br/>
    - boolean - true/false<br/>
    - number - any number<br/>
    - bigInt - integer for arbitary precision<br/>
    - string - sequence of characters<br/>
    - symbol - whose instances are unique and immutable<br/>
    - null - donoing null value<br/>
    - undefined - whose value si not defined<br/>
|- **object**<br/>

##### Datatype Conversion
- JS is a dynamically typed language, means dont have to specify datatype, auotmatically converted as needed during execution

##### Numbers and + Operator
- adds numbers and concats when string as operand

##### Strings to Numbers
- *parseInt()* - returns whole numbers
- *parseFloat()* - returns decimal numbers
- *Number() - retunrs number

#### 5. Literals
##### Array Literals
- enclosed in [] brackets
- length property
- extra commas in literals
##### Boolean Literals
- true, false
##### Numeric Literals
- integer literals
> floating point literal

