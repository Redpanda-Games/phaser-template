var gameover = function (game) {
    this.game = game;
};

gameover.prototype = {
    create: function () {
        console.log('gameover.create');
    },
    update: function() {
        console.log('gameover.update');

        function onInput() {
            game.state.clearCurrentState();
            game.state.start('Menu');
        }

        this.game.input.keyboard.onDownCallback = onInput;
        this.game.input.onDown.add(onInput);
    },
    shutdown: function() {
        console.log('gameover.shutdown');
        this.game.input.keyboard.onDownCallback = null;
        this.game.input.onDown.removeAll();
    }
};