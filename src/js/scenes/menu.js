var menu = function (game) {
    this.game = game;
};

menu.prototype = {
    create: function () {
        console.log('menu.create');
    }
};