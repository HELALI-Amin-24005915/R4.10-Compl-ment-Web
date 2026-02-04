class C_CapteurThermique {
    constructor() {
        this.A_souscripteurs = [];
    }

    F_souscrire(O_observateur) {
        this.A_souscripteurs.push(O_observateur);
    }

    F_notifier(I_valeur) {
        for (let I_i = 0; I_i < this.A_souscripteurs.length; I_i++) {
            this.A_souscripteurs[I_i].F_update(I_valeur);
        }
    }
}

/* class C_MajTpsReel{
    Update();



}

class C_History{
    Update();

}

class C_GererAlert{
    Update()

} */