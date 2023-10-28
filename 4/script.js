x = +prompt("input number from 1 to 6");
switch (x) {
    case 2:
    case 4:
    case 6:
        alert("even");
        break;
    case 1:
    case 3:
    case 5:
        alert("odd");
    default:
        alert("out of range");
}