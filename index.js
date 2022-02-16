const fs = require('fs')
const path = require("path");

// fs.mkdir(path.join(__dirname, 'main'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'main','online'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'main','inPerson'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


// let onlineUsers = [
//     {name: "Andrii", age: 22, city: "Lviv"},
//     {name: "Kokos", age: 18, city: "Kyiv"}
// ];
// let inPersonUsers = [
//     {name: "Vasya", age: 56, city: "Ternopil"},
//     {name: "Pomidor", age: 18, city: "Rivne"}
// ];
//
// for (const onlineUser of onlineUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'),
//         `NAME: ${onlineUser.name}\n AGE: ${onlineUser.age}\n CITY: ${onlineUser.city}`, (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
// }
//
// for (const inPersonUser of inPersonUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
//         `NAME: ${inPersonUser.name}\n AGE: ${inPersonUser.age}\n CITY: ${inPersonUser.city}`, (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
// }


const moveFromFileToFile = () => {
    fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }

        fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), (err1, data1) => {
            if (err1) {
                console.log(err1);
                throw err1;
            }

            fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), data1, {flag: "w"}, err2 => {
                if (err2) {
                    console.log(err2);
                    throw err2;
                }
                fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), data, {flag: "w"}, err3 => {
                    if (err3) {
                        console.log(err3);
                        throw err3;
                    }
                })

            })

        })

    })
}

moveFromFileToFile();
