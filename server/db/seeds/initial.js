exports.seed = async function (knex) {
  await knex("users").del();

  await knex("users").insert([
    { id: 1, username: "user1", password: "123", email: "a@a.com" },
    { id: 2, username: "user2", password: "123", email: "b@b.com" },
    { id: 3, username: "user3", password: "123", email: "c@c.com" },
  ]);
};
