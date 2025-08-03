// newProj 에 localDB 연동하기

const mysql = request('mysql');
const dbInfo = {
    host: 'localhost',
    user: 'projuser',
    password: '1234',
    database: 'newprojdb'
};

module.exports = {
    init: function(){
        return mysql.createConnection(dbInfo);
    },
    connect: function(conn){
        conn.connect(function(err){
            if(err) console.error('mysql connect error: ' + err);
            else console.log('mysql connect success');
        });
    }
};