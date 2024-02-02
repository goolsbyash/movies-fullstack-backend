import { Router } from "express";

const router = new Router();

router.post('/signin', async (req, res) => {
    // check if user exists

    // check if password matches

    // send the db user
    const user = {_id: '1', email: 'alex@gmail.com', userName: 'alex'}
    res.json(user);
});

router.post('/signup', async (req, res) => {
    // check if email is not already registered in db

    // create new user in db

    // send the new user
    const user = {_id: '2', email: 'alice@gmail.com', userName: 'alice'}
    res.json(user);
});

export default router;