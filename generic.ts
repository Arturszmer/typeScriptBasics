import { people} from "./sample_data/people";
import { starships} from "./sample_data/starships";

// tablica generyczna
const getFirstArrayItem = <T>(array: T[]) => array[0];  //tablica elementow T ('T' jest zmienną, można
                                                        // ją określić jak chcemy. Używamy jeśli nie znamy
                                                        // rodzaju elementu tablicy, w tym przykładzie
                                                        // zwracamy pierwszą pozycję
const random = () => Math.floor(Math.random()*10000) // upewnić się, że id są unikalne, stworzyć funkcje
                                                        // która to sprawdzi

const generateIdsForArrayElems = <T>(array: T[]): (T & {id: number})[] => {
    return array.map((item, index ) => ({id: random(), ...item}));
}


