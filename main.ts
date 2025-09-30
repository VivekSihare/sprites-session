// What happens if player overlaps food
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player2, food) {
    food.setPosition(randint(10, 150), randint(10, 110))
})
// Set background
scene.setBackgroundColor(9)
// Create player
let newPlayer = sprites.create(img`
    . . . . . . . . 
    . . 2 2 2 2 . . 
    . 2 2 2 2 2 2 . 
    . 2 4 2 2 4 2 . 
    . 2 2 2 2 2 2 . 
    . . 2 2 2 2 . . 
    . . 2 . . 2 . . 
    . . . . . . . . 
    `, SpriteKind.Player)
newPlayer.setPosition(80, 60)
// Add an enemy sprite
let enemy = sprites.create(img`
    . . . . . . . . 
    . . e e e e . . 
    . e e e e e e . 
    . e 9 e e 9 e . 
    . e e e e e e . 
    . . e e e e . . 
    . . e . . e . . 
    . . . . . . . . 
    `, SpriteKind.Enemy)
enemy.setPosition(30, 30)
enemy.vx = 50
// enemy moves left-right
enemy.vy = 50
// Bounce enemy off walls
enemy.setBounceOnWall(true)
// Add a collectible coin
let coin = sprites.create(img`
    . . . . . . . . 
    . . 5 5 5 5 . . 
    . 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 . 
    . . 5 5 5 5 . . 
    . . . 5 5 . . . 
    . . . . . . . . 
    `, SpriteKind.Food)
coin.setPosition(120, 80)
