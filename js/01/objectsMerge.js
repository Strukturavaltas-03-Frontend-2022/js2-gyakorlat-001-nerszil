/*
const objectsMerge = () => {};

export default objectsMerge;

*/
/*
•	Írj egy függvényt, amely paraméterként tetszőleges darabszámú objektumot merge-öl össze, majd visszatér ezzel az objektummal!
•	A függvény neve objectsMerge legyen! Az összefűzést úgy hajtsa végre, hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2 stb.), amelyek tartalmazzák a részobjektumokat!
Pl.:

*/
// A két objektum:
const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

const x = (...a) => {
return {...a};
}

console.log(x(johnDoe, janeDoe));



// A végeredmény:
{
    0: { 
        firstName: 'John',
        lastName: 'Doe'
    },
    1:  { 
        firstName: 'Jane',
        lastName: 'Doe'
    }
}

export default objectsMerge;