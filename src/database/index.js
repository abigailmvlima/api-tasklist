import { Sequelize } from "sequelize";
import databseConfig from "../config/database";

import User from "../app/models/User";

const models = [User];

class Databse {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Databse();
