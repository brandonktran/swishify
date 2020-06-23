let barChart;
let bar2Chart;
let bar3Chart;
let radarChart;
// let line1Chart = new Chart(line1CTX, line1data);
let player1ID = 115;
let player2ID = 237;
let currentPlayer = 0;
const statArray = {
    'MIN': 'min', 'PPG': 'ppg', 'OPPG': 'oppg',
    'FG%': 'fgp',
    'FT%': 'ftp',
    'ORPG': 'orpg',
    'DREBPG': 'drpg',
    'RPG': 'trpg',
    'APG': 'apg',
    'TOVPG': 'tpg',
    'STLPG': 'spg',
    'BLKPG': 'bpg'
    // 'SEASON':
}
const teams = [{ teamID: "1610612737", abbreviation: "ATL", name: "Atlanta Hawks" },
{ teamID: "1610612738", abbreviation: "BOS", name: "Boston Celtics" },
{ teamID: "1610612739", abbreviation: "CLE", name: "Cleveland Cavaliers" },
{ teamID: "1610612740", abbreviation: "NOP", name: "New Orleans Pelicans" },
{ teamID: "1610612741", abbreviation: "CHI", name: "Chicago Bulls" },
{ teamID: "1610612742", abbreviation: "DAL", name: "Dallas Mavericks" },
{ teamID: "1610612743", abbreviation: "DEN", name: "Denver Nuggets" },
{ teamID: "1610612744", abbreviation: "GSW", name: "Golden State Warriors" },
{ teamID: "1610612745", abbreviation: "HOU", name: "Houston Rockets" },
{ teamID: "1610612746", abbreviation: "LAC", name: "LA Clippers" },
{ teamID: "1610612747", abbreviation: "LAL", name: "Los Angeles Lakers" },
{ teamID: "1610612748", abbreviation: "MIA", name: "Miami Heat" },
{ teamID: "1610612749", abbreviation: "MIL", name: "Milwaukee Bucks" },
{ teamID: "1610612750", abbreviation: "MIN", name: "Minnesota Timberwolves" },
{ teamID: "1610612751", abbreviation: "BKN", name: "Brooklyn Nets" },
{ teamID: "1610612752", abbreviation: "NYK", name: "New York Knicks" },
{ teamID: "1610612753", abbreviation: "ORL", name: "Orlando Magic" },
{ teamID: "1610612754", abbreviation: "IND", name: "Indiana Pacers" },
{ teamID: "1610612755", abbreviation: "PHI", name: "Philadelphia 76ers" },
{ teamID: "1610612756", abbreviation: "PHX", name: "Phoenix Suns" },
{ teamID: "1610612757", abbreviation: "POR", name: "Portland Trail Blazers" },
{ teamID: "1610612758", abbreviation: "SAC", name: "Sacramento Kings" },
{ teamID: "1610612759", abbreviation: "SAS", name: "San Antonio Spurs" },
{ teamID: "1610612760", abbreviation: "OKC", name: "Oklahoma City Thunder" },
{ teamID: "1610612761", abbreviation: "TOR", name: "Toronto Raptors" },
{ teamID: "1610612762", abbreviation: "UTA", name: "Utah Jazz" },
{ teamID: "1610612763", abbreviation: "MEM", name: "Memphis Grizzlies" },
{ teamID: "1610612764", abbreviation: "WAS", name: "Washington Wizards" },
{ teamID: "1610612765", abbreviation: "DET", name: "Detroit Pistons" },
{ teamID: "1610612766", abbreviation: "CHA", name: "Charlotte Hornets" }]
const lastSeason = 19;
const position1 = document.getElementById('position1');
const team1 = document.getElementById('team1');
const height1 = document.getElementById('height1');
const weight1 = document.getElementById('weight1');
const position2 = document.getElementById('position2');
const team2 = document.getElementById('team2');
const height2 = document.getElementById('height2');
const weight2 = document.getElementById('weight2');
const dropdown = document.getElementById('myUL');
const search = document.getElementById('search');
const changeOne = document.getElementById('changePlayer1');
changeOne.addEventListener('click', changePlayer);
const changeTwo = document.getElementById('changePlayer2');
changeTwo.addEventListener('click', changePlayer);
// search.addEventListener('click', findPlayer);
const season = document.getElementById('season');


$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2019/team_stats_rankings.json',
    type: 'GET',
    success: function (data) {
        let team = data.league.standard.regularSeason.teams
        for (let i = 0; i < team.length; i++) {
            if (team[i].abbreviation === 'LAC') {
                team = team[i];
            }
        }
        console.log(team);
        barData.data.datasets[0].data = [team.fgp.avg * 100, team.ftp.avg * 100];
        bar2Data.data.datasets[0].data = [team.ppg.avg, team.oppg.avg];
        bar3Data.data.datasets[0].data = [team.eff.avg];
        radarData.data.datasets[0].data = [team.ppg.avg, team.trpg.avg, team.bpg.avg, team.spg.avg, team.apg.avg];
        barChart = new Chart(barCTX, barData);
        bar2Chart = new Chart(bar2CTX, bar2Data);
        bar3Chart = new Chart(bar3CTX, bar3Data);
        radarChart = new Chart(radarCTX, radarData);
        createTable(team, 0, 'Los Angeles Clippers');
    },
    error: function (error) {
        console.log(error);
    }
});

