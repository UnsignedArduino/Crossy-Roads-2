// +-------------------------+
// | Setup code              |
// +-------------------------+
// Animation definitions
enum ActionKind {
    Foward,
    Backward,
    Left,
    Right,
    Walking,
    Idle,
    Jumping
}
// If chicken has died, `Dead` is 1
let Dead = 0
// The chicken sprite
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
// Keep the chicken in screen
Chicken.setFlag(SpriteFlag.StayInScreen, true)
// Don't show the physics of the chicken
Chicken.setFlag(SpriteFlag.ShowPhysics, false)
// X and Y of the chicken in the tilemap
let ChickenX = 4
let ChickenY = 13
// Starts counting down 10 every second, when 0, game over screen shows
let DeadTimeout = 20
// +-------------------------+
// | Tilemap Key             |
// +-----+-------------------+
// |Key  |Value              |
// +-----+-------------------+
// |0    |Nothing (Reserved) |
// |1    |Water              |
// |2    |Water + Lilypad    |
// |3    |Grass              |
// |4    |Grass + Pollen     |
// |5    |Grass + More Pollen|
// |6    |Grass + Flowers    |
// |7    |Tree               |
// |8    |Road               |
// |9    |Railroad           |
// |10   |Railroad Light Off |
// |11   |Railroad Light On  |
// +-----+-------------------+
// Tilemap repesentation in array
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
// Sets the background color to green - makes up for clear pixels in tiles
scene.setBackgroundColor(7)
// Score set to 0
info.setScore(0)
// Variable holding the foward animation of the chicken
let ChickenFowardAnim = animation.createAnimation(ActionKind.Foward, 100)
// Adds foward animation to `ChickenFowardAnim`
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
// Attaches `ChickenFowardAnim` to `Chicken`
animation.attachAnimation(Chicken, ChickenFowardAnim)
// Wariable holding the backward animation of the chicken
let ChickenBackwardAnim = animation.createAnimation(ActionKind.Backward, 100)
// Adds backward animation to `ChickenBackwardAnim`
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
// Attaches `ChickenBackwardAnim` to `Chicken`
animation.attachAnimation(Chicken, ChickenBackwardAnim)
// Variable holding the left animation of the chicken
let ChickenLeftAnim = animation.createAnimation(ActionKind.Left, 100)
// Adds left animation to `ChickenLeftAnim`
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
// Attaches `ChickenLeftAnim` to `Chicken`
animation.attachAnimation(Chicken, ChickenLeftAnim)
// Variable holding the right animation of the chicken
let ChickenRightAnim = animation.createAnimation(ActionKind.Right, 100)
// Assigns `LeftFlipped` to the same image as the `ChickenLeftAnim`
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
// Flips `LeftFlipped` horrizontally
LeftFlipped.flipX()
// Adds `LeftFlipped` to `ChickenRightAnim`
ChickenRightAnim.addAnimationFrame(LeftFlipped)
// Attaches `ChickenRightAnim` to `Chicken`
animation.attachAnimation(Chicken, ChickenRightAnim)
// Starts `Foward` animation of the chicken
animation.setAction(Chicken, ActionKind.Foward)
