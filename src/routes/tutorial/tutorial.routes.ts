import { createTuto, FindAll } from "../../controller/TutorialController"

export const TutorialRoutes = (app: any) => {
    app.post('/tutorial', createTuto);
    app.get('/findTutorials', FindAll);
}