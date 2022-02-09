let a=Number.MAX_VALUE;
console.log("2ieme qst:");
console.log( a);
let b=Math.log(a)/Math.log(2);
let c=Math.floor(b)-1;//2**m=a=>m=log2(a) en floor..
//mais test dit que |< est la seule toleree donc..>>>.//(*)!!/////.
console.log("max::2**");
console.log( c);
let f=function(){
    let e=0;
    while(Math.pow(2,e)<=a){
	e++;}
    return e-1;}//~>>(*)..///
console.log(f());//1023 soit 2**10-1...//./////
//implementation en style fonctionnel.
let f2_1=function(e){
//un if conserve le caractere voulu.(ss cdts..)
    let g=Math.pow(2,e+1);
    return g;}//retourne la prochaine puissance
//retourne 2**(e+1) en pf assure.
let f2_2=function(e){
    let h=f2_1(e);//suivante puissance cad 2**(e+1).
    let h2=f2_1(e-1);//e>=1 par construction..///
    if(h<a){
	return f2_1(e);}
    else{return f2_1(e-1);}}//nouveaux objets___evaluation retournes..///
//if pas grave car constitue en elle-meme fct.(..)//.

//retourne le prochain si ce dernier est <a.(en pf avec f2_1 calculant
//les eventuelles prochains.)///
let f2_3=function(e){
    if(f2_2(e)==f2_1(e-1)){return 0;}
    else {let e2=e+1;return e2;}}
//retourne 0 en PF si le prochain est egale au precedent
//cad endautres termes: le prochain en f2_2!!! RETOURNE le precedent par f2_1.
//sinon retour de indice suivant (exposant suivant) si nn.
//TJRS en style~PF..///

function f3(e3){
    //e3>=1..///
    let ee=f2_3(e3);
    if (ee!=0){return f3(ee);}
    else{
	return e3;}}
//demarre par 0. calcule la prochaine puissance
//PAR:: f2_3 si 0 retourne l'argument/fct<<<< 
//sinon retourne la meme fct d'origine evaluee en cet argument retournee.

console.log(f3(1));
console.log(f3(1));//ca affiche BIEN 1023.
//f3 qui fait le meme travail que f()function est en PF au lieu de PI.VOILA!///

//formalisation:::
function f4(eee){
    let a1=Math.pow(2,eee+1);
    if(a1<a){return f4(eee+1);}
    else{return eee;}}
console.log("rslt via une build:~~pf");
console.log(f4(0));//camarche; ca AFFICHE BIEN 1023.(==2**10-1 en 32BITS!!!)../

//****************************

//on va construire le plus grand entier pair:: twobig=2*n.
//ca sera evidemment:>> max_value/2 en floor(2*n=a=>n=a/2===floor(a/2)).
//puis -1.!!!/////.()!!!.//
//resoud en gros probleme de representation des flottants recontre avant.(*)

let a_pair=Math.floor(Number.MAX_VALUE/2);

console.log(a_pair);
console.log(a_pair/2==Math.floor(a_pair/2));//tester si entier.
//ca sert a rien car trop grand.
console.log(3.5==Math.floor(3.5));//faux.;///
//cest evident que a_pair*2<a car on a pris le floor.(donc au plus >= si egali
//te)..a pair???

//tester si max_value est pair ou nn.
//RQ:
//logiquement le n va etre egale a 2**(f4(0)-1) car avec * pour 2 arg[0];;;
//cela va donner 2*(2**(f4(0)-1))==2**f4(0) qui est le max pouvant etre
//represente.

console.log(Math.pow(2,f4(0)-1));
console.log(a_pair);//cest n qui est egale a max_value/2 en floor..
//==2**(f4(0)-1) si...
//=>>>pour calculer le n max ss se soucier si max_value pair ou nn
//on utilise f4(eee).
let n_21=Math.pow(2,f4(0)-1);//2*n=maxrepresentable..
console.log(n_21*2);
console.log(Math.pow(2,f4(0)));
//2*n_21==2**f4(0).//
//MAIS: 2*n maximum nest pas oblige detre puissance..+>>=>>..///;;/////.()///  .

const twobig=a;//2*(a/2);///car ff(a)==1.
//voila; donc twobig==Number.max_value/..///.
console.log(twobig);
function ff2(j){
    let i=0;
    while(Math.pow(2,i)<j){i++;}
    return i-1;}
function ff(af2){
    let af=af2;
    let k=Math.pow(2,ff2(af));
    console.log(af);
    while(af>=2){
	console.log(af);
	let cdd=ff2(af); var egh=Math.pow(2,cdd);
	af-=egh;}
    af=af+egh;//qui est >=2.
    while(af!=0 && af!=1 && af>=0){
	var af22=af;af-=2;console.log(af22);}
    if (af==0) return 1;
    else return 0;
}
console.log(ff(a));//a max_value eest donc pair.
//donc n est tel que n===a/2 qui est entier car a pair.
//donc pas la peine de faire floor.

console.log(twobig/2);//le n .
console.log(2*a_pair==twobig && 2*a_pair==a);//enfin,../////..///
let alm=twobig/2;

