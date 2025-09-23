scene.set_background_color(2)
newPlayer = sprites.create(img("""
        . . . . . . . .
        . . 2 2 2 2 . .
        . 2 2 2 2 2 2 .
        . 2 4 2 2 4 2 .
        . 2 2 2 2 2 2 .
        . . 2 2 2 2 . .
        . . 2 . . 2 . .
        . . . . . . . .
        """),
    SpriteKind.player)
newPlayer.set_position(80, 60)