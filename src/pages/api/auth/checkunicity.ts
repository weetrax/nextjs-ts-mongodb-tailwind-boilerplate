import isEmpty from 'is-empty';
import nc from 'next-connect';
import { connectToDatabase } from '@/lib/database/index';
import { ResponseError } from '@/types';
import { User } from '@/lib/database/models/User';
import type { NextApiRequest, NextApiResponse } from "next";

// Default Req and Res are IncomingMessage and ServerResponse
// You may want to pass in NextApiRequest and NextApiResponse
const router = nc<NextApiRequest, NextApiResponse>();

router
  //.use(expressWrapper(cors())) // express middleware are supported if you wrap it with expressWrapper
  .use(async (req, res, next) => {
    const start = Date.now();
    await next(); // call next in chain
    const end = Date.now();
    //console.log(`Request took ${end - start}ms`);
  })
  .get(async (req, res) => {
    const { email, username } = req.query;

    let error: ResponseError = {
      message: "",
    };

    if (isEmpty(email) || isEmpty(username)) {
      error.message = "Oups, une erreur est survenue.";
      return res.status(400).json(error);
    }

    connectToDatabase();

    /* Check if the username is already taken */
    const existingUsername = await User.findOne({ username: username });

    /* Checking if the email is already taken. */
    const existingEmail = await User.findOne({ email: email });

    if (existingUsername || existingEmail) {
      error.message = existingUsername
        ? "Ce nom d'utilisateur est déjà associé à un compte."
        : "Cette adresse e-mail est déjà associé à un compte.";
      return res.status(400).json(error);
    }

    res.status(200).json({ valid: true });
  });

export default router;
