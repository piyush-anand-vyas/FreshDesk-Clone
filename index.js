let ticketAPI = "https://newaccount1625971064703.freshdesk.com/api/v2/tickets";
let headers = new Headers();
let username = "K0jxE76X3j1EX8cZ7L";
let password = ".";
headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

document.querySelector(".tickets").addEventListener('click', function(event){
    console.log("I'm clicked");
    event.preventDefault();
    async function getTickets(){
        let resp = await fetch(ticketAPI,{method:'GET',
        headers: headers,
       });
        let data = await resp.json();
        console.log(data);
        createTable(data);
    }
    getTickets();
    function createTable(data){
        let table = document.createElement("table");
        table.setAttribute('class','table');
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        let headings = ["ID","Subject","Status","Priority", "Edit"];
        for(i=0;i<5;i++){
            let th = document.createElement("th");
            th.innerHTML = headings[i];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        let div = document.getElementsByClassName("col-sm-6");
        let node = document.createTextNode(`${table}`);
        let tbody = document.createElement("tbody");
        for(i=0;i<data.length;i++){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = data[i].id;
            let td2 = document.createElement("td");
            td2.innerHTML = data[i].subject;
            let td3 = document.createElement("td");
            td3.innerHTML = data[i].priority;
            let td4 = document.createElement("td");
            td4.innerHTML = data[i].status;
            let td5 = document.createElement("td");
            let strLink = "edit-ticket.html?" + data[i].id;
            td5.innerHTML = `<a href=${strLink}>Edit</a>`;
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        //div.appendChild(node);
        document.body.append(table);
        console.log(div);
    }

})
 let contactAPI = "https://newaccount1625971064703.freshdesk.com/api/v2/contacts"; 

    document.querySelector(".contacts").addEventListener('click', function(event){
        console.log("I'm clicked");
        event.preventDefault();
        async function getTickets(){
            let resp = await fetch(contactAPI,{method:'GET',
            headers: headers,
           });
            let data = await resp.json();
            console.log(data);
            createContactsTable(data);
        }
        getTickets();
            function createContactsTable(data){
                let table = document.createElement("table");
                table.setAttribute('class','table');
                let thead = document.createElement("thead");
                let tr = document.createElement("tr");
                let headings = ["Contact ID","Name","Email"];
                for(i=0;i<3;i++){
                    let th = document.createElement("th");
                    th.innerHTML = headings[i];
                    tr.appendChild(th);
                }
                thead.appendChild(tr);
                table.appendChild(thead);
            
                let tbody = document.createElement("tbody");
                for(i=0;i<data.length;i++){
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    td1.innerHTML = data[i].id;
                    let td2 = document.createElement("td");
                    td2.innerHTML = data[i].name;
                    let td3 = document.createElement("td");
                    td3.innerHTML = data[i].email;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    //tr.appendChild(td4);
                    
                    tbody.appendChild(tr);
                }
                table.appendChild(tbody);
                document.body.append(table);
                console.log(div);
        }
    




})