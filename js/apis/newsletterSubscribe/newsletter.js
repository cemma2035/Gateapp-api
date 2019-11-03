const url = `${api_origin}${newsletter}`;

//Get input field values
function subscribe(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    const data = {
            name,
            email
        };
        console.log(data);

    //fetch(request)
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'     
        },
        body: JSON.stringify(data)
    })
        .then(resp => resp.json()) 
        .then(resp => {
            Swal.fire({
                title: 'Subscribed Successfully',
                html:  `<p style="color:tomato; font-size:17px;">${resp.message}</p>`,
                confirmButtonText: 'Close'
            })       
            console.log(resp);
        })
        .catch(err => {
            console.log(err);
        })

};

const submit = document.querySelector('#form-submit').addEventListener('submit', subscribe);


console.log(url);


