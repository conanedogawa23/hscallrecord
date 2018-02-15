module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-66-53-241.ap-south-1.compute.amazonaws.com',
      ref: 'origin/master',
      repo: 'git@github.com:conanedogawa23/hscallrecord.git',
      path: '/hscallrecord',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
