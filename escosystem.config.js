module.exports = {
  apps: [
    {
      name: "api",
      script: "./db.json",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
