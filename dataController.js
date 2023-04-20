const { faker } = require('@faker-js/faker');

module.exports = {
  getPerson: function (req, res, next) {
    res.locals.name = {
      first_name: faker.name.firstName(),
      middle_name: faker.name.middleName(),
      last_name: faker.name.lastName(),
      job_area: [
        faker.name.jobArea(),
        faker.name.jobArea(),
        faker.name.jobArea(),
        faker.name.jobArea(),
      ],
      job_descriptor: faker.name.jobDescriptor(),
      job_title: faker.name.jobTitle(),
    };
    next();
  },

  getAnimals: function (req, res, next) {
    res.locals.animals = {
      bear: [
        faker.animal.bear(),
        faker.animal.bear(),
        faker.animal.bear(),
        faker.animal.bear(),
        faker.animal.bear(),
      ],
      bird: [
        faker.animal.bird(),
        faker.animal.bird(),
        faker.animal.bird(),
        faker.animal.bird(),
        faker.animal.bird(),
        faker.animal.bird(),
      ],
      cat: [
        faker.animal.cat(),
        faker.animal.cat(),
        faker.animal.cat(),
        faker.animal.cat(),
        faker.animal.cat(),
        faker.animal.cat(),
      ],
      cetacean: [
        faker.animal.cetacean(),
        faker.animal.cetacean(),
        faker.animal.cetacean(),
        faker.animal.cetacean(),
        faker.animal.cetacean(),
      ],
      cow: [
        faker.animal.cow(),
        faker.animal.cow(),
        faker.animal.cow(),
        faker.animal.cow(),
        faker.animal.cow(),
        faker.animal.cow(),
      ],
      crocodile: [
        faker.animal.crocodilia(),
        faker.animal.crocodilia(),
        faker.animal.crocodilia(),
        faker.animal.crocodilia(),
        faker.animal.crocodilia(),
      ],
    };
    next();
  },

  getCompanies: function (req, res, next) {
    res.locals.companies = {
      log: faker.company.bs(),
      adjective: faker.company.bsAdjective(),
      buzz: [
        faker.company.bsBuzz(),
        faker.company.bsBuzz(),
        faker.company.bsBuzz(),
        faker.company.bsBuzz(),
        faker.company.bsBuzz(),
      ],
      nouns: [
        faker.company.bsNoun(),
        faker.company.bsNoun(),
        faker.company.bsNoun(),
        faker.company.bsNoun(),
        faker.company.bsNoun(),
      ],
      suffix: faker.company.companySuffix(),
      name: faker.company.name(),
    };
    next();
  },
};
