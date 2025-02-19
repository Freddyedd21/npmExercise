import { Request, Response } from 'express';

export class UserController{
    public create(req: Request, res: Response) {
        res.status(201).send('Create User');
    }

    public update(req: Request, res: Response) { 
        res.send('Update User');
    }

    public get(req: Request, res: Response) {
        res.send(`Get User with ID ${req.params.id}`);
    }

    public delete(req: Request, res: Response) {    
        res.send(`Delete User ${req.params.id}`);
    }

    public getAll(req: Request, res: Response) {
        res.send('Get All Users');
    }
    
}

const userController = new UserController();
export { userController };

