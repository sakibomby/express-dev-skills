const skills = [
    {id: 12345, skill: 'Express', done: false},
    {id: 51435, skill: 'Cooking', done: true},
    {id: 98723, skill: 'Functions', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
};