export const getAllDrinks = async () => {
    const res = fetch('http://localhost:3001/drinks', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
}