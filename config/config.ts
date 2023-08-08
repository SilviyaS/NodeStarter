import path from 'path';

const rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'dev';

const config: {
    [key: string]: {
        root: string;
        logDir: string;
        logFileName: string;
        app: {
            name: string;
        };
        port: any;
        db: string;
    };
} = {
    dev: {
        root: rootPath,
        logDir: rootPath + '/logs',
        logFileName: 'app_logs.log',
        app: {
            name: 'api-core'
        },                    
        port: process.env.PORT || 3000,
        db: 'mongodb://localhost:27017/DEMO_DB',
    },               
    test: {
        root: rootPath,
        logDir: rootPath + '/logs',
        logFileName: 'app_logs.log',
        app: {
            name: 'api-core'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://localhost:27017/DEMO_DB',
    },
    pro: {
        root: rootPath,
        logDir: rootPath + '/logs',
        logFileName: 'app_logs.log',
        app: {
            name: 'api-core'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://localhost:27017/DEMO_DB',
    }
};

export default config[env];