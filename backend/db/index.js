const index= dbConnect => {
    const sampleMethod=(args)=>{
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM sample where name=${dbConnect.escape("test")};`;
            dbConnect.query(qs, function(error, results, _fields) {
                if (error) return reject('Failed');
                resolve(results);
            });
        });
    }

    return {
        sampleMethod,
    };
};

module.exports = index;
