const generate = teamData => {
 
    const manager = teamData.managerData.map(function(data) {
        let managerHtml = `
        <div class="card">
            <div class="card-header">
                <h3>${data.name}</h3>
                <h4 style="font-style: italic;">Manager</h4>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Office Number: ${data.office}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                </ul>
            </div>
        </div>
        `

        return managerHtml
    });

    const engineer = teamData.engineerData.map(function(data) {
        let engineerHtml = `
        <div class="card">
            <div class="card-header">
                <h3>${data.name}</h3>
                <h4 style="font-style: italic;">Engineer</h4>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Github: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                </ul>
            </div>
        </div>
        `

        return engineerHtml
    });

    const intern = teamData.internData.map(function(data) {
        let internHtml = `
        <div class="card">
            <div class="card-header">
                <h3>${data.name}</h3>
                <h4 style="font-style: italic;">Intern</h4>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">School: ${data.school}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                </ul>
            </div>
        </div>
        `
        return internHtml
    })

    return [manager,engineer,intern]
};

module.exports = teamData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous">
        </head>
        <body>
            <header class="jumbotron text-center">
                <h1>Team Profile</h1>
            </header>
            ${generate(teamData)}
        </body>
        </html>    
        `
};