My Advent of Code implementations.

Unfortuantly all my code has been lost, so for 2024 I have to start over. 
The project will be setup so new years and days can be added dynamically. 

Current stats:
- [2024] 44* (AoC++).
- [2023] 50* (AoC++).
- [2022] 50*.
- [2021] 50*.
- [2020] 27*.
- [2019]  3*.
- [2018]  2*.
- [2015]  24*.

Total stars: 250*

To run the program on existing puzzles:
- In src/app.js, specify which puzzle to run.
- Run npm start from the root folder
This executes the src/app.js file and therefor also all puzzles that are not commented out.

How to add new puzzles:
- Copy the folder "x", found in src/template, to the desired year.
- Rename "x" to the desired day
- In src/app.js, add the line: await run(year, day, part, expectedResultWithTestData);
- In the path: {year}/{day}/input. Add the test data in 1-test.txt (and 2-test.txt when you get to part two)
- In the path: {year}/{day}/input. Add your real puzzle data to real.txt
- In the path: {year}/{day}/parser. Add the logic for converting the input to something usefull
- In the paht: {year}/{day}/code. Add the code for part 1 in 1.js (and 2.js for part two). Make sure that the expected result is returned.
If the code returns the correct value for the test data, the same code is automatically executed on the real dataset 
