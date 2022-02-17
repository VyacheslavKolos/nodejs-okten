const fs = require("fs");
const path = require("path");


fs.writeFile(path.join(__dirname, 'task2.txt'), 'Hello task 1sadasdadasdasd', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }

    fs.readFile(path.join(__dirname, 'task2.txt'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }

        fs.mkdir(path.join(__dirname, 'new_Task2'), (err) => {
            if (err) {
                console.log(err);
                throw err;
            }

            fs.writeFile(path.join(__dirname, 'new_Task2', 'new_Task2.txt'), data, (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }

                fs.unlink(path.join(__dirname, 'task2.txt'), (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }


                })

            })


        })
    })

})

