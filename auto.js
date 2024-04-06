// let car = {
//     model: 'spark',
//     year: '2018',
//     marka: 'GM',
//     engine: 1.3,
//     position: "2 euro",
//     size: {
//         height: '3675 mm',
//         width: '1597 mm',
//         detals: {
//             crashed: false,
//             tuning: true,
//             auto: true,
//             hatch: true,
//         }
//     },
//     drivers: [
//         {
//             id: 1,
//             name: "Genadiy",
//             passport_series: "AC",
//             passport_num: "123456789",
//             dateSale: {
//                 date: 2019,
//                 crashed: false
//             }
//         },
//         {
//             id: 2,
//             name: "Lee",
//             passport_series: "AC",
//             passport_num: "123456789",
//             dateSale: {
//                 date: 2021,
//                 crashed: true,
//                 whereCrashed: {
//                     where: 'left bumper',
//                 }
//             }
//         },
//         {
//             id: 3,
//             name: "Mike",
//             passport_series: "AC",
//             passport_num: "123456789",
//             dateSale: {
//                 date: 2022,
//                 crashed: false
//             }
//         },
//     ],
//     spareTires: {
//         spares: 4,
//         state: "new",
//     },
// }

// console.log(car);

let user = {
    name: "Amal",
    surName: "truev",
    age: 29,
    wifes: ['Nargiza', 'Amina', 'Amalya', 'Shoxruxa'],
    wisas: ['USA', 'Ukrain', 'Russia', 'Mexico'],
    polniImya: function() {
        return this.name + ' ' + this.surName
    }
}

let passport = {
    serries: "AC",
    number: 213123123,
    date: "2019-06-06",
    exp: "2029-06-06",
}

let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
    function: []
}

let connect = Object.assign({}, user, {passport})

let keys = Object.keys(connect)
let values = Object.values(connect)
let endConnect = [...keys, ...values]




endConnect.filter((elem) => {
    if (typeof elem === 'string') {
        types.string.push(elem)
    } else if(typeof elem === 'number') {
        types.number.push(elem)
    } else if (typeof elem === 'object') {
        types.object.push(elem)
    } else if (typeof elem === 'boolean') {
        types.boolean.push(elem)
    } else if (typeof elem === 'function') {
        types.function.push(elem)
    }
})


console.log(connect);
console.log(keys);
console.log(values);
console.log(endConnect);
console.log(types);

// TZ
// Соеденить два объекта в одно целое (новый объект)
// Получить все ключи из нового объекта и сохранить их в новую переменную
// Получить все значения из нового объекта и сохранить их в новую переменную
// Соеденить две этих массива (ключи и значения)
// Отфильтровать массив по их типам элементов


// let dada = [1,4,'gtgtgtgt', true, 21, 'frfrfr']

// let tyty = dada.filter(elem => typeof elem === 'string')

// console.log(tyty);