console.log(alm*3);//..->>INFINITY.
console.log(Math.pow(2,f4(0)-1)<alm);//true;;/////.()
console.log(twobig>Math.pow(2,f4(0)));//max des pairs se trouve
//sur la droite des reels JS||/!!! apres 2**f4(0) le max des valeurs des
//puissances de 2.

let aflm=twobig-Math.pow(2,f4(0))+1;//nombre termes.
let aflm_bis=aflm-1;//nombre nombres apres 2**f4(0) jusqua la fin cad twobig.
let fgg=0;
let fgger=function(){
while(fgg<aflm_bis){
    let cfg=Math.pow(2,f4(0))+2*fgg;
    //console.log(cfg);mise en comments car plusieurs valeurs..
    fgg++;fgg++;}
    return fgg;//contient nombre nombres pairs apres 2**f4(0) jusqua twobig.
}
console.log(Math.floor(aflm_bis/2));//fgg==fgger()///
console.log(a-Math.pow(2,f4(0)));
console.log(a-Math.pow(2,f4(0)+1));//~~moins Infinity...
console.log(twobig);
let cmppfg=Number.MAX_VALUE;
console.log(cmppfg==twobig);
let exemple_numb=Math.pow(2,f4(0))+6;
console.log(exemple_numb);
console.log(exemple_numb<=a);
console.log(twobig);
console.log(typeof(twobig));
console.log(Object.getOwnPropertyNames(twobig.__proto__));
console.log(twobig.__proto__==Number.prototype);//true bien sur..
//!!!!!!!!!!.prototype revient àà object nn new tire de Number
//servant de modele(++++|.===;//).POP!!!!!!!!!!!!!!!!!!!!!!
console.log(Object.getOwnPropertyNames(Number.prototype));//modele
//comme on a dit donc ~~~classe en poo=>constructor existe.
console.log(Object.getOwnPropertyNames(Number));//# du precedent
//car la on vise pas les methodes d'un modele pris en prototype herite
//mais Number lui-meme cest a dire incluant des methodes pour regroupement
//global de ts les nombres representables (cle MAX_VALUE existe
//mais nexiste pas dans ???.prototype) avec modele pris comme ..NN!!!!!
//.......;pq??????
//Number leve son opposition a legard des instances=>il ne tient compte que des
//numbers types discretement et en cadre2||+++ pas de ceux declares
//en instances=>constructor EXISTE PAS..(car pas classe en poo
//ni PROTOTYPE en pop car PROTOTYPE!!! est ???.prototype.voila!///

//donne (la derniere commande JS) les methodes du prorotype(propriete des objets
//) de twobig~__.(((type))). twobig <<<<type primitif number mais
//instance aussi de la classe ou objet en pop de Number(). (lets=new Number();..
//) donc a un prototype pere+++ qui est Number=>a des methodes
//affichees en array par : Object.getownPropertyNames(twobig.__proto__).
let f11=new Number();
f11.valueOf=5;//valeur>>de f11..
console.log(Number.prototype.constructor);//==[Function: Number]
//cad::: Number() pour instance renvoie rien cad {}.
console.log(f11);console.log(typeof(f11));//objet car defini via prototype..///
//f11=={valueOf:5};
let f122=11;
console.log(typeof(f122));
//f11 est aussi de type number mais passe debutttpar new Number().////
console.log(Object.getOwnPropertyNames(f11.__proto__));//meme que
//prototype number car heritage par le principe des instances nn par classe
//de la pop.

