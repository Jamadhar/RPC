<?php
include('autoload.php');
use JsonRPC\Server;
$server = new Server();

$server->getProcedureHandler()

    ->withCallback('evaluateSwarm', function ($swarm) {

        $swarmFitness = [];

        foreach($swarm as $particle)
        {
            $swarmFitness[] = (pow($particle['x'], 2) + pow($particle['y'], 2));
        }

        return $swarmFitness;
    })

    ->withCallback('getGlobalBest', function ($swarm) {

        $best = 9999999;
        $bestIndex;

        foreach($swarm as $key=>$particle)
        {
            if($particle < $best)
            {
                $best = $particle;
                $bestIndex = $key;
            }
        }

        return $key;
    })

    ->withCallback('positionUpdate', function ($start, $end) {
        return mt_rand($start, $end);
    })
    ->withCallback('subtraction', function ($a, $b) {
        return $a - $b;
    })
    ->withCallback('random', function ($a, $b) {
        return $a/$b;
    })
;

echo $server->execute();
