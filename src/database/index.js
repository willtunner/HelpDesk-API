import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';
import Company from '../app/models/Company';
import Client from '../app/models/Client';
import Called from '../app/models/Called';
import Information from '../app/models/Information';

const connection = new Sequelize(dbConfig);

User.init(connection);
Company.init(connection);
Client.init(connection);
Called.init(connection);
Information.init(connection);

Company.associate(connection.models);
Client.associate(connection.models);

export default connection;
