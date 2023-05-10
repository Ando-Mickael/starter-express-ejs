const knex = require('../db/database')

// knex('personne')
//     .select()
//     .where('id', 1)
//     .limit(itemPerPage)
//     .offset(pageNb * itemPerPage)
//     .then((personne) => {
//         console.log(personne);
//     });

// knex('personne')
//     .select()
//     .where('nom', 'like', `%a%`)
//     .then(function (users) {
//         console.log(users);
//     });

// knex.raw("select * from personne where id = ?", [1])
//     .then(personne => {
//         console.log(personne.rows)
//     }) 