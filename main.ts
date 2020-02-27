enum ActionKind {
    Foward,
    Backward,
    Left,
    Right,
    Walking,
    Idle,
    Jumping
}
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
// +------------------------+
// | Tilemap Key            |
// +-----+------------------+
// |Key  |Value             |
// +-----+------------------+
// |0    |Nothing (Reserved)|
// |1    |Water             |
// |2    |Water + Lilypad   |
// |3    |Grass             |
// |4    |Grass + Pollen    |
// |5    |Grass + Pollen*2  |
// |6    |Grass + Flowers   |
// |7    |Tree              |
// |8    |Road              |
// |9    |Railroad          |
// |10   |Railroad Light Off|
// |11   |Railroad Light On |
// +-----+------------------+
let tilemap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
scene.setBackgroundColor(7)
info.setScore(0)
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
