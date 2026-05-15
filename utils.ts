type LogLevel = 'info' | 'error' | 'warn' | 'debug';

type LogContext = {
    userId?: string;
    sessionId?: string;
    gameId?: string;
};

const createLogger = (context: LogContext) => {
    return (level: LogLevel, message: string, additionalData?: Record<string, any>) => {
        const logEntry = {
            timestamp: new Date().toISOString(),
            level,
            message,
            context,
            additionalData,
        };
        console[level](JSON.stringify(logEntry));
    };
};

const logger = createLogger({ userId: '1234', sessionId: 'abcd', gameId: 'xyz' });

logger.info('User logged in', { ip: '192.168.1.1' });
logger.error('Game crashed', { errorCode: '500' });
logger.debug('Level completed', { level: 3, time: '12:34' });
logger.warn('Low health warning', {});