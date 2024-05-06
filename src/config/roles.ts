const allRoles = {
  user: ['getProducts', 'getStocks', 'getImages', 'manageStocks'],
  admin: ['getUsers', 'getProducts', 'getStocks', 'getImages', 'manageUsers', 'manageProducts', 'manageStocks', 'manageImages'],
};

export const roles: string[] = Object.keys(allRoles);
export const roleRights: Map<string, string[]> = new Map(Object.entries(allRoles));
