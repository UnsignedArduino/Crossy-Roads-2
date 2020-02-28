enum ActionKind {
    Foward,
    Backward,
    Left,
    Right,
    Walking,
    Idle,
    Jumping
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 
9 9 9 9 7 7 7 7 7 7 7 7 7 9 9 9 
9 9 9 7 7 7 7 7 7 7 7 7 7 7 9 9 
9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 9 9 9 9 7 7 7 7 7 7 7 7 7 9 
9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 9 
9 9 9 7 7 7 7 7 7 7 7 7 7 7 9 9 
9 9 9 9 7 7 7 7 7 7 7 7 7 9 9 9 
9 9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 
e e 7 7 e e e e e e e e e 7 7 e 
e e d d e e d d e e d d e e d d 
f f f f f f f f f f f f f f f f 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
f f f f f f f f f f f f f f f f 
e 7 d d e e d d e e d d e e d d 
7 7 7 7 7 e e e 7 7 7 7 7 7 e e 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 
e e 7 7 e e e e e e e e e 7 7 e 
e e d d e e d d e e d d e e d d 
f f f f f f f f f f f f f f f f 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
f f f f f f f f f f f f f f f f 
e 7 d d e e d d f c f d e e d d 
7 7 7 7 7 e e e f f f 7 7 7 e e 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 
e e 7 7 e e e e e e e e e 7 7 e 
e e d d e e d d e e d d e e d d 
f f f f f f f f f f f f f f f f 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
e e d d e e d d e e d d e e d d 
f f f f f f f f f f f f f f f f 
e 7 d d e e d d f 2 f d e e d d 
7 7 7 7 7 e e e f f f 7 7 7 e e 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
}
function update_tilemap () {
    Tile = 0
    for (let Row = 0; Row <= 7; Row++) {
        for (let Column = 0; Column <= 9; Column++) {
            Tile = Tilemap[Row][Column]
            if (Tile == 0) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), myTiles.tile0)
            } else if (Tile == 1) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), myTiles.tile2)
            } else if (Tile == 2) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), sprites.castle.tileGrass1)
            } else if (Tile == 3) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), sprites.castle.tileGrass3)
            } else if (Tile == 4) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), sprites.castle.tileGrass2)
            } else if (Tile == 5) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), sprites.builtin.forestTiles0)
            } else if (Tile == 6) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), sprites.castle.rock0)
            } else if (Tile == 7) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), myTiles.tile3)
            } else if (Tile == 8) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), myTiles.tile4)
            } else if (Tile == 9) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), sprites.vehicle.roadHorizontal)
            } else if (Tile == 10) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), myTiles.tile5)
            } else if (Tile == 11) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), myTiles.tile6)
            } else if (Tile == 12) {
                tiles.setTileAt(tiles.getTileLocation(Column, Row), myTiles.tile7)
            } else {
                control.panic(100)
            }
        }
    }
}
let Tile = 0
let Tilemap: number[][] = []
let Dead = 0
let Chicken = sprites.create(img`
. . . . . . . 2 2 . . . . . . . 
. . . . . 1 1 2 2 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . . 1 d d d d 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
`, SpriteKind.Player)
Chicken.setFlag(SpriteFlag.StayInScreen, true)
Chicken.setFlag(SpriteFlag.ShowPhysics, false)
let ChickenX = 4
let ChickenY = 13
let DeadTimeout = 20
Tilemap = [[0]]
for (let index = 0; index < 7; index++) {
    Tilemap.push([0])
}
for (let List of Tilemap) {
    for (let index = 0; index < 9; index++) {
        List.push(0)
    }
}
info.setScore(0)
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000001040506070802030a090b0c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.rock0,myTiles.tile5,sprites.vehicle.roadHorizontal,myTiles.tile6,myTiles.tile7],
            TileScale.Sixteen
        ))
let ChickenFowardAnim = animation.createAnimation(ActionKind.Foward, 100)
ChickenFowardAnim.addAnimationFrame(img`
. . . . . . . 2 2 . . . . . . . 
. . . . . 1 1 2 2 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . d 1 d d d d 1 d . . . . 
. . . . . 1 d d d d 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
`)
animation.attachAnimation(Chicken, ChickenFowardAnim)
let ChickenBackwardAnim = animation.createAnimation(ActionKind.Backward, 100)
ChickenBackwardAnim.addAnimationFrame(img`
. . . . . . . 2 2 . . . . . . . 
. . . . . 1 1 2 2 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 f 1 1 f 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 4 4 1 1 . . . . . 
. . . . d 1 1 4 4 1 1 d . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . 
`)
animation.attachAnimation(Chicken, ChickenBackwardAnim)
let ChickenLeftAnim = animation.createAnimation(ActionKind.Left, 100)
ChickenLeftAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . 1 1 1 1 1 . . . . . . . . 
. . . 1 1 1 1 1 . . . . . . . . 
. . 4 1 1 1 1 1 . . . . . . . . 
. . 4 1 1 1 1 1 . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 1 d d d d d d 1 d . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . 4 4 4 . . . . . 
`)
animation.attachAnimation(Chicken, ChickenLeftAnim)
let ChickenRightAnim = animation.createAnimation(ActionKind.Right, 100)
let LeftFlipped = img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . 1 1 1 1 1 . . . . . . . . 
. . . 1 1 1 1 1 . . . . . . . . 
. . 4 1 1 1 1 1 . . . . . . . . 
. . 4 1 1 1 1 1 . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 d d d d d d d 1 d . . 
. . . 1 1 1 d d d d d d 1 d . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . . 4 . . . . . . 
. . . . . . . . 4 4 4 . . . . . 
`
LeftFlipped.flipX()
ChickenRightAnim.addAnimationFrame(LeftFlipped)
animation.attachAnimation(Chicken, ChickenRightAnim)
animation.setAction(Chicken, ActionKind.Foward)
update_tilemap()
