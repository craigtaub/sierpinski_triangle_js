# Sierpinski Triangles

## Algorithm
1. create an empty array which contains triangles 
  - (each triangle is specified by 8 properties: the color, the dimension and six vertices coordinates)

2. create the first black triangle (arbitrary position)

3.  iterate thru all the triangles in the array 
  - IF you find a black triangle -> create 1 white triangle and 3 black ones.

4. Repeat point 3 for each iteration.

### NOTE:
- DONT use canvas, the frameworks dont (e.g react).
- PERHAPS use easier shape e.g. dot