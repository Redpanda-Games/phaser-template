var load = function (game) {
    this.game = game;
};

load.prototype = {
    preload: function () {
        console.log('load.preload');
        var loadingBar = this.add.sprite(this.game.world.centerX - 95, this.game.world.centerY, "loading");
        loadingBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(loadingBar);
    },
    create: function () {
        console.log('load.create');
        this.game.state.clearCurrentState();
        this.game.state.start('Menu');
    }
};