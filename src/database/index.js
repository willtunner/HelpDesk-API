import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';
import Company from '../app/models/Company';
import Client from '../app/models/Client';
// import Called from '../app/models/Called';

const connection = new Sequelize(dbConfig);

User.init(connection);
Company.init(connection);
Client.init(connection);
// Called.init(this.connection);

Company.associate(connection.models);
Client.associate(connection.models);
// User.associate(this.connection.models);
//  Called.associate(this.connection.models);

export default connection;
