import "reflect-metadata";
import { DataSource } from "typeorm";

export const MyDataSource = new DataSource({
  type: "mysql",
  host: "db",
  port: 3306,
  username: "root",
  password: "root",
  database: "iot_tracking",
  timezone: "Z",
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.ts"],
});