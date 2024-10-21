import {readFileAndReturnArray} from "./fileReader.js";

export const run = async (year, day, part, expected, actual = null) => {
    const dataPathTest = `./src/code/${year}/${day}/input/${part}-test.txt`;
    const dataPathReal = `./src/code/${year}/${day}/input/real.txt`;
    const codePath = `../code/${year}/${day}/code/${part}.js`;
    const parserPath = `../code/${year}/${day}/parser/${part}.js`;

    console.log(`--- Running year: ${year} day: ${day} part: ${part} ---`);

    const dataTest = await readFileAndReturnArray(dataPathTest);
    const dataReal = await readFileAndReturnArray(dataPathReal);

    return import(codePath).then(code => {
        return import(parserPath).then(parser => {
            try {
                const parsedTestData = parser.parse(dataTest);
                const resTest = code.run(parsedTestData);  

                if(resTest !== expected) 
                    console.log(`❌ Failed Test - Expected ${expected} but recieved ${resTest}`);
                else {
                    console.log(`✅ Passed Test - Recieved ${resTest}, executing on real data`);

                    const parsedRealData = parser.parse(dataReal);
                    const resReal = code.run(parsedRealData);  

                    if(actual) {
                        if(resReal != actual) {
                            console.log(`❌ Failed Real - Expected ${actual} but recieved ${resReal}`);
                        }
                        else {
                            console.log(`✅ Passed Real - Recieved ${resReal}`);
                        }
                    }
                }
            }
            catch (e) {
                console.error(e);
            }; 
        }).catch(() => {
            console.error("❌❌❌ Could not find " + parserPath + " ❌❌❌");
        })
    }).catch(() => {
        console.error("❌❌❌ Could not find " + codePath + " ❌❌❌");
    })
}