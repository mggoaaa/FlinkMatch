export interface Contact {
    allWaifusAndHusbandos: AllWaifusAndHusbando[];
}

export interface AllWaifusAndHusbando {
    name:   string;
    age:    string;
    gender: Gender;
    image:  string;
}

export enum Gender {
    H = "H",
    M = "M",
}