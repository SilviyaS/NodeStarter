import Mongoose from 'mongoose';
import logger from '../logger/logger'
import config from '../config/config'

const dbConnect = async (): Promise<void> => {
    try {
        await Mongoose.connect(config.db, { useMongoClient: true });
        logger.info('Connected to mongo!!!');
    }
    catch (err) {
        logger.error('Could not connect to MongoDB', err);
    }
}

export default dbConnect;