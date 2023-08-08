import logger from '../../logger/logger';

const ping: { [key: string]: any } = {};

ping.index = async (req: any, res: any) => {
    try{
        logger.info('responding to ping ...')
        res.send('Pong!')
    }
    catch (e) {
        logger.error('failed responding to ping ... ' + e);
        res.send('failed responding to ping ... ');
    }
}

export default ping;