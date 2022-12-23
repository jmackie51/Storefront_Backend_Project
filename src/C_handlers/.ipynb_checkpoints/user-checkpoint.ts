import express, { Request, Response } from 'express'
import { User, UserBase } from '../A_models/user'
// import jwt from "jsonwebtoken";
// import { verifyAuthToken, verifyUserId } from "../services/verify";
import dotenv from "dotenv";


const userBase = new UserBase()
dotenv.config();

const index = async (_req: Request, res: Response) => {
  const users = await userBase.index()
  res.json(users)
}
const show = async (req: Request, res: Response) => {
   const user = await userBase.show(req.params.id)
   res.json(user)
}
const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password_digest: req.body.password_digest,
            username: req.body.username,
        }
const newUser = await userBase.create(user)
        res.json(newUser)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}
const destroy = async (req: Request, res: Response) => {
    const deleted = await userBase.delete(req.body.id)
    res.json(deleted)
}
const userRoutes = (app: express.Application) => {
  app.get('/users', index)
  app.get('/users/:id', show)
  app.post('/users/', create)
  app.delete('/users/:id', destroy)
}
export default userRoutes