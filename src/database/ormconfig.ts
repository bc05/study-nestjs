import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

import { CustomNamingStrategy } from './custom-naming-strategy';

const env = dotenv.parse('../../');
dotenv.config(env);

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  namingStrategy: new CustomNamingStrategy(),
  entities: ['dist/modules/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

module.exports = config;
