export interface envVars{
    Url:
    {
        login: string;
        getAllDishes: string;
        getDishById: string;
        addDish: string;
        updateDish: string;
        deleteDish: string;
    }
}

export const environmentUrls: envVars = {
  Url: {
    login: 'https://dish-app-list.azurewebsites.net/api/Dishes/login',
    getAllDishes: 'https://dish-app-list.azurewebsites.net/api/Dishes',
    getDishById: 'https://dish-app-list.azurewebsites.net/api/Dishes/', 
    addDish: 'https://dish-app-list.azurewebsites.net/api/Dishes',
    updateDish: 'https://dish-app-list.azurewebsites.net/api/Dishes',
    deleteDish: 'https://dish-app-list.azurewebsites.net/api/Dishes?id=',
  }
};