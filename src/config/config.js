const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://dbanker:FvK0nbjumxHfoXJt@cluster0.iggd0.mongodb.net/Skeleton?retryWrites=true&w=majority" ||
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') +
        '/mernproject'
}
export default config
