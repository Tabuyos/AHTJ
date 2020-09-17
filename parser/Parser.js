/**
 * @Author Tabuyos
 * @Time 2020/9/17 14:34
 * @Site www.tabuyos.com
 * @Email tabuyos@outlook.com
 * @Description parser html template.
 */

const username = "Tabuyos";
const starting = "Starting";
const stopping = "Stopping";

console.log("Hello", username);
console.log("====================", starting, "====================");

const Parser = {
    load(){
        console.log("loadding...");
        let p = fetch("../template/login.html", {
            method: "get"
        }).then(function (response){
            return response.text();
        }).catch(function (err){
            console.log(err);
        });
        p.then(function (data){
            html = data;
            console.log(data);
            let containner = document.getElementById("container");
            console.log("containner", JSON.stringify(containner));
            containner.innerHTML = html;
            console.log("containner", JSON.stringify(containner));
        }).catch(function (err){
            console.log(err);
        });
    }
};

console.log("This is content");

console.log("====================", stopping, "====================");
