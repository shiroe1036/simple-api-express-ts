import { signin, signup } from "../../controller/AuthController";
import { verifySingUp } from "../../middleware/verifySingUp";

export const UserRoutes = (app: any) => {
    app.use((req: any, res: any, next: any): void => {
        res.header(
            "Access-Control-Allow-headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post('/auth/signup', 
        [
            verifySingUp.checkDuplicateUsernameOrEmail,
        ],
        signup
    );

    app.post('/auth/signin', signin);
}