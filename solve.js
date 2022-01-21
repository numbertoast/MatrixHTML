class twoxtwo{
  constructor(x1,x2,y1,y2){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.determinant = x1*y2-x2*y1;
  }
}
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
function solve2(x,y,x1,x2,y1,y2){
    determinant = x1*y2-x2*y1;
    inverse = {x1:y2/determinant,x2:-x2/determinant,y1:-y1/determinant,y2:x1/determinant};
    console.log(inverse.x1,inverse.x2,inverse.y1,inverse.y2);
    solution = {x:inverse.x1*x+inverse.x2*y,y:inverse.y1*x+inverse.y2*y}
    console.log(solution);
    return(solution);
}
function solve2withinputs(){
    x=parseFloat(document.getElementById("x").value);
    y=parseFloat(document.getElementById("y").value);
    x1=parseFloat(document.getElementById("x1").value);
    x2=parseFloat(document.getElementById("x2").value);
    y1=parseFloat(document.getElementById("y1").value);
    y2=parseFloat(document.getElementById("y2").value);
    console.log(x,y);
    solution = solve2(x,y,x1,x2,y1,y2);
    document.getElementById("replaceX").innerHTML = "X = "+solution.x;
    document.getElementById("replaceY").innerHTML = "Y = "+solution.y;
    document.getElementById("solveimg").setAttribute("src", "Assets/images/done.svg")
}
function solve3(x,y,z,x1,x2,x3,y1,y2,y3,z1,z2,z3){
  determinant = x1*(y2*z3-y3*z2)-x2*(y1*z3-y3*z1)+x3*(y1*z2-y2*z1);
  console.log(x1,x2,x3,y1,y2,y3,z1,z2,z3)
  minors = [new twoxtwo(y2,y3,z2,z3).determinant, new twoxtwo(y1,y3,z1,z3).determinant, new twoxtwo(y1,y2,z1,z2).determinant, new twoxtwo(x2,x3,z2,z3).determinant, new twoxtwo(x1,x3,z1,z3).determinant,new twoxtwo(x1,x2,z1,z2).determinant, new twoxtwo(x2,x3,y2,y3).determinant, new twoxtwo(x1,x3,y1,y3).determinant, new twoxtwo(x1,x2,y1,y2).determinant]
  console.log("Minors"+minors)
  cofactors = [ minors[0], minors[1]*-1, minors[2], minors[3]*-1, minors[4], minors[5]*-1, minors[6],minors[7]*-1, minors[8]]
  console.log(cofactors)
  adjoint = [ cofactors[0], cofactors[3], cofactors[6], cofactors[1], cofactors[4], cofactors[7], cofactors[2], cofactors[5], cofactors[8]]
  inverse = {x1:adjoint[0]/determinant,x2:adjoint[1]/determinant,x3:adjoint[2]/determinant,y1:adjoint[3]/determinant,y2:adjoint[4]/determinant,y3:adjoint[5]/determinant,z1:adjoint[6]/determinant,z2:adjoint[7]/determinant,z3:adjoint[8]/determinant}
  solution = {x:round(inverse.x1*x+inverse.x2*y+inverse.x3*z,4),y:round(inverse.y1*x+inverse.y2*y+inverse.y3*z,4),z:round(inverse.z1*x+inverse.z2*y+inverse.z3*z,4)}
  return solution
}
function solve3withinputs(){
    x=parseFloat(document.getElementById("x").value);
    y=parseFloat(document.getElementById("y").value);
    z=parseFloat(document.getElementById("z").value);
    x1=parseFloat(document.getElementById("x1").value);
    x2=parseFloat(document.getElementById("x2").value);
    x3=parseFloat(document.getElementById("x3").value)
    y1=parseFloat(document.getElementById("y1").value);
    y2=parseFloat(document.getElementById("y2").value);
    y3=parseFloat(document.getElementById("y3").value);
    z1=parseFloat(document.getElementById("z1").value);
    z2=parseFloat(document.getElementById("z2").value);
    z3=parseFloat(document.getElementById("z3").value);

    console.log(x,y,z);
    solution = solve3(x,y,z,x1,x2,x3,y1,y2,y3,z1,z2,z3);
    document.getElementById("replaceX").innerHTML = "X = "+solution.x;
    document.getElementById("replaceY").innerHTML = "Y = "+solution.y;
    document.getElementById("replaceZ").innerHTML = "Z = "+solution.z;
    document.getElementById("solveimg").setAttribute("src", "Assets/images/done.svg")
}