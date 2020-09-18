/**
 * @Author Tabuyos
 * @Time 2020/9/17 14:34
 * @Site www.tabuyos.com
 * @Email tabuyos@outlook.com
 * @Description parser html template.
 */

import { getTemplate, get, http } from "./fetch.js";

const username = "Tabuyos";
const starting = "Starting";
const stopping = "Stopping";

console.log("Hello", username);
console.log("====================", starting, "====================");

const Parser = {
    loadHtml(){
        let html  = "<div>Hello Tabuyos</div>";
        body = document.getElementsByTagName("body")[0];
        bodyText = body.innerHTML;
        console.log(bodyText.replaceAll("{{content}}", html));
        body.innerHTML = bodyText.replaceAll("{{content}}", html);
    },
    load(){
        console.log("loadding...");
        let p = fetch("../template/login.html", {
            method: "get"
        }).then(function (response){
            console.log(response);
            return response.text();
        }).catch(function (err){
            console.log(err);
        });
        p.then(function (data){
            html = data;
            console.log(data);
            let containner = document.getElementById("container");
            console.log("containner", JSON.stringify(containner));
            result = parseAhtj(html);
            console.log(result);
            containner.innerHTML = result;
            console.log("containner", JSON.stringify(containner));
            let script = document.getElementById("AHTJ");

            // console.log(script.innerHTML);
            // script.innerHTML = parseScript(html);
            // eval(script.innerHTML);

            parentNode = script.parentNode;
            parentNode.removeChild(script);
            newScript = document.createElement("script");
            newScript.type = "text/javascript";
            newScript.id = "AHTJ";
            scriptText = parseScript(html);
            console.log(scriptText);
            newScript.innerHTML = scriptText;
            parentNode.appendChild(newScript);

            htmlNode = document.getElementsByTagName("body")[0];
            style = document.createElement("style");
            style.type = "text/css";
            style.id = "AHTJStyle";
            styleText = parseStyle(html);
            console.log(styleText);
            style.innerHTML = styleText;
            htmlNode.appendChild(style);
        }).catch(function (err){
            console.log(err);
        });
    },
    myload() {
        let p = get("../template/login.html").then(data => {
            return data;
        });
        let p1 = get("../template/index.html").then(data => {
            return data;
        });
        let p2 = get("../template/content.html").then(data => {
            return data;
        });
        let p3 = get("../template/backup.html").then(data => {
            return data;
        });
        console.log(p);
        console.log(p1);
        console.log(p2);
        console.log(p3);

        let p4 = http.get("../template/login.html");
        console.log(p4);


        let promise = fetch("../template/index.html", {
            method: "get"
        }).then(function (response){
            console.log(response);
            return response.text();
        }).catch(function (err){
            console.log(err);
        });

        promise.then(function (data){
            let p = fetch("../template/content.html", {
                method: "get"
            }).then(function (response){
                console.log(response);
                return response.text();
            }).catch(function (err){
                console.log(err);
            });
            p.then(function (dataP){
                let html = data.replaceAll("{{ content }}", parseAhtj(dataP));
                console.log(dataP);
                console.log(html);
                // w = window.open('index','','',false);
                window.document.write(html);
                window.document.close();
                // w.print();

                parentNode = document.getElementsByTagName("html")[0];
                newScript = document.createElement("script");
                newScript.type = "text/javascript";
                newScript.id = "AHTJ";
                scriptText = parseScript(dataP);
                console.log(scriptText);
                newScript.innerHTML = scriptText;
                parentNode.appendChild(newScript);
                console.log(window.location.href);
                window.history.replaceState(null,null,"http://localhost:3000/index.html");
            }).catch(function (err){
                console.log(err);
            });
        });
    },
    buttonload(){
        console.log("button load");
    }
};

function parseAhtj(ahtj){
    beginIndex = ahtj.indexOf("<ahtj>") + 6;
    endIndex = ahtj.indexOf("</ahtj>");
    return ahtj.substring(beginIndex, endIndex);
}

function parseScript(ahtj){
    beginIndex = ahtj.indexOf("<script>") + 8;
    endIndex = ahtj.indexOf("</script>");
    return ahtj.substring(beginIndex, endIndex);
}

function parseStyle(ahtj){
    beginIndex = ahtj.indexOf("<style>") + 7;
    endIndex = ahtj.indexOf("</style>");
    return ahtj.substring(beginIndex, endIndex);
}

export { Parser }

console.log("This is content");

console.log("====================", stopping, "====================");
