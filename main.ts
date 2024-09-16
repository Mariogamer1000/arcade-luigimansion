enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Ghost = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage1`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile1, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile12`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage2`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (controller.right.isPressed()) {
        mySprite.setImage(assets.image`myImage8`)
    }
    if (controller.left.isPressed()) {
        mySprite.setImage(assets.image`myImage9`)
    }
    if (controller.up.isPressed()) {
        mySprite.setImage(assets.image`myImage10`)
    }
    if (controller.down.isPressed()) {
        mySprite.setImage(assets.image`myImage3`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level_3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setCurrentTilemap(tilemap`level_0`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile14`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(myEnemy)
        info.changeScoreBy(1)
        music.play(music.createSoundEffect(WaveShape.Sine, 1, 5000, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        info.setLife(100)
    }
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
info.setLife(100)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
pause(100)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level_3`)
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
