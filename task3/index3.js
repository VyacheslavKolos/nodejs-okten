const fs = require("fs");
const path = require("path");

const readDir = () => {
    fs.readdir(path.join(__dirname, 'T3Files'),
        (err, T3DirData) => {
            if (err) {
                console.log(err);
                throw err;
            }

            for (let dir of T3DirData) {
                fs.stat(path.join(__dirname, 'T3Files', `${dir}`),
                    (err1, stat) => {
                        if (err1) {
                            console.log(err1);
                            throw err1;
                        }
                        if (stat.isFile() === true) {
                            fs.truncate(path.join(__dirname, 'T3Files', `${dir}`),
                                (err2) => {
                                    if (err2) {
                                        console.log(err2);
                                        throw err2;
                                    }
                                })
                        } else if (stat.isDirectory() === true) {
                            fs.rename(path.join(__dirname, 'T3Files', `${dir}`),
                                path.join(__dirname, 'T3Files', `_new${dir}`),
                                (err3) => {
                                    if (err3) {
                                        console.log(err3);
                                        throw err3;
                                    }
                                })
                        } else {
                            console.log("There is no file or directory");
                        }

                    })
            }
        })
}


fs.mkdir(path.join(__dirname, 'T3Files', 'files'),
    {recursive: true},
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }

        fs.writeFile(path.join(__dirname, 'T3Files', 't3ile.txt'), 'Hello task 3', (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
            readDir();
        })
    })

