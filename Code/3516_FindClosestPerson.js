/** You are given three integers x, y, and z, representing the positions of three people on a number line:

    x is the position of Person 1.
    y is the position of Person 2.
    z is the position of Person 3, who does not move.

Both Person 1 and Person 2 move toward Person 3 at the same speed.

Determine which person reaches Person 3 first:

    Return 1 if Person 1 arrives first.
    Return 2 if Person 2 arrives first.
    Return 0 if both arrive at the same time.

Return the result accordingly. */

/**
 @param {number} x
 @param {number} y
 @param {number} z
 *@return {number}
**/
var findClosest = function(x, y, z) {

    let x_Dist = x - z;
    let y_Dist = y - z;

    if(x_Dist < 0)
        x_Dist = - x_Dist;
    
    if(y_Dist < 0)
        y_Dist = - y_Dist;

    if(x_Dist < y_Dist)
        return 1;
    else if(x_Dist > y_Dist)
        return 2;
    
    return 0;
};
