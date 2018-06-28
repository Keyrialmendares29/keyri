var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:500,y:groundY},
                {type: 'sawblade',x:800,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);
        
        function createEnemy(x,y) {
        var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy); 
enemy.velocityX = -1;
enemy.rotationalVelocity = 5;
enemy.onPlayerCollision = function() {
    game.changeIntegrity(-100);
    enemy.fadeOut();
};
enemy.onProjectileCollision = function() {
    game.increaseScore(100);
    enemy.fadeOut();
};
}
createEnemy(400,groundY-50);
createEnemy(800,groundY-70);
createEnemy(1200,groundY-50);

        // BEGIN EDITING YOUR CODE HERE
var hitZoneSize = 25;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
myObstacle.x = 400;
myObstacle.y = 400;
game.addGameItem(myObstacle);    
var obstacleImage = draw.bitmap('img/sawblade.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
function createSawBlade(x,y) {
    // your code goes here
  
    game.addGameItem(myObstacle);    
var obstacleImage = draw.bitmap('img/sawblade.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -x;
obstacleImage.y = -y;
} 
createSawBlade(200, 50);
createSawBlade(300, 60);
createSawBlade(400, 75);

function createReward(x,y){
    var reward =  game.createGameItem('reward',25);
var redSquare = draw.rect(50,50,'yellow');
redSquare.x = -25;
redSquare.y = -25;
reward.addChild(redSquare);
reward.x = x;
reward.y = y;
game.addGameItem(reward);
reward.velocityX = -1;
reward.onPlayerCollision = function() {
    game.increaseScore(100);
    reward.fadeOut();
};
reward.onProjectileCollision = function() {
    game.increaseScore(100);
    reward.fadeOut();
    
};
    }
    createReward(500, 350);
    createReward(400, 300);
    createReward(900, 360);
    };
}; 

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}