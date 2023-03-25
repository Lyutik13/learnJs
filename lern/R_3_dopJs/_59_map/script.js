"use strict";

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 15000, 25000];

const map = new Map([[{ paper: 400 }, 8000]]);

shops.forEach((shops, i) => {
    map.set(shops, budget[i]);
});

console.log(map);

console.log(map.get(shops[0]));
console.log(map.has(shops[0]));

// map.delete(key);
// map.clear();
// map.size;

// key
/* const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}
console.log(goods); */

// values
/* for (let price of map.values()) {
    console.log(price);
} */

// entries
/* for (let [price, shop] of map.entries()) {
    console.log(price, shop);
}
 */
//
map.forEach((values, key, map) => {
    console.log(key, values);
});
