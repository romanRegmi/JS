const accounts = [{
    _id: "5e56d5f5c00d45b8f1125ef4",
    index: 0,
    guid: "955310d3-45df-47e7-bc9c-92504d5e92d2",
    isActive: true,
    balance: "$3,926",
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "green",
    name: "George Bond",
    gender: "male",
    company: "GEEKOL",
    email: "georgebond@geekol.com",
    phone: "+1 (862) 591-2584",
    address: "677 Rost Place, Brandermill, Virgin Islands, 854",
    about: "Est deserunt incididunt incididunt et. Et reprehenderit labore officia fugiat deserunt et non consequat velit et laboris duis. Reprehenderit dolore dolor reprehenderit culpa. Nulla duis do dolore magna cupidatat mollit quis ullamco duis.",
    registered: "2014-05-31T09:59:01 -01:00",
    latitude: -30.600915,
    longitude: -83.795214,
    tags: ["nostrud", "aliquip", "est", "laboris", "voluptate", "do", "dolor", ["deserunt", "ipsum"], ["consectetur", "quis", "commodo"]],
    friends: [{ id: 0, name: "Alisa Ford" }, { id: 1, name: "Hess Howell" }, { id: 2, name: "Gwendolyn Hendrix" }],
    greeting: "Hello, George Bond! You have 2 unread messages.",
    favoriteFruit: "banana",
},
{
    _id: "5e56d5f51837c78c32ed16ef",
    index: 1,
    guid: "416d3864-dc91-45e3-817c-07562b04b512",
    isActive: false,
    balance: "$1,273",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Fay Carlson",
    gender: "female",
    company: "SIGNIDYNE",
    email: "faycarlson@signidyne.com",
    phone: "+1 (922) 529-2437",
    address: "786 Belvidere Street, Carbonville, South Dakota, 3020",
    about: "Ullamco deserunt nostrud minim consectetur ad enim ipsum consectetur. Excepteur ad eiusmod ut quis in magna cillum qui commodo ad do eu. Nulla aliquip Lorem excepteur laboris elit.",
    registered: "2017-04-18T02:00:02 -01:00",
    latitude: 74.274128,
    longitude: -119.604152,
    tags: ["et", "ut", "mollit", "occaecat", "ipsum", "mollit", "pariatur"],
    friends: [{ id: 0, name: "Miranda Little" }, { id: 1, name: "Ellen Burks" }, { id: 2, name: "Shanna Logan" }],
    greeting: "Hello, Fay Carlson! You have 10 unread messages.",
    favoriteFruit: "strawberry",
},
{
    _id: "5e56d5f54b9a9491ba37fec9",
    index: 2,
    guid: "46839c30-0b7e-4009-98f1-9b8d770a0c88",
    isActive: false,
    balance: "$3,455",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "blue",
    name: "French Bennett",
    gender: "male",
    company: "PASTURIA",
    email: "frenchbennett@pasturia.com",
    phone: "+1 (883) 501-3963",
    address: "856 Hemlock Street, Alfarata, Nevada, 5261",
    about: "Nulla sunt ea sunt labore id excepteur elit incididunt et irure. Ut pariatur ad eu ut qui est consectetur labore enim fugiat. Occaecat incididunt ex sunt cillum Lorem in aliquip est voluptate aliquip pariatur reprehenderit ad. Aute nisi et enim enim. In voluptate eu minim duis.",
    registered: "2015-04-16T11:53:33 -01:00",
    latitude: 85.491905,
    longitude: 90.342252,
    tags: ["laboris", "reprehenderit", "est", "in", "duis", "voluptate", "non"],
    friends: [{ id: 0, name: "Mayer Sullivan" }, { id: 1, name: "Wiggins Hudson" }, { id: 2, name: "Jacqueline Gibbs" }],
    greeting: "Hello, French Bennett! You have 10 unread messages.",
    favoriteFruit: "apple",
},
{
    _id: "5e56d5f55dd72bb06144c70c",
    index: 3,
    guid: "52b94117-bd93-4d8f-b8e3-f2fd1c3988fc",
    isActive: false,
    balance: "$1,733",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: "Shannon Mitchell",
    gender: "male",
    company: "DECRATEX",
    email: "shannonmitchell@decratex.com",
    phone: "+1 (876) 447-3381",
    address: "870 Tillary Street, Aurora, Vermont, 8055",
    about: "Occaecat adipisicing tempor ut enim consectetur enim sit ea qui consequat sint anim sint. Sint elit occaecat eiusmod consectetur veniam ad do. Voluptate reprehenderit pariatur id deserunt sunt reprehenderit eiusmod. Aute incididunt aliquip ad aliquip. Commodo cupidatat nisi velit eiusmod qui quis tempor eiusmod sit velit ex. Ad tempor cillum incididunt aliqua labore eu voluptate voluptate cillum aute amet veniam. Velit elit occaecat esse fugiat minim deserunt sit amet et non ea sit cupidatat.",
    registered: "2014-01-29T04:55:04 -00:00",
    latitude: 77.845921,
    longitude: -137.754911,
    tags: ["consequat", "non", "dolore", "cupidatat", "irure", "ipsum", "quis"],
    friends: [{ id: 0, name: "Isabelle Luna" }, { id: 1, name: "Marissa Beach" }, { id: 2, name: "Sarah Simmons" }],
    greeting: "Hello, Shannon Mitchell! You have 4 unread messages.",
    favoriteFruit: "banana",
},
{
    _id: "5e56d5f5bb33b3df103cbfb9",
    index: 4,
    guid: "2fc0bb48-ad7f-4c91-a655-6fcb761a1e8f",
    isActive: true,
    balance: "$1,839",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: "Johns Hooper",
    gender: "male",
    company: "ZENTHALL",
    email: "johnshooper@zenthall.com",
    phone: "+1 (868) 432-2105",
    address: "446 Emmons Avenue, Tyro, South Carolina, 3627",
    about: "Ipsum ullamco reprehenderit nulla sint. Deserunt reprehenderit excepteur dolore quis et culpa in. Adipisicing consectetur amet reprehenderit ex velit incididunt quis ipsum reprehenderit in irure. Adipisicing Lorem minim eu laborum ex ullamco nostrud reprehenderit ullamco minim minim non. Magna id fugiat duis officia deserunt ullamco est esse.",
    registered: "2017-09-06T09:24:11 -01:00",
    latitude: -33.444624,
    longitude: 99.697197,
    tags: ["et", "minim", "sunt", "irure", "et", "esse", "consectetur"],
    friends: [{ id: 0, name: "Cynthia Hays" }, { id: 1, name: "Estela Walton" }, { id: 2, name: "Christy Ball" }],
    greeting: "Hello, Johns Hooper! You have 1 unread messages.",
    favoriteFruit: "apple",
}];

