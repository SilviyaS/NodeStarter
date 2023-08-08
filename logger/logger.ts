import * as winston from 'winston';
import * as rotate from 'winston-daily-rotate-file';
import config from '../config/config';
import * as fs from 'fs';

const dir = config.logDir;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

let logger: any = new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)({
            colorize: true,
        }),
        new winston.transports.DailyRotateFile({
            filename: config.logFileName,
            dirname: config.logDir,
            maxsize: 20971520, //20MB
            maxFiles: 25,
            datePattern: '.dd-MM-yyyy'
        })
    ]
});

export default logger;