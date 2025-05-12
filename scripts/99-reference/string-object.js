// String Object

// creating string
    const string1 = "A string primitive";   // double quote
    const string2 = 'Also a string primitive';  // single quote
    const string3 = `Yet another string primitive`; // backtick
    const string4 = new String("A String object");  // new()

// comparing strings
/// === , == are case sensitive, can use <,> operators
    const a ="a";
    const b ="b";
    const c = "B";
    console.log(a>b)    // prints false
    console.log(a<=b)   // prints true
    console.log(a==c)   // prints false
    console.log(a===c)  // prints false 

// primitives and objects
    const numString = "1";          // string
    const boolString ="true";        // string
    const primString ="anything";       // string
    const objString = new String("Hello");  // object

// coersion
// coersed to it base types

// methods
    const str1 ="Hello";
    const str2 ="World";

    // charAt()
    console.log(str1.charAt(1));    // prints e

    // concat()
    console.log(str1.concat(" ",str2));     // prints "Hello World"

    // startsWith(), includes() & endsWith()
    console.log(str1.startsWith("H"));      // prints true
    console.log(str1.endsWith("o"));      // prints true
    console.log(str1.includes("ll"));      // prints true

    // toLowerCase() & toUpperCase()
    console.log(str1.toLowerCase());      // prints hello
    console.log(str2.toUpperCase());        // prints  WORLD

    // indexOf , lastIndexOf()
    console.log(str1.indexOf("e"));         // prints 1
    console.log(str1.lastIndexOf("l"));     // prints 3

    // trim(), trimStart(), trimEnd()
    console.log(" hello world  ".trim());   // prints "hello world"
    console.log(" hello world  ".trimStart());   // prints "hello world  "
    console.log(" hello world  ".trimEnd());   // prints "  hello world"

    // padStart(), padEnd()
    console.log("hey".padStart(5,"-"));        // prints "--hey"
    console.log("hey".padEnd(5,"-"));        // prints "hey--"

    //substring(), slice(), split()
    console.log(str1.substring(2,4));       // prints "ll"
    console.log(str1.slice(2,4 ));          // prints "el"
    console.log(str1.split("l"));           // print "he, "", "o"

    // search(), match(), matchall()

    // replace(), replaceAll()
