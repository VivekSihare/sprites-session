# Lesson 1: Sprites

Welcome to your very first Micro:Bit Arcade Project!
In this lession, you'll be creating a simple program that shows the sprites

---

## Learning Objectives
- By the end of this session, students will be able to:
- Understand what a sprite is in a game.
- Create a player sprite and position it on the screen.
- Use basic blocks to show and control the sprite

## Key Concepts
- Concept	Explanation
- Sprite	A sprite is a character or object in a game, like a player, enemy, or coin.
- Position (x, y)	Every sprite has a position on the screen grid, using coordinates (horizontal x, vertical y).
- Image	A sprite is created using a pixel art image.

## Materials Needed
- Devices (computers or tablets) with internet access
- MakeCode Arcade account (no sign-in required)
- Optional: Micro:bit Arcade-compatible device for uploading

## Steps

### 1. Open MakeCode
  Go to [Make Code for Micro:Bit](https://arcade.makecode.com/) in your browser
  
### 2. Start a New Project
  - Click on New Project
  - Name it something like "SpriteTest"
    
### 3. Set the Background Color
- Go to the Scene category.
- Drag out: set background color to ____
- Place it inside the on start block.
- Choose a background color (e.g. 9 = light blue).
  
### 4. Create a Player Sprite
 - Go to the Sprites category.
 - Drag out: set mySprite to sprite of kind Player
 - Attach it under the background block.
 - Click on the small gray square inside the block to draw your sprite (e.g. a face or character).
 - Rename mySprite to player (optional, for clarity).
   
### 5. Set Sprite Position
- Still in Sprites, drag out:
- mySprite set position to x: 80 y: 60
- Change mySprite to player (or whatever name you used).

### 6. Create the Enemy Sprite and set position
  - From Sprites, drag another set mySprite to sprite of kind.
  - Rename it to enemy.
  - Set kind to Enemy.
  - Draw your enemy character.
  - Add set enemy position to x 30 y 30.
  - From Sprites → set velocity, make the enemy move (for example vx = 50, vy = 50).
  - From Sprites, use set enemy bounce on wall and set it to true.

### 7. Create the Coin (Food) and set position
  - From Sprites, drag another set mySprite to sprite of kind.
  - Rename it to coin.
  - Set kind to Food.
  - Draw a small coin or food item.
  - Add set coin position to x 120 y 80.

### 8. Test Your Program
  - Whatch the **simulator** on the left side of MakeCode
  - it should display sprite which has been created.

### 9. Download Your Program
  - Click **Download**
  - Select hardware as **Kitronik Arcade for micro:bit**
  - Save the .hex file
  - Drag the '.hex' file onto MICROBIT Drive
