import Express from 'express';
import auth from './auth';
import users from './users';

const router = Express.Router();

export default (): Express.Router => {
    auth(router);
    users(router);
    
    return router;
}