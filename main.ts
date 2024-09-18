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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    music.play(music.createSong(hex`0078000408020500001c00010a006400f4016400000400000000000000000000000000050000041e0004000800011e0c001000012710001400012018001c00012720002400012704001c00100500640000041e000004000000000000000000000000000a040004060024002800012a07001c00020a006400f401640000040000000000000000000000000000000003060024002800012a08001c000e050046006603320000040a002d0000006400140001320002010002060024002800012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800060024002500010a`), music.PlaybackMode.UntilDone)
    game.splash("You found a key!")
    tiles.setCurrentTilemap(tilemap`level_01`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile22`)
    info.changeScoreBy(1)
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
        tiles.setCurrentTilemap(tilemap`level_5`)
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
tiles.setTilemap(tilemap`level_3`)
info.setLife(100)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
pause(100)
controller.moveSprite(mySprite)
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
