var swaplevel = function (game) {
    this.game = game;
};

swaplevel.prototype = {
    config: null,
    init: function (config) {
        this.config = config;
    },
    create: function () {
        this.game.state.clearCurrentState();
        this.game.state.start('Level', true, false, this.config);
    }
};