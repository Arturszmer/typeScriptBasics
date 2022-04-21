import { people } from "./sample_data/people";
import { starships} from "./sample_data/starships";
import {IPeople} from "./interfaces/IPeople";
import {IStarships} from "./interfaces/iStarships";

abstract class StarWarsData {
    protected _people: IPeople[];
    public _starships: IStarships[];

    constructor(people: IPeople[], starships: IStarships[]) {
        this._people = people;
        this._starships = starships;
    }
    getPoople(){
        return this._people;
    }
}

// parametr name, i tej postaci przyporządkowuje jakiś statek
// class StarWarsPerson extends StarWarsData implements IStealShip {
 //   public stealShip: () => {}; //był błąd dopóki nie zaimplementowałęm metody
                                // nie może być private/protected,
                                // implementacja z interfejsu musi być publiczna
    // stealShip = (name: string): {person: IPeople, starship: IStarships} => {
    //     const person = this.findPerson(name);
        // const index = this.getRandomIndex(this._starships.length);
        // return {person, starship: this._starships[index]};
    // }
    // private findPerson = (name: string): IPeople =>
        // this._people.find(person => person.name === name);

// }

// const starWarsPerson: StarWarsPerson = new StarWarsPerson(people, starships);

// const starWarsData: StarWarsData = new StarWarsData(people, starships);
// console.log('starWarsData', starWarsData.getPoople());

interface IStealShip{
    stealShip: (name: string) => {person: IPeople, starship: IStarships};
}
