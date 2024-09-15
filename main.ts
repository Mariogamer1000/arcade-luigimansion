enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Ghost = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage1`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage2`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(myEnemy)
        info.changeScoreBy(1)
        music.play(music.createSoundEffect(WaveShape.Sine, 1, 5000, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    }
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
info.setLife(100)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level_0`)
scene.cameraFollowSprite(mySprite)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 5 5 4 4 5 5 4 4 4 . . 
    . . 4 4 4 5 5 4 4 5 5 4 4 4 . . 
    . 4 4 4 4 5 5 4 4 5 5 4 4 4 4 4 
    4 4 . 4 5 4 4 4 4 4 4 5 4 4 . 4 
    4 . . 4 5 5 5 5 5 5 5 5 4 4 . 4 
    4 . . 4 5 5 5 5 5 5 5 5 4 4 . 4 
    4 . . . 4 4 4 4 4 4 4 4 4 . 4 4 
    4 4 . . . 4 4 4 4 4 4 4 . . 4 . 
    4 4 4 4 . . . . . . . . 4 4 4 . 
    4 4 4 4 . . . . . . . 4 4 4 4 . 
    4 4 4 4 . . . . . . . 4 4 4 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.follow(mySprite, 50)
myEnemy.setPosition(126, 57)
mySprite.setPosition(47, 120)
game.setGameOverMessage(false, "Good night!")
game.setGameOverMessage(true, "You saved Mario!")
forever(function () {
    if (mySprite.overlapsWith(myEnemy)) {
        pause(100)
        info.changeLifeBy(-1)
    }
})
