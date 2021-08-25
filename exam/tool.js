const developers = [
    { id: 'd1', name: "Kristof", projects: ['p1', 'p2'] },
    { id: 'd2', name: "Arvid", projects: ['p1', 'p2', 'p4'] },
    { id: 'd3', name: "Joren", projects: ['p3', 'p4'] },
]

const projects = [
    { id: 'p1', name: "Color Passport - The Digital One" },
    { id: 'p2', name: "In The Pocket - Smart City App" },
    { id: 'p3', name: "Teamleader - App" },
    { id: 'p4', name: "Apporto - Social Shopping App" },
];

//it works with nodeJs enter your command in terminal(node tool.js d1)
if (process.argv[2] == undefined) {
    console.log(`Options\nask for [d1,d2,d3]\nExample: node tool.js d1`)
}
let devid = process.argv[2]

console.log(process.argv)

const getDeveloperProjects = (developers, projects, developerId) => {

    developers.forEach(item => {

        if (item.id == developerId) {
            console.log(item.id)
            item.projects.forEach(item => {
                console.log(item)
                projects.forEach(elemnt => {
                    if (item == elemnt.id) {
                        console.log(elemnt.name);
                    }
                })
            })
        }
    })
}

//if you want to ignore the nodeJS part just enter the developerId here(getDeveloperProjects(developers, projects, "d3");)
getDeveloperProjects(developers, projects, devid);



