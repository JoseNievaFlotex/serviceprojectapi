export default () => ({
  type: 'mssql',
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  autoLoadEntities: true,
  synchronize: true,
  options: {
    encrypt: false,
    cryptoCredentialsDetails: {
      minVersion: 'TLSv1',
    },
  },
});
