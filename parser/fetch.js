async function getTemplate(fileName) {
    await fetch(fileName, {
        method:"get"
    }).then(function (response){
        return response.text();
    }).then(function (data){
        console.log(fileName, data);
        return data;
    }).catch(function (error){
        console.log(error);
    });;
}

function get(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

class EasyHttp{
    //get
    async get(url) {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    }

    //POST
    async post(url,datas){
        const response = await fetch(url,{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        });
        const data = await response.json();
        return data;
    }

    //PUT
    async put(url,datas){
        const response = await fetch(url,{
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        });
        const data = await response.json();
        return data;
    }

    //delete
    async delete(url){
        const response = await fetch(url,{
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await "����ɾ���ɹ�";   //await���滹����ֱ�Ӹ��ַ����� �����666...
        return data;
    }
}

const http = new EasyHttp();

export { getTemplate, get, http }
