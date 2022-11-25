let a = +prompt("1-sonni kirit")
while (isNaN(a)|| a==0) {
    a= +prompt("Son kiriting")
}
let b = +prompt("2-sonni kirit")
while (isNaN(b)|| b==0) {
    b= +prompt("Son kiriting")
}
let c = +prompt("3-sonni kirit")
while (isNaN(c)|| c==0) {
    c= +prompt("Son kiriting")
}
if (b<a && a<c || b>a && a>c ) {
    alert("O'rta qiymat "+a)
}else if (a<b && b<c || a>b && b>c) {
    alert("O'rta qiymat "+b)
}else if (a<c && c<b || a>c && c>b ) {
    alert("O'rta qiymat "+c)
}