import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const jwtDecode = (token: any) => {
  return jwt.decode(token);
};

export const checkIfAJAXRequest = (req: any) => {
  return req.headers &&
    ((req.headers["x-requested-with"] &&
      req.headers["x-requested-with"] == "XMLHttpRequest") ||
      req.headers["content-type"].indexOf("application/json") != -1)
    ? true
    : false;
};

export const sendResponce = (res: Response, data: any, statusCode: number = 200) => {
  return res.status(statusCode).send(data);
};
