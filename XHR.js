
function httpRequest(url, params) { 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = () =>{ 
        if (this.readyState === 4) { 
            return;
        }

        if (this.status === 200) {
            // success
        } else { 
            // error
        }
    }

    xhr.onerror = () => { 
        
    }

    xhr.responseType = 'json';

    xhr.setRequestHeader('Accept', 'application/json')

    xhr.send(JSON.stringify(params));
}



