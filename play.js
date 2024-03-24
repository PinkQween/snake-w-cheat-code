#!/usr/bin/env node

const NSCodes = require('node-secret-codes')

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')

const ui = new UserInterface();
const game = new Game(ui)

// Begin game
game.start()

NSCodes.useCode('\\', () => {
    game.score = 1 + game.score * game.score;
    ui.updateScore(game.score);
})