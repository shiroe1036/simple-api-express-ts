import { FindAll } from "../../controller/TutorialController"

export const TutorialRoutes = (app: any) => {
    app.get('/findTutorials', FindAll);
}