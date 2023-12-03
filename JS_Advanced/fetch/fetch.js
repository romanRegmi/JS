// POST And PUT
function writeData() {
    fetch('https://reqres.in/api/users/2', {
        method: "POST", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            { name: "Capitain Anonymous" }
        )
    })
        .then(res => {
            if (res.ok) { console.log("POST request successful") }
            else { console.log("POST request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

writeData()


// GET
function getData() {
    fetch('https://reqres.in/api/users')
        .then(res => {    /* IF statement checks server response: .catch() does not do this! */
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data)) // the data
        .catch(error => console.log(error)) // error handling
    /* .catch handles a failure with fetch (e.g. syntax error, no internet connection) */
}

getData()

function deleteData() {
    fetch('https://reqres.in/api/users/2', {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

async function myFetch() {
    try {
        /* Request */
        let res = await fetch('https://reqres.in/api/users/2');
        /* Check response */
        let resChecked;
        if (res.ok) { /* If successful: */
            console.log("Request successful"); 
            resChecked = res; 
            let data = await resChecked.json();
            console.log(data);
        } else { /* If unsuccessful: */
            console.log("Request unsuccessful");
        }
    } catch (err) {
        console.log(err);
    }
}

myFetch() // Prints data object containing information about user 2