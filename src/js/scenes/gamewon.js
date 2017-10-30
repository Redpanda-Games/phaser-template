var gamewon = function (game) {
    this.game = game;
};

gamewon.prototype = {
    create: function () {
        console.log('gamewon.create');
    },
    update: function() {
        console.log('gamewon.update');

        function onInput() {
            game.state.clearCurrentState();
            game.state.start('Menu');
        }

        this.game.input.keyboard.onDownCallback = onInput;
        this.game.input.onDown.add(onInput);
    },
    shutdown: function() {
        console.log('gamewon.shutdown');
        this.game.input.keyboard.onDownCallback = null;
        this.game.input.onDown.removeAll();
    }
};