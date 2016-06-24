//Create new Team names, with empty player array list
var Team = function(name, mascot, city, state, year, stadium, owner, coach, teamColors, stanleyCups) {
  this.teamName = name;
  this.mascot = mascot;
  this.loc = {'city': city, 'state': state};
  this.yearFounded = year;
  this.stadiumName = stadium;
  this.owner = owner;
  this.coach = coach;
  this.roster = [];
  this.colors = teamColors;
  this.stanleyCups = stanleyCups;
}

//create new player, and add to global player array
var playerArray = [];
var Player = function(fullName, position, number, team) {
  this.fullName = fullName;
  this.position = position;
  this.number = number;
  this.teamName = team;
  playerArray.push(this);
}

//Create players
var ryanCarter = new Player('Ryan Carter', 'Forward', '18', 'Wild');
var charlieCoyle = new Player('Charlie Coyle', 'Center', '3', 'Wild');
var zacDalpe = new Player('Zac Dalpe', 'Center', '27', 'Wild');
var justinFontaine = new Player('Justin Fontaine', 'Forward', '14', 'Wild');
var kurtisGabriel = new Player('Kurtis Gabriel', 'Forward', '63', 'Wild');
var mikaelGranlund = new Player('Mikael Granlund', 'Center', '64', 'Wild');
var erikHaula = new Player('Erik Haula', 'Center', '56', 'Wild');
var davidJones = new Player('David Jones', 'Forward', '12', 'Wild');
var mikkoKoivu = new Player('Mikko Koivu', 'Center', '9', 'Wild');
var ninoNiederreiter = new Player('Nino Niederreiter', 'Forward', '22', 'Wild');
var zachParise = new Player('Zach Parise', 'Forward', '11', 'Wild');
var jasonPominville = new Player('Jason Pominville', 'Forward', '29', 'Wild');
var chrisPorter = new Player('Chris Porter', 'Forward', '7', 'Wild');
var jordanSchroeder = new Player('Jordan Schroeder', 'Center', '10', 'Wild');
var jarretStoll = new Player('Jarret Stoll', 'Center', '19', 'Wild');
var thomasVanek = new Player('Thomas Vanek', 'Forward', '26', 'Wild');
var jasonZucker = new Player('Jason Zucker', 'Forward', '16', 'Wild');
var jonasBrodin = new Player('Jonas Brodin', 'Defense', '25', 'Wild');
var mattDumba = new Player('Matt Dumba', 'Defense', '24', 'Wild');
var christianFolin = new Player('Christian Folin', 'Defense', '5', 'Wild');
var nateProsser = new Player('Nate Prosser', 'Defense', '39', 'Wild');
var mikeReilly = new Player('Mike Reilly', 'Defense', '4', 'Wild');
var marcoScandella = new Player('Marco Scandella', 'Defense', '6', 'Wild');
var jaredSpurgeon = new Player('Jared Spurgeon', 'Defense', '46', 'Wild');
var ryanSuter = new Player('Ryan Suter', 'Defense', '20', 'Wild');
var devanDubnyk = new Player('Devan Dubnyk', 'Goalie', '40', 'Wild');
var darcyKuemper = new Player('Darcy Kuemper', 'Goalie', '35', 'Wild');

//assign players to proper teams if teams have been created
function sortPlayersTo(team) {
  for (var i = 0; i < playerArray.length; i++) {
    if (playerArray[i].teamName === team.teamName) {
      team.roster.push(playerArray[i]);
    }
  }
}

//create first team
var wild = new Team('Wild', 'Nordy', 'St. Paul', 'MN', '2000', 'Xcel Energy Center', 'Craig Leipold', 'Bruce Boudreau', 'red and green', 0);
sortPlayersTo(wild);

//create bio function
function getBio(teamName) {
  console.log(
    'The ' + teamName.teamName + ' are an NHL team from ' + teamName.loc.city + ', ' +
    teamName.loc.state + ' and play in the ' + teamName.stadiumName + '. Their mascot is ' + teamName.mascot + ' and their colors are ' + teamName.colors +
    '. They were founded in ' + teamName.yearFounded + ' and are under current ownership of ' + teamName.owner + '. The ' + teamName.teamName +
    ' have won ' + teamName.stanleyCups + ' stanley cups. There are currently ' + teamName.roster.length + ' players on the team, which include: \n' +
    'Coach: ' + teamName.coach + '\n'
    );


      for (var i = 0; i < teamName.roster.length; i++) {
        console.log(
          teamName.roster[i].fullName + '\t\t\t' + 'Position: ' + teamName.roster[i].position + '\t\t\t' + 'Jersey Number: ' + teamName.roster[i].number + '\n'
        );
      }

}

//Call console log
getBio(wild);
