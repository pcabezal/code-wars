function DNAStrand(dna){
    return dna.split('').map(x => {
        switch(x) {
            case 'A': return 'T';
            case 'T': return 'A';
            case 'G': return 'C';
            case 'C': return 'G';
        }
    });
}


console.log(DNAStrand("ATTGC"));