GC=cc
nodeF=node
TSflag=tsc
all: exec part1 part2 part3 part4 part5 part6 part7 clean 
exec: installer.sh
	./installer.sh
part1: 123.js
	${nodeF} 123.js
part2: 124.js
	${nodeF} 124.js
part3: 1.c
	${GC} 1.c -o part3
part4: factoriel.js
	${nodeF} factoriel.js
part5: factoriel_tsc.ts
	${TSflag} factoriel_tsc.ts --outFILE factoriel_tsc.js
part6: max_24.js
	${nodeF} max_24.js
part7: test.js
	${nodeF} test.js
clean:
	rm -f *.c~ Makefile~ *.sh~ part3
clean2:
	rm -r node_modules
clean_all__before_re____exec: clean2 clean #si node_modules existes deja.
