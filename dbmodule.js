var databaseUrl = "localhost/mydb3";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
db.collection("Logininformation");
console.log("Connected");

exports.authenticateUser = function(fname, emailAddr, response) {
console.log(fname);
// console.log(empid);
console.log(emailAddr)
db.Employee.find({ "_id": fname, "emailAddr": emailAddr},
function(err, users) {
            //console.log(users);
            //console.log(err);
if (err || !users) {
response.write("..Not authorized user and its Error" || err);
response.end();
            } else if (users.length == 0) {
response.write("Not authorized user");
response.end();
            } else {
response.write("Authorized user")
response.end();
            }

        });
}

exports.saveUser = function(fname,emailAddr, response) {
console.log('Saving user  ');
console.log("login details is saved");
db.Employee.insert({ "_id": fname, "emailAddr": emailAddr},

function(err, saved) {
if(err)
console.log(err+"Error");
if (err || !saved)
{
    response.write(username + "is not Saved");
    response.end();
    console.log(err,"Error");
}
else{
     response.write(username + "is Saved");
     response.end();
     console.log("User saved ");
            //dbo.close;
        }
        });
}
// exports.update = function(username, dept, empid, response) {
//     console.log('update');
//     console.log(username);
//     console.log(empid);
//     console.log(dept)
//     db.Employee.updateOne({"_id": username},{$set:{"dept": dept,"empid": empid} },{upset:true},
//     function(err, users) {
//     if(err || !users){
//         response.write("!!Your changes is not Updated" || err);
//         response.end();
//     }
//     else if (users.length == 0)
//     {
//         response.write("please fill yours updates!!");
//         response.end();
//     }
//     else{
//          response.write(username  + " Your changes is Updated...");
//          response.end();
//          console.log("Successfully Updated");
//                 //dbo.close;
//             }
//             });
// }
    
exports.del = function(fname, response){
    console.log('delete');
    console.log('fname');

    db.Employee.remove( {"_id": fname},
    function (err, users) {

            if (err || !users) {
                response.write("!!Your Selected Value is not Removed!!" || err);
                response.end();
            }
            else if (users.length == 0) {
                response.write("!!Your Selected Value is not Removed!!");
                response.end();
            }
            else {
                response.write(" Your Selected Value is Removed....");
                response.end();
                console.log(username + " is Deleted");
            }
        });
}