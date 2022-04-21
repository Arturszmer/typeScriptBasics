abstract class Animal {

    private _gender: Gender;
    private _species: Species;
    private _numberOfLegs: number;
    constructor(gender: Gender, species: Species, numberOfLegs: number) {
        this._gender;
        this._species;
        this._numberOfLegs;
    }
    public get gender(){
        return this._gender;
    }
    public set gender(gender: Gender){
        this._gender = gender;
    }

}

enum Gender {
    Male = "male",
    Female = 'female'
}
enum Species {
    Mammals = 'mammals',
    Birds = 'birds',
    Reptiles = 'reptiles',
    Amphibians = 'amphibians',
    Fish = 'fish',
    Arthropods = 'Arthropods'
}

class DomesticAnimal extends Animal{

}

interface FeedAnimal {
    feed()
}

