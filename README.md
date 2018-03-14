# Sierpinski Triangles

## Algorithm
1. create an empty array which contains triangles 
  - (each triangle is specified by 8 properties: the color, the dimension and six vertices coordinates)

2. create the first black triangle (arbitrary position)

3.  iterate thru all the triangles in the array 
  - IF you find a black triangle -> create 1 white triangle and 3 black ones.

4. Repeat point 3 for each iteration.

### Native DOM notes
W/O requestAnimationFrame:
- wipe DOM
- write 1 at a time to DOM
- repeat
- RESULTS: 0.4fps

With requestAnimationFrame:
- reset array
- write 1 at time array, 
- on requestAnimationFrame write to DOM at once
- RESULTS: 50fps


### Performance notes:
- if low FPS:
  - everything on browser is slower to react
  - if click mouse/keyboard, will halt browsers progress
- if draw on top, much heavier than if clear first.