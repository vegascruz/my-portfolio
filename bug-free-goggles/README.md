# Regex Expression Breakdown

Introductory paragraph (replace this with your text)

## Summary

In this breakdown, I will be explaining the components of a regular expression. This expression is used to validate a username. 

Regular Expression Below:

/^[A-Za-z][A-Za-z0-9_]{7,29}$/

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)
- [Questions?](#Questions?)

## Regex Components

### Anchors
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

'^' and '$' are the anchors for this expression. The '^' anchor indicates that the first letter will begin with the characters that follow. In this case, the character that can follow must be of the alphabet. Regex is case-sensitive, so the 'A-Z' indicates upper case, however we can also use lower case because that is also stated as 'a-z'. The '$' anchor indicates that the string must end with the characters that precede it. In this case, we still remain in the first pair of square brackets, because we are still disussing the first and last characters, the other square brackets indicate characters in between. Going back to the first set of rules, the last char must be of the alphabet, either lower or upper case. For both anchors, we can use an exact string or characters to set the rule for the string. 

### Quantifiers
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

The '{7, 29}' is the quantifier. Quantifiers are what set limits upon the string your regex expression matches. There are multiple different quantifier patterns such as '*', '+', and '?'. In this case, this expression is using curly brackets '{}'. These set a limit on the string value. The first number means minimun and the second number means maximum. This example is saying that the minimum must be 7 and the maximum must be of 29 characters.

### OR Operator
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

In this case, there is no 'OR' operator. However, I will explain it. It is the 'pipe' character and it looks like this, '|'. This operators indicates that it could be one of two different sets of characters to make up the string like if the first letter has to start with 'A' or 'V', then you could seperate that like so: '(A|V)'.

### Character Classes
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

These are components within our regular expression that tell us what types of chars to expect. These are any expression within the '[]' brackets. In this case, we have several. 'A-Z', 'a-z', and '0-9_'. These we explained earlier, but to give them a term... these are character classes.

### Flags
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

In this case, there aren't any flags, but we could easily add one with examples such as these: 'g', 'i', or 'm'. In order to use these flags, we add them to the end of the expression AFTER the second forward slash, '/'. These define additional functionality or limits for the regex. These can be used in any order, or seperately and will still be apart of the regex.
### Grouping and Capturing
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

There aren't any groups in this regex, but they are useful for creating blocks of patterns. They're added using parenthisis As an example, I could add '()' over '[A-Za-z]' to give it two diffenet meanings. Ex: '/^([A-Z][a-z])' which would mean first and last letter are all caps, but everything in between is lower case. 

### Bracket Expressions
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

Anything enclosed in '[]' brackets. In this case, we have two expressions... '[A-Za-z]' and '[A-Za-z0-9_]'. These expressions can be used to matcha single char or full string. 

### Greedy and Lazy Match
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

There aren't any in this expression, but these terms mean they'll match the shortest or longest possible string. It basically tries to match an element as many or little times as possible. '?' means greedy and '?.' means lazy. 

### Boundaries
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

Boundaries are created using the character '\b', which acts like an anchor. This means 'word boundary', which can either be placed at the start, end or middle to signify it must be a whole word only.

### Back-references
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

These match the same text matched prior to a capturing group. Symbols that can be used are: '*', '\b', '*?' or '\1'. 

### Look-ahead and Look-behind
/^[A-Za-z][A-Za-z0-9_]{7,29}$/

This doesn't contain any of these terms, but what they mean is that anything that immediately precedes or follows the string of a string can or can not be this word. An example would be, 
'(?=foo)'. This means that 'foo' must immediately follow the string. If we want to negate that, then it would be '?!'.

## Author

Hi, my mame is Vegas Cruz and I'm an aspiring web developer. I am currently in the works for an associates degree in "IT: Web & Software Development" as well as finishing up my Coding Bootcamp at MSU, where I'll earn a certificate as a Full-STACK developer. Wanna know more? Reach out below...

## Questions? 

Feel free to email or message me.
### GitHub: https://github.com/vegascruz
### Email: vegascruz5@gmail.com
