module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'azumusis.mysql.db.hostpoint.ch'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'azumusis_verwachat'),
      user: env('DATABASE_USERNAME', 'azumusis_verwa'),
      password: env('DATABASE_PASSWORD', '+LZXT-CHFnLd1FqgNdq1'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
