const skills = [
    {id: 12345, skill: 'Express', done: false},
    {id: 51435, skill: 'Cooking', done: true},
    {id: 98723, skill: 'Functions', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}


function create(skill) {
    // add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
};