$(document).ready(function () {


    var violet = '#FF3097',
        red    = '#F0404C',
        blue   = '#5A74FF'
        gray   = '#F3F3FC',
        green  = '#00C3A2';

    // ------------------------------------------------------- //
    // Charts Gradients
    // ------------------------------------------------------ //
    var ctx1 = $("canvas").get(0).getContext("2d");
    var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
    gradient1.addColorStop(0, 'rgba(210, 114, 181, 0.91)');
    gradient1.addColorStop(1, 'rgba(177, 62, 162, 0)');

    var gradient2 = ctx1.createLinearGradient(10, 0, 150, 300);
    gradient2.addColorStop(0, 'rgba(252, 117, 176, 0.84)');
    gradient2.addColorStop(1, 'rgba(250, 199, 106, 0.92)');


    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    var BARCHARTEXMPLE    = $('#barChartExample');
    var barChartExample = new Chart(BARCHARTEXMPLE, {
        type: 'bar',
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                    display: false,
                    gridLines: {
                        color: '#fff'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    display: false,
                    gridLines: {
                        color: '#fff'
                    }
                }]
            },
            legend: false
        },
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        green,
                        green,
                        green,
                        green,
                        green,
                        green,
                        green,
                        green,
                        green,
                        green,
                        green,
                        green,
                        green,
                        green
                    ],
                    data: [30, 59, 80, 81, 56, 55, 40, 30, 45, 80, 44, 36, 66, 58],
                },
                {
                    label: "Data Set 2",
                    backgroundColor: [
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray,
                        gray
                    ],
                    data: [30, 59, 80, 81, 56, 55, 40, 30, 45, 80, 44, 36, 66, 58],
                }
            ]
        }
    });


    // ------------------------------------------------------- //
    // Doughnut Chart
    // ------------------------------------------------------ //
    var DOUGHNUTCHARTEXMPLE  = $('#doughnutChartExample');
    var pieChartExample = new Chart(DOUGHNUTCHARTEXMPLE, {
        type: 'doughnut',
        options: {
            cutoutPercentage: 80,
            legend: {
                position: 'right'
            }
        },
        data: {
            labels: [
                "Personal Information",
                "Educartion",
                "Work History"
            ],
            datasets: [
                {
                    data: [30, 40, 30],
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    backgroundColor: [
                        green,
                        violet,
                        blue
                    ]
                }]
            }
    });

});