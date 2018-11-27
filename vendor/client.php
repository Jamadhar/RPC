<!DOCTYPE HTML>  
<html ng-app="psoApp">
    <head>

    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

    <script src="bootstrap/js/bootstrap.min.js"></script>

    <script src="content/js/chart.js"></script>

    </head>

    <body ng-controller="psoController">  
        <div class="container">
        
                <h2 class="text-center">Particle Swarm Optimization (PSO)</h2>
            <hr>
                <button class="btn btn-success center-block" ng-click="runPSO()">Executar</button>
            <hr>
                <canvas id="chart"></canvas>

            <script src="content/js/angular.js"></script>
            <script src="content/js/chartScript.js"></script>
            <script src="content/js/jsonRPC.js"></script>
        </div>  
    </body>
</html>


