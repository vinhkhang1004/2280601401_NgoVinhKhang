console.log("\n>>>QUANG \n");
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) return DatabaseConnection.instance;
    this.id = Math.random();
    DatabaseConnection.instance = this;
  }
}

// Factory
const UserFactory = {
  createUser(role, name) {
    return { role, name, createdAt: new Date() };
  }
};

// Builder
class QueryBuilder {
  constructor() { this.query = ''; }
  select(fields) { this.query = `SELECT ${fields}`; return this; }
  from(table) { this.query += ` FROM ${table}`; return this; }
  build() { return this.query; }
}

module.exports = { DatabaseConnection, UserFactory, QueryBuilder };