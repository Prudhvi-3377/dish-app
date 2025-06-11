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
    login: 'https://localhost:1221/api/Dishes/login',
    getAllDishes: 'https://localhost:1221/api/Dishes',
    getDishById: 'https://localhost:1221/api/Dishes/GetDishes/id?id=', 
    addDish: 'https://localhost:1221/api/Dishes',
    updateDish: 'https://localhost:1221/api/Dishes',
    deleteDish: 'https://localhost:1221/api/Dishes?id=',
  }
};