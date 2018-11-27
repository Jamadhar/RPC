var app = angular.module("psoApp",[]);

app.controller("psoController", ['$scope', '$http',function($scope, $http) {

    $scope.upperLimit = 30;
    $scope.underLimit = -30;
    $scope.inertialWeight = 0.9;
    $scope.swarm = [];
    $scope.fitness = [];
    var parametros  = {"jsonrpc": "2.0", "method": "", "params": {}, "id": 1};

    var url = 'http://localhost/jsonrpc/vendor/server.php';
    
    var ctx = document.getElementById("chart").getContext('2d');

    var scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                data: $scope.swarm,
                    /* Parâmetros adicionais de estilo */
                backgroundColor: 'red',
                borderColor: 'black',
                
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            },
                /* Duração de animação (ms) */
            animation: {
                duration: '5000'
            },
            color: 'blue'
        }
    });
    
    for(var i = 0; i < 30; i++)
    {
        var particle = {"x": Math.random()*100 - 50, "y": Math.random()*100 - 50};
        $scope.swarm.push(particle);
    }

    parametros.method = "evaluateSwarm";
    parametros.params = {"swarm": $scope.swarm};


    $http.post(url, parametros)
    .then(function(resp)
    {
        $scope.fitness = resp;
    });

    scatterChart.update();

    setTimeout(function()
    {parametros.method = "getGlobalBest";

    $http.post(url, parametros)
    .then(function(resp)
    {
        $scope.fitness = resp;
    });
},1000);

    $scope.runPSO = function()
    {
        console.log();
        $scope.data = [{x: 0,y: 1}, {x: 1,y: 2},{x: 2,y: 3}];

        scatterChart.data.datasets[0].data = $scope.data;
        scatterChart.update();
    };
}]);

