import { Sequelize } from "sequelize";
import databseConfig from "../config/database";

import Task from "../app/models/Task";
import User from "../app/models/User";

const models = [User, Task];

class Databse {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Databse();
