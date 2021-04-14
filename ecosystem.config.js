module.exports = {
  apps: [
    {
      name: 'server2.aiva.store',
      script: './dist/main.js',
      watch: false,
      env: {
        PORT: 4000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 4000,
        NODE_ENV: 'production',
      },
      env_staging: {
        PORT: 4000,
        NODE_ENV: 'staging',
      },
    },
  ],
};
