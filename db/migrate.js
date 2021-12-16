require('dotenv').config();
const Postgrator = require('postgrator');

console.log(process.env.PGUSER);
console.log('migrating from ', `${__dirname}/migration`);

const postgrator = new Postgrator({
  // Directory containing migration files
  migrationDirectory: `${__dirname}/migration`,
  driver: 'pg',
  // Database connection config
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD
});

// Migrate to specific version
postgrator.migrate()
  .then((appliedMigrations) => console.log(appliedMigrations))
  .catch((error) => {
    console.log(error);
    // Because migrations prior to the migration with error would have run
    // error object is decorated with appliedMigrations
    console.log(error.appliedMigrations); // array of migration objects
  });