/**
  * Exercise 01
  * 
  * The first account has nested arrays of tags in it's tag property.  Get a list of all tags for this account as a one-dimensional array.
  */

// console.log(accounts[0].tags.flat());




/**
 * Exercise 02
 * 
 * Check whether the tags for the first account includes the "consectetur" tag 
 */

// console.log(accounts[0].tags.flat().find(tag => tag === "consectetur"));





/**
 * Exercise 03
 * 
 * Get a list of all the tags for all the accounts and join them together as a string separated by commas.
 */



// console.log(accounts.map(({ tags }) => tags.join(', ')).join(','));




/**
 * Exercise 04
 * 
 * Get a list of all the friends for all the user's accounts as an array (don't worry about duplicates)
 */


// console.log(accounts.map(({ friends }) => friends.map(({ name }) => name)).flat());






/**
 * Exercise 05
 * 
 * Get a list of all the friends for all users who are younger than 30 AND have a balance more than $1500
 */
console.log(accounts.filter(({ balance, age }) => age <= 30 && parseInt(balance.replace(/\D/g, '')) > 1500))
console.log(accounts.filter(({ balance, age }) => age <= 30 && parseInt(balance.replace(/\D/g, '')) > 1500).map(({ friends }) => friends.map(({ name }) => name)).flat());