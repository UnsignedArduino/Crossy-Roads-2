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
scene.onOverlapTile(SpriteKind.Food, sprites.vehicle.roadHorizontal, function (sprite, location) {
    sprite.destroy()
})
function make_lilypad_river (X: number) {
    for (let Index = 0; Index <= 9; Index++) {
        set_tile(X, Index, 7)
    }
    for (let index = 0; index < Math.randomRange(4, 8); index++) {
        set_tile(X, Math.randomRange(1, 8), 8)
    }
    set_tile(X, 1, 8)
}
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    Projectiles.push(sprite)
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile6, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tileGrass1, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, sprites.castle.tileGrass3, function (sprite, location) {
    sprite.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ChickenX += -1
    Chicken.setVelocity(0, 0)
    if (!(Chicken.overlapsWith(Log))) {
        Logging = 0
    }
    tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
    animation.setAction(Chicken, ActionKind.Left)
    if (Chicken.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles0)) {
        ChickenX += 1
    } else if (Chicken.tileKindAt(TileDirection.Center, sprites.castle.rock0)) {
        ChickenX += 1
    } else if (Chicken.tileKindAt(TileDirection.Center, myTiles.tile3)) {
        pause(25)
        if (Logging == 0) {
            Chicken.destroy(effects.fountain, 100)
            Dead = 1
        }
    }
    tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ChickenY += 1
    Chicken.setVelocity(0, 0)
    if (!(Chicken.overlapsWith(Log))) {
        Logging = 0
    }
    tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
    animation.setAction(Chicken, ActionKind.Backward)
    if (Chicken.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles0)) {
        ChickenY += -1
    } else if (Chicken.tileKindAt(TileDirection.Center, sprites.castle.rock0)) {
        ChickenY += -1
    } else if (Chicken.tileKindAt(TileDirection.Center, myTiles.tile3)) {
        pause(25)
        if (Logging == 0) {
            Chicken.destroy(effects.fountain, 100)
            Dead = 1
        }
    }
    tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.rock0, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile5, function (sprite, location) {
    sprite.destroy()
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    Dump = Projectiles.removeAt(Projectiles.indexOf(sprite))
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile3, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tileGrass3, function (sprite, location) {
    sprite.destroy()
})
function set_tile (X: number, Y: number, TileNum: number) {
    List = Tilemap[X]
    List[Y] = TileNum
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.setVelocity(32, 0)
    Logging = 1
})
scene.onOverlapTile(SpriteKind.Food, sprites.castle.rock0, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile7, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.spray, 100)
    Dead = 1
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile2, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile6, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    otherSprite.destroy(effects.fire, 100)
})
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
                control.panic(200)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.follow(otherSprite, 2000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ChickenX += 1
    Chicken.setVelocity(0, 0)
    if (!(Chicken.overlapsWith(Log))) {
        Logging = 0
    }
    tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
    animation.setAction(Chicken, ActionKind.Right)
    if (Chicken.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles0)) {
        ChickenX += -1
    } else if (Chicken.tileKindAt(TileDirection.Center, sprites.castle.rock0)) {
        ChickenX += -1
    } else if (Chicken.tileKindAt(TileDirection.Center, myTiles.tile3)) {
        pause(25)
        if (Logging == 0) {
            Chicken.destroy(effects.fountain, 100)
            Dead = 1
        }
    }
    tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile4, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, sprites.castle.tileGrass2, function (sprite, location) {
    sprite.destroy()
})
function make_river (X: number) {
    for (let Index = 0; Index <= 9; Index++) {
        set_tile(X, Index, 7)
    }
}
scene.onOverlapTile(SpriteKind.Projectile, sprites.builtin.forestTiles0, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile4, function (sprite, location) {
    sprite.destroy(effects.fountain, 100)
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile5, function (sprite, location) {
    sprite.destroy()
})
function make_road (X: number) {
    for (let Index = 0; Index <= 9; Index++) {
        set_tile(X, Index, 9)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ChickenY += -1
    Chicken.setVelocity(0, 0)
    if (!(Chicken.overlapsWith(Log))) {
        Logging = 0
    }
    tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
    animation.setAction(Chicken, ActionKind.Foward)
    if (Chicken.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles0)) {
        ChickenY += 1
    } else if (Chicken.tileKindAt(TileDirection.Center, sprites.castle.rock0)) {
        ChickenY += 1
    } else if (Chicken.tileKindAt(TileDirection.Center, myTiles.tile3)) {
        pause(25)
        if (Logging == 0) {
            Chicken.destroy(effects.fountain, 100)
            Dead = 1
        }
    }
    tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
    Timeout = 100
})
scene.onOverlapTile(SpriteKind.Food, sprites.builtin.forestTiles0, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, sprites.castle.tileGrass1, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile7, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile2, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tileGrass2, function (sprite, location) {
    sprite.destroy()
})
function make_terrain (X: number) {
    for (let Index = 0; Index <= 9; Index++) {
        set_tile(X, Index, 1)
    }
    set_tile(X, 0, 5)
    set_tile(X, 9, 5)
    set_tile(X, Math.randomRange(1, 8), 5)
    set_tile(X, Math.randomRange(1, 8), 6)
    for (let Index = 0; Index <= 2; Index++) {
        if (Math.percentChance(50)) {
            set_tile(X, Math.randomRange(1, 8), Index + 2)
        }
    }
}
let Eagle: Sprite = null
let SelectedTile = 0
let LastTile = 0
let Car: Sprite = null
let Value = 0
let Dump: Sprite = null
let Log: Sprite = null
let Tile = 0
let Column = 0
let Row = 0
let List: number[] = []
let Projectiles: Sprite[] = []
let Tilemap: number[][] = []
let Logging = 0
let Dead = 0
let Timeout = 0
let ChickenY = 0
let ChickenX = 0
let Chicken: Sprite = null
Chicken = sprites.create(img`
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
ChickenX = 4
ChickenY = 4
Timeout = 100
let DeadTimeout = 20
Dead = 0
Logging = 0
Tilemap = [[1]]
Projectiles = sprites.allOfKind(SpriteKind.Projectile)
for (let index = 0; index < 7; index++) {
    Tilemap.push([1])
}
for (let List of Tilemap) {
    for (let index = 0; index < 9; index++) {
        List.push(1)
    }
}
for (let Index = 0; Index <= 2; Index++) {
    List = Tilemap[Index + 5]
    for (let IndexII = 0; IndexII <= 9; IndexII++) {
        List[IndexII] = 5
    }
}
for (let Index = 0; Index <= 2; Index++) {
    List = Tilemap[Index + 2]
    for (let IndexII = 0; IndexII <= 1; IndexII++) {
        List[IndexII] = 5
    }
    for (let IndexII = 0; IndexII <= 1; IndexII++) {
        List[IndexII + 8] = 5
    }
}
for (let index = 0; index < Math.randomRange(1, 4); index++) {
    Row = Math.randomRange(0, 7)
    Column = Math.randomRange(0, 9)
    Tile = Tilemap[Row][Column]
    if (Tile == 1) {
        set_tile(Row, Column, 2)
    }
}
for (let index = 0; index < Math.randomRange(1, 4); index++) {
    Row = Math.randomRange(0, 7)
    Column = Math.randomRange(0, 9)
    Tile = Tilemap[Row][Column]
    if (Tile == 1) {
        set_tile(Row, Column, 3)
    }
}
for (let index = 0; index < Math.randomRange(1, 4); index++) {
    Row = Math.randomRange(0, 7)
    Column = Math.randomRange(0, 9)
    Tile = Tilemap[Row][Column]
    if (Tile == 1) {
        set_tile(Row, Column, 4)
    }
}
set_tile(3, 7, 5)
set_tile(2, 3, 5)
set_tile(2, 5, 6)
make_road(1)
make_terrain(0)
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
tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
game.showLongText("Welcome to Crossy Roads 2!", DialogLayout.Bottom)
game.showLongText("In this game, you will have to get as far as you can without getting abducted, ran over, or drowning.", DialogLayout.Bottom)
game.showLongText("Use the joystick/d-pad to move your chicken around.", DialogLayout.Bottom)
game.showLongText("Have fun!", DialogLayout.Bottom)
game.onUpdateInterval(100, function () {
    if (Math.percentChance(25)) {
        Value = Math.randomRange(1, 3)
        if (Value == 1) {
            Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 4 2 2 2 2 2 2 c 2 . . . 
. . 2 c 4 2 2 2 2 2 2 c c 2 . . 
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
. 2 c 2 e e e e e e e b c 4 2 2 
. 2 2 e b b e b b b e e b 4 2 2 
. 2 e b b b e b b b b e 2 2 2 2 
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
. e e e e e e f e e e f e 2 d d 
. e e e e e e f e e f e e e 2 d 
. e e e e e e f f f e e e e e e 
. e f f f f e e e e f f f e e e 
. . f f f f f e e f f f f f e . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
        } else if (Value == 2) {
            Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . 6 9 6 6 6 6 6 6 c 6 . . . 
. . 6 c 9 6 6 6 6 6 6 c c 6 . . 
. 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
. 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
. 6 6 8 b b 8 b b b 8 8 b 9 6 6 
. 6 8 b b b 8 b b b b 8 6 6 6 6 
. 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
. 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
. 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
. 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
. 8 f f f f 8 8 8 8 f f f 8 8 8 
. . f f f f f 8 8 f f f f f 8 . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
        } else {
            Car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 d 3 3 3 3 3 3 c 3 . . . 
. . 3 c d 3 3 3 3 3 3 c c 3 . . 
. 3 c c d d d d d d 3 c c d 3 d 
. 3 c 3 a a a a a a a b c d 3 3 
. 3 3 a b b a b b b a a b d 3 3 
. 3 a b b b a b b b b a 3 3 3 3 
. a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
. a a a a a a f a a a f a 3 d d 
. a a a a a a f a a f a a a 3 d 
. a a a a a a f f f a a a a a a 
. a f f f f a a a a f f f a a a 
. . f f f f f a a f f f f f a . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
        }
        Car.setFlag(SpriteFlag.DestroyOnWall, true)
        tiles.placeOnRandomTile(Car, sprites.vehicle.roadHorizontal)
        Car.x = 0
    }
    if (Math.percentChance(25)) {
        Log = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
e e e e e e e e e e e e e e e e 
e b b b b b b b b b b b b b b b 
e e e e e e e b b b e e e e e e 
b b b e e e e e e e e e b b b e 
e e b b b b b b b b b b b e b b 
e e e e e e e e e e e e e e e e 
e e e e b b b b b b b b b e e e 
b b b b b b b e e e e e b b b b 
e e e e e e b b b b b b b e e e 
e e e e e e e e e e e e e e e e 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 32, 0)
        Log.setKind(SpriteKind.Food)
        Log.setFlag(SpriteFlag.DestroyOnWall, true)
        tiles.placeOnRandomTile(Log, myTiles.tile3)
        Log.x = 0
    }
    if (Logging == 1) {
        ChickenX += 32 / 16 / 10
    }
    if (ChickenY < 3) {
        ChickenY += 1
        tiles.placeOnTile(Chicken, tiles.getTileLocation(ChickenX, ChickenY))
        Tilemap.reverse()
        Tilemap.push([1])
        Tilemap.reverse()
        List = Tilemap[0]
        for (let index = 0; index < 9; index++) {
            List.push(1)
        }
        for (let Value of Projectiles) {
            Value.y += 16
        }
        LastTile = SelectedTile
        SelectedTile = Math.randomRange(1, 4)
        if (LastTile == 3) {
            while (SelectedTile == 3) {
                SelectedTile = Math.randomRange(1, 4)
            }
        }
        if (LastTile == 4) {
            while (SelectedTile == 4) {
                SelectedTile = Math.randomRange(1, 4)
            }
        }
        if (SelectedTile == 1) {
            make_road(0)
        } else if (SelectedTile == 2) {
            make_terrain(0)
        } else if (SelectedTile == 3) {
            make_lilypad_river(0)
        } else {
            make_river(0)
        }
        info.changeScoreBy(1)
        update_tilemap()
    }
    if (Dead) {
        if (DeadTimeout > 0) {
            DeadTimeout += -1
        } else {
            game.over(false, effects.melt)
        }
    }
    if (Timeout > 0) {
        Timeout += -1
    } else {
        Timeout = 100
        Dead = 1
        Eagle = sprites.create(img`
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . e e e e e . . . . . . . . 
e e e e e e e e e e e e e e e e e e e . 
e e e e e e e e e e e e e e e e e e e . 
e e e e e e e e e e e e e e e e e e e . 
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . e e e e e . . . . . . . . 
. . . . . . . 1 1 1 1 1 . . . . . . . . 
. . . . . . . 1 f 1 f 1 . . . . . . . . 
. . . . . . . 1 1 1 1 1 . . . . . . . . 
. . . . . . . 1 1 4 1 1 . . . . . . . . 
. . . . . . . . . 4 . . . . . . . . . . 
`, SpriteKind.Enemy)
        Eagle.setPosition(Chicken.x, 0)
        Eagle.setVelocity(0, 200)
        Chicken.setFlag(SpriteFlag.DestroyOnWall, true)
        Eagle.setFlag(SpriteFlag.DestroyOnWall, true)
    }
    if (Projectiles.length >= 100) {
        console.log("Array has overflowed. Clearing first 25 elements!")
        for (let index = 0; index < 25; index++) {
            Dump = Projectiles.shift()
        }
    }
    console.log(Projectiles.length)
})
game.onUpdate(function () {
    if (ChickenX < 0) {
        ChickenX = 0
    }
    if (ChickenX > 9) {
        ChickenX = 9
    }
    if (ChickenY < 0) {
        ChickenY = 0
    }
    if (ChickenY > 7) {
        ChickenY = 7
    }
})
