import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';
import Company from '../app/models/Company';
import Client from '../app/models/Client';
import Called from '../app/models/Called';
import Information from '../app/models/Information';
import UserInfo from '../app/models/UserInfo';
import Phonebook from '../app/models/Phonebook';
import Tracking from '../app/models/Tracking';
import Product from '../app/models/Product';
import Token from '../app/models/Token';

const connection = new Sequelize(dbConfig);

User.init(connection);
Company.init(connection);
Client.init(connection);
Called.init(connection);
Information.init(connection);
UserInfo.init(connection);
Phonebook.init(connection);
Tracking.init(connection);
Product.init(connection);
Token.init(connection);

User.associate(connection.models);
Company.associate(connection.models);
Client.associate(connection.models);
Called.associate(connection.models);
Information.associate(connection.models);
UserInfo.associate(connection.models);
Tracking.associate(connection.models);
Product.associate(connection.models);

export default connection;