//methode1 toString() permet de lier variable string value ss "" meme que ?.//(,
//?!!!):>> applicable sur les types number.
//f11.__proto__ == Number.prototype liste cette methode
//qui est: toString=toString(??){...;;;};;//voila!!!!! 
//donc en application faut prendre valueOf=>number.
//ou |||en.(...)////// ..
//??.toString()==toString(??) tel que ??. syntaxe seule car toString aucun
//argument=>...toString==meme<><>;//{.........};//
//donc deja connu=>object new toString via:  f11.valueOf.toString();
//ou sur un type number par:: f122.toString();
//RAPPEL: TJRS toSTRING SS PARAMETRES d'ENTREE.
console.log(f122.toString());//console.log(str1);
console.log(f11.valueOf.toString());
console.log(typeof(f11.valueOf));//number!!!
//f122 est de type number ~ object herite => f122.toString() possible!!!
console.log(f122.__proto__);//{} car nn instance |>><<<<< CREATION;;;.
//mais f122.methode_de_number_N!! possible car de type number 
//et methode en question dans Number.prototype dont prend en argument
//cette derniere valeurs ces objets~²~~~des numbers soit des nombres
//declares par TYPAGE?<<||| numberr.
//donc Number methode A=>??.A possible si A telque: typeof(A)==number.
//cest un argument donc <<number(N->n)=>f122 par exemple possible..///
function g(){
    let str2=f122.toLocaleString();
    //console.log(str2);
return str2;}
let str2_2=g();
console.log(str2_2);
//locale cad prenant des arguments cest possible definissant 
//des prises en consideration de transplantage avec lafficheurr selon
//des regles de presentation++ reglees via args of toLocaleString.
console.log(Object.getOwnPropertyNames(f11.__proto__));
//sur numbers--types!!! on a vu .toString && .toLocaleString.
//maintenant valueOf et constructor.
let ss11=f122.valueOf();
console.log(ss11);
let ss233=f122.constructor(4);//de number--type
//on construit un number--type aussi par f122.constructor 
//qui prend en argument la valeur de ce number et lattache a
//variable employee pour ca::  let ss233 =  f122.constructor(4);
//ss233 est de type number (primitif) et sa valeur est 4.
console.log(ss233);console.log(typeof(ss233));
console.log(ss233.valueOf());
console.log(Object.getOwnPropertyNames(ss233.__proto__));
//donne memes methodes que f122.(proto==proto...((f122))=~Number.prototype
//car creation au fond saute ||| >>prend en compte Number..///
//Number.prototype est un modele d'un objet et en methodes ..|||  affichent:>>
//methodes d'un number newOBJECT qui puise vers lheritage
//=>>par construction---JS les proprietes des prototypes des numbers.
//toFixed methode:>>
//console.log(Object.getOwnPropertyNames(f11));
//.,... direct pour numbers car declaration impliquage linkage via typeof=??
//mais new Number() cree un nouveau objet
var aft=new Number();//par construction objet vide car aucun argument
// par construction2.. donc dictio aucune cle~~~=>aucune methode presente.
//heritage du prototype INSTANTANNE en POP (propriete)
//donc: aft.,,***?/|||==<vide!!!!! (number~2;//=>c'est le proto qui est 
//herite)!!///; 
console.log(Object.getOwnPropertyNames(aft));//donne[].
aft.valueOf=2;console.log("*******");
let af1=aft.valueOf;
console.log(af1.valueOf());//affiche biensurrr!!!!:  af1=2.///
//..........;;;;;;;;;;;;;/////
//retour a toFixed:
//rappelsss: get.....Names(new Number())==[] et les vrais methodes
//de number dans .__proto__#methode de Number.
//methodes prenant des numbers>>>.methode() par exempleee ..
//TOfIXED::>>>
let sf_1=12.076;
console.log(sf_1.toFixed(2));//2 decimales & approche par exces.
//toExponential
let sf_2=3571873;let sf_3=sf_2/100000000;
console.log(sf_2.toExponential());//ecriture en e+??... (ecriture scientifique)
//toPrecesion
console.log(sf_2.toPrecision(3));
console.log(sf_3.toPrecision(3));//3 chiffres #0 a compter de gauche.
//voila toutes les methodes de Number.prototypes
//soit les fonctions predefinies a appliquer potentiellement
//pour des valeurs de type numbers.
//fini.(qst3)

let ar=twobig+2000;
console.log(ar==twobig);
let strr='ertee';
strr+=twobig;
let bgg=2;bgg+='rt';
console.log(bgg);
console.log(strr);
let ar2=twobig+strr;
console.log(ar2);
console.log(twobig+'erree');
console.log(bgg.toString());
let bgg2=new String();
var tab1=Object.getOwnPropertyNames(bgg2.__proto__);
console.log(tab1.length);//37 methodes 
var tab11=Object.getOwnPropertyNames(String);
console.log(tab11.length);
console.log(bgg2.__proto__==String.prototype);
console.log(tab1);
console.log("*********");
//console.log(bgg2.__proto__) affiche le MODELE donc en reference
//par creation # new String() originaire ABSOLU : {}.
console.log(tab11);
console.log(String);//là; String est interprete comme CLASSE 
//et en pop il n'y en a pas donc ~~~objet cad DICTIONNAIRE 
//qui permet de creer des instances par String() donc
//assimile a un objet de cle Function telque: String.Function==String.
//classe donc objet en pop avec construction instances => objet fct~~(car
//atout considerables pour creation strings...)=>==[Function: String].
let sttr="Hello WORLD, it's a good time.!!";
let sttrr="WORLD";
//console.log(sttr.includes(sttrr));
//true mais includes
//methode nn reconnaissable que par les v5|>>;.///
//testee sur jseditor.io.
let agj=10043;
let agjj=new Number();
console.log(typeof(String.prototype));
console.log(Object.getOwnPropertyNames(agj.__proto__));
console.log(Object.getOwnPropertyNames(agjj.__proto__));
let tab2=Object.getOwnPropertyNames(String);
console.log(tab2);
let tab222=Object.getOwnPropertyNames(String.prototype);
console.log(tab222);
console.log(Object.getOwnPropertyNames(agjj.__proto__));
let t3_1=Object.getOwnPropertyNames(Number);
let t3_3=Object.getOwnPropertyNames(Number.prototype);
console.log(Number.prototype==agjj.__proto__);
console.log(Number.prototype==agj.__proto__);
console.log(Number==agjj.__proto__);
console.log(tab2);
let sff=new String();
sff="azert";
let sfgg="erfdr";
console.log(sff.length);
console.log(sfgg.length);
