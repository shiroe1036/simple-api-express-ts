import { TutorialRoutes } from "./tutorial/tutorial.routes";
import { UserRoutes } from "./user/user.routes";

export const Routes = (app: any) => {
    TutorialRoutes(app);
    UserRoutes(app);
};