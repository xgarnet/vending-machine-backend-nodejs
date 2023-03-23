import {getAllUsers} from "../services/user.service";
export  const authenticateUser = (req: any, res: any, next: any) => {

    const users = getAllUsers();

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({error: 'Authorization header missing'});
        return;
    }

    const [authType, authCredentials] = authHeader.split(' ');

    if (authType !== 'Basic' || !authCredentials) {
        res.status(401).json({error: 'Invalid authorization type or credentials'});
        return;
    }

    const [username, password] = Buffer.from(authCredentials, 'base64').toString().split(':');
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        res.status(401).json({error: 'Invalid username or password'});
        return;
    }

    req.user = user;
    next();
};