$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2019/team_stats_rankings.json',
    type: 'GET',
    success: function (data) {
        let team = data.league.standard.regularSeason.teams
        for (let i = 0; i < team.length; i++) {
            if (team[i].abbreviation === 'LAL') {
                team = team[i];
            }
        }
        console.log(team);
        barData.data.datasets[1].data = [team.fgp.avg * 100, team.ftp.avg * 100];
        bar2Data.data.datasets[1].data = [team.ppg.avg, team.oppg.avg];
        bar3Data.data.datasets[1].data = [team.eff.avg];
        radarData.data.datasets[1].data = [team.ppg.avg, team.trpg.avg, team.bpg.avg, team.spg.avg, team.apg.avg];
        barChart.update();
        bar2Chart.update();
        bar3Chart.update();
        radarChart.update();
        createTable(team, 1, 'Los Angeles Lakers');
    },
    error: function (error) {
        console.log(error);
    }
});

function searchForPlayer() {
    document.getElementById("myUL").className = "show";
}


function getPlayerStats(player, playerNum) {
    document.getElementById("myUL").className = "noshow";
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/${season.value}/team_stats_rankings.json`,
        type: 'GET',
        success: function (data) {
            let team = data.league.standard.regularSeason.teams
            for (let i = 0; i < team.length; i++) {
                if (team[i].abbreviation === player) {
                    team = team[i];
                }
            }
            console.log(team);
            barData.data.datasets[playerNum].data = [team.fgp.avg * 100, team.ftp.avg * 100];
            bar2Data.data.datasets[playerNum].data = [team.ppg.avg, team.oppg.avg];
            bar3Data.data.datasets[playerNum].data = [team.eff.avg];
            radarData.data.datasets[playerNum].data = [team.ppg.avg, team.trpg.avg, team.bpg.avg, team.spg.avg, team.apg.avg];
            createTable(team, playerNum, team.name + ' ' + team.nickname);
            barChart.update();
            bar2Chart.update();
            bar3Chart.update();
            radarChart.update();


            barData.data.datasets[playerNum].label = season.value + ' ' + team.name + ' ' + team.nickname;
            bar2Data.data.datasets[playerNum].label = season.value + ' ' + team.name + ' ' + team.nickname;
            bar3Data.data.datasets[playerNum].label = season.value + ' ' + team.name + ' ' + team.nickname;
            radarData.data.datasets[playerNum].label = season.value + ' ' + team.name + ' ' + team.nickname;
            // line1data.data.datasets[playerNum].label = team.name + ' ' + team.nickname;
            barChart.update();
            bar2Chart.update();
            bar3Chart.update();
            radarChart.update();
            // line1Chart.update();
            // createTable(data, currentPlayer, 0, player.textContent);
            document.getElementById('img' + (currentPlayer + 1)).src = `http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${team.abbreviation.toLowerCase()}.png`;
            document.getElementById(`player${currentPlayer + 1}Name`).textContent = team.name + ' ' + team.nickname;
            // if (data.data.length === 0) {
            //     console.log('no regular season average data');
            //     barData.data.datasets[playerNum].data = [];
            //     bar2Data.data.datasets[playerNum].data = [];
            //     bar3Data.data.datasets[playerNum].data = [];
            //     radarData.data.datasets[playerNum].data = [];
            //     barChart.update();
            //     bar2Chart.update();
            //     bar3Chart.update();
            //     radarChart.update();
            // }
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function changePlayer(event) {
    if (event.currentTarget.id === 'changePlayer2') {
        currentPlayer = 1;
    } else if (event.currentTarget.id === 'changePlayer1') {
        currentPlayer = 0;
    }
    console.log(currentPlayer);
}


function createTable(data, currentPlayer, name) {
    let row;
    if (currentPlayer === 0) {
        row = document.getElementById('firstRow');
        row.innerHTML = '';
    } else if (currentPlayer === 1) {
        row = document.getElementById('secondRow');
        row.innerHTML = '';
    }
    const first = document.createElement('td');
    first.textContent = name;
    row.append(first);
    for (let prop in statArray) {
        const elem = document.createElement('td');
        elem.textContent = data[statArray[prop]].avg;
        row.append(elem);
    }
}


function createSeasonDropdown() {
    const dropdown = document.getElementById('season');
    for (let i = lastSeason; i > 17; i--) {
        const elem = document.createElement('option');
        if (i.length < 2) {
            elem.value = '20' + '0' + i;
        } else {
            elem.value = elem.value = '20' + i;
        }
        elem.textContent = `'${i}` + `-'${i + 1}`;
        dropdown.append(elem);
    }
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("li");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function createTeamDropDown() {
    for (let i = 0; i < teams.length; i++) {
        const item = document.createElement('li');
        item.textContent = teams[i].name;
        item.addEventListener('click', function () {
            getPlayerStats(teams[i].abbreviation, currentPlayer)
        });
        item.id = teams[i].abbreviation;
        dropdown.append(item);
    }
}

createSeasonDropdown()
createTeamDropDown();


// $.ajax({
//     url: 'https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2019/team_stats_rankings.json',
//     type: 'GET',
//     success: function (data) {
//         const team = data.league.standard.regularSeason.teams
//         for (let i = 8; i <= 37; i++) {
//             teams[i - 8] = { teamID: team[i].teamId, abbreviation: team[i].abbreviation, name: team[i].name + ' ' + team[i].nickname }
//         }
//         console.log(teams)
//     },
//     error: function (error) {
//         console.log(error);
//     }
// });

// http://data.nba.net/10s/prod/v1/2019/team_stats_rankings.json