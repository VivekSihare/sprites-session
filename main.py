# What happens if player overlaps food

def on_on_overlap(player2, food):
    food.set_position(randint(10, 150), randint(10, 110))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

# Set background
scene.set_background_color(9)
# Create player
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
# Add an enemy sprite
enemy = sprites.create(img("""
        . . . . . . . .
        . . e e e e . .
        . e e e e e e .
        . e 9 e e 9 e .
        . e e e e e e .
        . . e e e e . .
        . . e . . e . .
        . . . . . . . .
        """),
    SpriteKind.enemy)
enemy.set_position(30, 30)
enemy.vx = 50
# enemy moves left-right
enemy.vy = 50
# Bounce enemy off walls
enemy.set_bounce_on_wall(True)
# Add a collectible coin
coin = sprites.create(img("""
        . . . . . . . .
        . . 5 5 5 5 . .
        . 5 5 5 5 5 5 .
        . 5 5 5 5 5 5 .
        . 5 5 5 5 5 5 .
        . . 5 5 5 5 . .
        . . . 5 5 . . .
        . . . . . . . .
        """),
    SpriteKind.food)
coin.set_position(120, 80)