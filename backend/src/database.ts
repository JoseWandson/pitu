import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:flamengo@localhost:3306/pitu');

export default sequelize;