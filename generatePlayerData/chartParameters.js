const currSeason = 2019;
const colorGrid = 'white';
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontFamily = 'freeroad';
const radarSize = document.getElementById('radar');
radarSize.width = radarSize.parentNode.clientWidth;
radarSize.height = radarSize.parentNode.clientHeight;
const bar1Size = document.getElementById('bar1');
bar1Size.width = bar1Size.parentNode.clientWidth;
bar1Size.height = bar1Size.parentNode.clientHeight;
const bar2Size = document.getElementById('bar2');
bar2Size.width = bar2Size.parentNode.clientWidth;
bar2Size.height = bar2Size.parentNode.clientHeight;
const bar3Size = document.getElementById('bar3');
bar3Size.width = bar3Size.parentNode.clientWidth;
bar3Size.height = bar3Size.parentNode.clientHeight;
const line1Size = document.getElementById('line1');
line1Size.width = line1Size.parentNode.clientWidth;
line1Size.height = line1Size.parentNode.clientHeight;
// Chart.defaults.global.gridLines = 'white';
const barCTX = document.getElementById('bar1').getContext('2d');
const barData = {
  type: 'bar',
  data: {
    labels: ['FGM', 'FG3M', 'FTM'],
    datasets: [
      {
        label: currSeason + ' ' + "Stephen Curry",
        fillColor: "red",
        data: [],
        backgroundColor: 'rgb(0, 63, 92)',
        borderColor: 'rgb(0, 63, 92)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(0, 63, 92, 1)'
      },
      {
        label: currSeason + ' ' + "Lebron James",
        fillColor: "blue",
        data: [],
        backgroundColor: 'rgb(255, 166, 0)',
        borderColor: 'rgb(255, 166, 0)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(255, 166, 0)'
      }
    ]
  },
  options: {
    animation: {
      duration: 1500,
      easing: 'easeInQuad'
    },
    legend: {
      display: true,
      // labels: {
      //   // This more specific font property overrides the global property
      //   fontColor: 'white'
      // }
    },
    title: {
      fontSize: 24,
      display: true,
      text: 'Field Goals Made Per Game'
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: colorGrid,
        }
      }],
      yAxes: [{
        gridLines: {
          color: colorGrid,
        },
        ticks: {
          beginAtZero: true,
          // max: 30,
          // min: 0,
        }
      }]
    }
  }
}
const bar2CTX = document.getElementById('bar2').getContext('2d');
const bar2Data = {
  type: 'bar',
  data: {
    labels: ['FGA', 'FG3A', 'FTA'],
    datasets: [
      {
        label: currSeason + ' ' + "Stephen Curry",
        fillColor: "red",
        data: [],
        backgroundColor: 'rgb(221, 81, 130)',
        borderColor: 'rgb(221, 81, 130)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(221, 81, 130)'
      },
      {
        label: currSeason + ' ' + "Lebron James",
        fillColor: "blue",
        data: [],
        backgroundColor: 'rgb(255, 110, 84)',
        borderColor: 'rgb(255, 110, 84)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(255, 110, 84)'
      }
    ]
  },
  options: {
    animation: {
      duration: 1500,
      easing: 'easeInQuad'
    },
    legend: { display: true },
    title: {
      fontSize: 24,
      display: true,
      text: 'Field Goal Attempts Per Game'
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: colorGrid,
        }
      }],
      yAxes: [{
        gridLines: {
          color: colorGrid,
        },
        ticks: {
          beginAtZero: true,
          // max: 30,
          // min: 0,
          // stepSize: 5
        }
      }]
    }
  }
}
const bar3CTX = document.getElementById('bar3').getContext('2d');
const bar3Data = {
  type: 'bar',
  data: {
    labels: ['FG%', 'FG3%', 'FT%'],
    datasets: [
      {
        label: currSeason + ' ' + "Stephen Curry",
        fillColor: "red",
        data: [],
        backgroundColor: 'rgb(68, 78, 134)',
        borderColor: 'rgb(68, 78, 134)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(68, 78, 134)'
      },
      {
        label: currSeason + ' ' + "Lebron James",
        fillColor: "blue",
        data: [],
        backgroundColor: 'rgb(149, 81, 150)',
        borderColor: 'rgb(149, 81, 150)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(149, 81, 150)'
      }
    ]
  },
  options: {
    animation: {
      duration: 1500,
      easing: 'easeInQuad'
    },
    legend: { display: true },
    title: {
      fontSize: 24,
      display: true,
      text: 'Field Goal Percentage %'
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: colorGrid,
        }
      }],
      yAxes: [{
        gridLines: {
          color: colorGrid,
        },
        ticks: {
          beginAtZero: true,
          // max: 30,
          // min: 0,
          // stepSize: 5
        }
      }]
    }
  }
}
const radarCTX = document.getElementById('radar').getContext('2d');
const radarData = {
  type: 'radar',
  data: {
    labels: ["PPG", "RPG", "BPG", "SPG", "APG"],
    datasets: [{
      label: currSeason + ' ' + "Stephen Curry",
      backgroundColor: "rgb(222, 66, 91, 0.8)",
      data: [],
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgb(222, 66, 91)",
      // lineTension: 0.5
    }
      ,
    {
      label: currSeason + ' ' + "Lebron James",
      backgroundColor: "rgb(72, 143, 49, 0.8)",
      data: [],
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgb(72, 143, 49)"
    }
    ]
  },
  options: {
    animation: {
      duration: 1500,
      easing: 'easeInQuad'
    },
    scale: {
      gridLines: {
        color: colorGrid
      },
      pointLabels: {
        fontSize: 18
      },
      angleLines: {
        color: colorGrid
      },
      ticks: {
        callback: function () { return "" },
        backdropColor: 'rgb(46, 46, 46)',
        beginAtZero: true,
        // max: 30,
        // min: 0,
        // stepSize: 1
      }
    }
  }
}

const line1CTX = document.getElementById('line1').getContext('2d');
const line1data = {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
      data: [],
      label: "Stephen Curry",
      pointBorderWidth: 2,
      borderColor: "#3e95cd",
      fill: false
    }, {
      data: [],
      label: "Lebron James",
      pointBorderWidth: 2,
      borderColor: "#8e5ea2",
      fill: false
    }
    ]
  },
  options: {
    animation: {
      duration: 1500,
      easing: 'linear'
    },
    title: {
      fontSize: 24,
      display: true,
      text: 'Last 10 Games'
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: colorGrid,
        }
      }],
      yAxes: [{
        gridLines: {
          color: colorGrid,
        },
        ticks: {
          beginAtZero: true,
          // max: 30,
          // min: 0,
          // stepSize: 5
        }
      }]
    }
  }
}
