scene.setBackgroundColor(1)
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
