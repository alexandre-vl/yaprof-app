let baseurl = "http://localhost:8080"

export function createUser(name, pp, clas, etab) {
    fetch(baseurl + '/user/create?name='+name+'&&pp='+pp+'&&class='+ clas +'&&=etab'+etab, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(response => {
            console.log(response[0]?.name)
            if (response[0]?.name) {
                window.localStorage.setItem('user', JSON.stringify(response[0]))
            }
            return true
        })
        .catch(error => console.log(error))
    return true

}