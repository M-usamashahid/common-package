import { Request, Response, NextFunction } from "express";
import { jwtDecode } from "../utils";
import { ActionNotAuthorizedError } from "../errors/action-not-authorized-error";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const validatePermission = (module: string, feature: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // console.log(`Given Module ${module} Feature: ${feature}`);

    if (req.session?.permissions) {
      const permissions = req.session?.permissions;

      let isAllowed = false;

      permissions.forEach((permission: any) => {
        // console.log("Each permission =>", permission);
        // console.log(
        //   "Expression",
        //   permission.module === module,
        //   permission.feature === feature,
        //   permission.allowed
        // );

        if (
          permission.module === module &&
          permission.feature === feature &&
          permission.allowed
        ) {
          // console.log(
          //   "=========================== > Allowed permission",
          //   permission
          // );
          isAllowed = true;
        }
      });

      if (isAllowed) {
        next();
      } else {
        throw new ActionNotAuthorizedError();
      }
    } else {
      throw new NotAuthorizedError("Token Not Provided");
    }
  };
};
