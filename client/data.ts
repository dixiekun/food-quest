export enum Gender {
    BOY = 'Boy',
    GIRL = 'Girl',
    UNISEX = 'Unisex'
}

export enum Popularity {
    TRENDY = 'Trendy',
    UNIQUE = 'Unique',
}
export enum Length {
    LONG = 'Long',
    SHORT = 'Short',
    ALL = 'All'
}

interface Name {
    id: number,
    name: string,
    gender: Gender,
    popularity: Popularity,
    length: Length,
}

export const names: Name[] = [
    {
        id: 1,
        name: "Dennis",
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.SHORT,
    }, 

    {
        id: 2,
        name: "Jake",
        gender: Gender.BOY,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT,
    },

    {
        id: 3,
        name: "Jane",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.SHORT,
    }, 

    {
        id: 4,
        name: "Albert",
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.LONG,
    }, 

    {
        id: 5,
        name: "Angela",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.LONG,
    }, 

    {
        id: 6,
        name: "Gojo",
        gender: Gender.BOY,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT,
    }, 

    {
        id: 7,
        name: "Kairi",
        gender: Gender.UNISEX,
        popularity: Popularity.TRENDY,
        length: Length.SHORT,
    }, 

    {
        id: 8,
        name: "Subaru",
        gender: Gender.BOY,
        popularity: Popularity.UNIQUE,
        length: Length.LONG,
    }, 

    {
        id: 9,
        name: "Marie Chan",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.LONG,
    }, 

    {
        id: 10,
        name: "Jericha Zen",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.LONG,
    }, 

    {
        id: 11,
        name: "Bernadette Bodong",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.LONG,
    }, 

    {
        id: 12,
        name: "Gusion",
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.SHORT,
    }, 

    {
        id: 13,
        name: "Badang",
        gender: Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT,
    }, 

    {
        id: 14,
        name: "mapoloy",
        gender: Gender.UNISEX,
        popularity: Popularity.UNIQUE,
        length: Length.LONG,
    }, 

    {
        id: 15,
        name: "Garben Madafaker",
        gender: Gender.UNISEX,
        popularity: Popularity.TRENDY,
        length: Length.LONG,
    }, 

    {
        id: 16,
        name: "Gar",
        gender: Gender.UNISEX,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT,
    }, 

]