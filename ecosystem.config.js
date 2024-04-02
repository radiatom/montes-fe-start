module.exports = {
    apps: [
        {
           name: 'girl-in-town',
    script: 'npm nru start',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '2G',
        }
    ],
}
