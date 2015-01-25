var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    email     : { type: 'email',  unique: true },
    username  : { type: 'string',  unique: true },
    picture   : { type: 'string', defaultsTo: '/img/default.png'},
    passports : { collection: 'Passport', via: 'user' }
  }
};

module.exports = User;
