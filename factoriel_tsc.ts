function factoriel(n: number): number {
if (n<=0){
return 1;}
else{
return n*factoriel(n-1);}
}

//console.log(factoriel("3")); erreur de typage lancee par tsc.
console.log(factoriel(5));
