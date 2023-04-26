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
    // Doughnut Chart
    // ------------------------------------------------------ //
    var DOUGHNUTCHARTEXMPLE  = $('#doughnutChartExample2');
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
                "Personal Information"
            ],
            datasets: [
                {
                    data: [100],
                    backgroundColor: [
                        green
                    ]
                }]
            }
    });

    // ------------------------------------------------------- //
	// SELECT_DROPDOWN.JS
    // ------------------------------------------------------ //
    
    $('.selectpicker').selectpicker();

});