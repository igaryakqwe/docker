const express = require('express');

const app = express();

const filterUser = ({ id, name, username, phone, website, email }) =>
    ({ id, name, username, phone, website, email });


app.get('/users', async (req, res) => {
    const request = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await request.json();
    const filteredUsers = users.map((user) => filterUser(user));
    res.send(filteredUsers);
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await request.json();
    const filteredUser = filterUser(user);
    res.send(filteredUser);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
