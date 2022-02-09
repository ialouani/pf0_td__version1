function carre(x){
    return Math.pow(x,2);}
function delta(a,b,c){
    return carre(b)-4*a*c;}
function evalQuadratic(a,b,c,x){
    return a*carre(x)+b*x+c;}
function root1(a,b,c){
    return (-b-Math.sqrt(delta(a,b,c)))/(2*a);}
function root2(a,b,c){
    return -c/(a*root1(a,b,c));}
function caracQuadratic(a,b,c){
    if (delta(a,b,c)<0){
	console.log("2 racines complexes");}
    else if (delta(a,b,c)==0){
	console.log("1 racine reelle");}
    else{
	console.log("2 racines reelles");}}
//tests unitaires par le module mocha et ce qui offre apres exo5.
function convert_2(m){
    let tab_base_2=[];let len=0;
    //console.log(m%2);
    while(m!=0){
	var r=m%2;
	tab_base_2+=[r];len++;
	m=Math.floor(m/2);}
    let str_rslt="";
    let i=len-1;
    while(i>=0){
	str_rslt+=tab_base_2[i];
	i--;}
    return str_rslt;}
console.log(convert_2(77));//ca marche parfaitement!!///  .
//revenons au module mocha...
console.log("*****************");
function gestion1(base,n){
//permet de convertir n en string telque |?///==n en base base.
    let len=0;
    var tab1=[];
    while(n!=0){
	tab1+=[n%base];
	n=Math.floor(n/base);
	len++;
    }
    let str2="";
    let i=len-1;
    while(i>=0){
	str2+=tab1[i].toString();
	i--;}
    return str2;}
console.log(gestion1(8,12231));
console.log(gestion1(8,122342));//ca marche!!!
//pour toute base<=9.(cad. les lettres ninterviennent pas.)///
console.log("***********");
let str111="Z";
console.log(str111.charCodeAt());
console.log(65+25);
console.log("***********");
function ff(n){
   let strrr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let aaa=0;
    while(aaa<26){
	aaa++;
	let str_part=strrr.charAt(aaa);//~~strrr[aaa].
	if(n==str_part.charCodeAt()){
	    return str_part;}}
}
console.log(ff(69));//retourne E; ok!!///..
console.log("*************");
//11 convient avec A..
//12 B 65 A donc 65-11===54
//donc 65-54 donne 11
//permet de convertir n en string telque |?///==n en base base.
function gestion1_bis2(base,n){
    let len=0;
    var tab1=[];
    while(n!=0){
	if(n%base>=10){
	    var reste=n%base;
	    reste+=55;//10 cest A donc ajout de 55 pour avoir 65
//===charCodeAt("A").
	    var c12=ff(reste);
	    tab1+=[c12];
     n=Math.floor(n/base);
	    len++;}
	else{
	tab1+=[n%base];
	n=Math.floor(n/base);
	len++;}
    }
    let str2="";
    let i=len-1;
    while(i>=0){
	str2+=tab1[i].toString();
	i--;}
    return str2;}
console.log(gestion1_bis2(16,12231));
console.log(gestion1_bis2(16,122342));//ca marche!!!
function ff2(strr){
 let strrr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let aaa=0;
    while(aaa<26){
	if (strr===strrr.charAt(aaa)){
	    return 1;}
	aaa++;}
}
function gestion1_recip1(str1,base){
    let m=[];
    var j=0;
    let n=0;
    const len_str=str1.length;
    let len=len_str;
    while(j<len){
	//probleme..comment recuperer le premier element???(str[i=0]??)...
//maintenant on le sait cest la methode
//dans String.prototype :: {{{charAt($index..)}}}...
	let str13=str1.charAt(j);
	if(ff2(str13)){
	    let af=str13.charCodeAt();
	    af-=55;
let a13bc=af*(Math.pow(base,len-j-1));
	j++;
	    n+=a13bc;}
	else{
	let a13b=str13*(Math.pow(base,len-j-1));
	j++;
	    n+=a13b;}}
	return n;}



console.log(gestion1_recip1("27707",8));
console.log(gestion1_recip1("1DDE6",16));//ca marche;ok!//..
//pour toutes bases les 2 precedentes <=35.
//cest a dire au plus 10 pour 1 11=10+1 pour 2 35=10+25 pour 26 lettres
//cest a dire au plus la base 35 qui prend au max representation
//bigint integer;//
//>>>>>en 26 lettres possibles.(+les chiffres de 0 à 9 bien sur.).///











