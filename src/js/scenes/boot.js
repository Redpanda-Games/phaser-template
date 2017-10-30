var boot = function (game) {
    this.game = game;
};

boot.prototype = {
    preload: function () {
        console.log('boot.preload');
        this.game.load.image("loading", "img/loading.png");
    },
    create: function () {
        console.log('boot.create');
        this.game.stage.backgroundColor = '#000000';
        this.game.displayTutorial = true;
        this.game.state.clearCurrentState();
        this.game.state.start('Load');
    }
};