var level = function (game) {
    this.game = game;
};

level.prototype = {
    config: {},
    init: function (config) {
        console.log('level.init');
        this.config = config;
    },
    create: function () {
        console.log('level.create');
    },
    update: function () {
        console.log('level.update');
    }
};