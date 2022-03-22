const assembleTeam = (team) => {
    const profilePage = [];

    const createManager = manager => {
profilePage.push(managerCard);
    };
    const createEngineer = engineer => {
profilePage.push(engineerCard);
    };
    const createIntern = intern => {
profilePage.push(internCard);
    };
}
module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
    </header>
    <main>${assembleTeam(team)}</main>
        
    </body>
    </html>
    `;
    }