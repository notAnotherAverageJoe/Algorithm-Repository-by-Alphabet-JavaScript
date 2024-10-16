Here’s a comprehensive list of string methods in JavaScript along with brief descriptions of what each one does:

1. length
   Returns the length of the string (number of characters).
   javascript
   Copy code
   let str = "Hello";
   console.log(str.length); // 5
2. charAt(index)
   Returns the character at the specified index.
   javascript
   Copy code
   let str = "Hello";
   console.log(str.charAt(0)); // "H"
3. charCodeAt(index)
   Returns the Unicode of the character at the specified index.
   javascript
   Copy code
   let str = "Hello";
   console.log(str.charCodeAt(0)); // 72 (Unicode for 'H')
4. concat(str1, str2, ...)
   Concatenates one or more strings to the calling string.
   javascript
   Copy code
   let str1 = "Hello";
   let str2 = "World";
   console.log(str1.concat(" ", str2)); // "Hello World"
5. includes(substring)
   Checks if the string contains the given substring, returning true or false.
   javascript
   Copy code
   let str = "Hello World";
   console.log(str.includes("World")); // true
6. endsWith(substring)
   Checks if the string ends with the given substring.
   javascript
   Copy code
   let str = "Hello World";
   console.log(str.endsWith("World")); // true
7. indexOf(substring, start)
   Returns the index of the first occurrence of the substring, or -1 if not found.
   javascript
   Copy code
   let str = "Hello World";
   console.log(str.indexOf("World")); // 6
8. lastIndexOf(substring, start)
   Returns the index of the last occurrence of the substring, or -1 if not found.
   javascript
   Copy code
   let str = "Hello World World";
   console.log(str.lastIndexOf("World")); // 12
9. localeCompare(compareString)
   Compares two strings in the current locale and returns a number:
   0 if the strings are equal.
   Negative if the reference string comes before the compare string.
   Positive if the reference string comes after the compare string.
   javascript
   Copy code
   let str1 = "apple";
   let str2 = "banana";
   console.log(str1.localeCompare(str2)); // -1
10. match(regex)
    Matches a string against a regular expression and returns an array of results or null if no matches are found.
    javascript
    Copy code
    let str = "Hello World";
    console.log(str.match(/[A-Z]/g)); // ["H", "W"]
11. padEnd(targetLength, padString)
    Pads the end of the string with a given string until it reaches the target length.
    javascript
    Copy code
    let str = "Hello";
    console.log(str.padEnd(10, "!")); // "Hello!!!!!"
12. padStart(targetLength, padString)
    Pads the beginning of the string with a given string until it reaches the target length.
    javascript
    Copy code
    let str = "Hello";
    console.log(str.padStart(10, "!")); // "!!!!!Hello"
13. repeat(count)
    Repeats the string a specified number of times.
    javascript
    Copy code
    let str = "Hello";
    console.log(str.repeat(3)); // "HelloHelloHello"
14. replace(searchValue, newValue)
    Replaces the first occurrence of the search value with the new value.
    javascript
    Copy code
    let str = "Hello World";
    console.log(str.replace("World", "Universe")); // "Hello Universe"
15. replaceAll(searchValue, newValue)
    Replaces all occurrences of the search value with the new value.
    javascript
    Copy code
    let str = "foo foo foo";
    console.log(str.replaceAll("foo", "bar")); // "bar bar bar"
16. slice(startIndex, endIndex)
    Extracts part of the string between the start and end indices (end not included).
    javascript
    Copy code
    let str = "Hello World";
    console.log(str.slice(0, 5)); // "Hello"
17. split(separator, limit)
    Splits the string into an array of substrings using a separator.
    javascript
    Copy code
    let str = "Hello World";
    console.log(str.split(" ")); // ["Hello", "World"]
18. startsWith(substring)
    Checks if the string starts with the given substring.
    javascript
    Copy code
    let str = "Hello World";
    console.log(str.startsWith("Hello")); // true
19. substring(startIndex, endIndex)
    Returns the part of the string between the start and end indices.
    javascript
    Copy code
    let str = "Hello World";
    console.log(str.substring(0, 5)); // "Hello"
20. toLowerCase()
    Converts the string to lowercase.
    javascript
    Copy code
    let str = "Hello World";
    console.log(str.toLowerCase()); // "hello world"
21. toUpperCase()
    Converts the string to uppercase.
    javascript
    Copy code
    let str = "Hello World";
    console.log(str.toUpperCase()); // "HELLO WORLD"
22. trim()
    Removes whitespace from both ends of the string.
    javascript
    Copy code
    let str = " Hello World ";
    console.log(str.trim()); // "Hello World"
23. trimStart() / trimEnd()
    trimStart(): Removes whitespace from the start.
    trimEnd(): Removes whitespace from the end.
    javascript
    Copy code
    let str = " Hello World ";
    console.log(str.trimStart()); // "Hello World "
    console.log(str.trimEnd()); // " Hello World"
24. valueOf()
    Returns the primitive value of a string.
    javascript
    Copy code
    let str = new String("Hello");
    console.log(str.valueOf()); // "Hello"
25. normalize()
    Normalizes the string using Unicode Normalization Form.
    javascript
    Copy code
    let str = "café";
    console.log(str.normalize("NFC")); // "café"
    These methods are incredibly useful for manipulating and working with strings in JavaScript. Let me know if you need more detailed examples or explanations!
