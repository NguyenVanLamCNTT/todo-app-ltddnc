const getUsers = async () => {
    return fetch('https://app-demo-ldtt.herokuapp.com/api/posts')
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
}

module.exports = {
    getUsers
}