import { createTuto, Delete, FindAll, FindOne, update } from "../../controller/TutorialController"

export const TutorialRoutes = (app: any) => {
    app.post('/tutorial', createTuto);
    app.put('/tutorial/:tutorial', update);
    app.delete('/tutorial/:tutorial', Delete);
    app.get('/tutorial/:tutorial', FindOne);
    app.get('/tutorial', FindAll);
}