module.exports = {
  apps: [
    {
      name: "api",
      script: "./db.json",
      instances: 2,
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
        PORT: 443,
      },
    },
  ],
};
