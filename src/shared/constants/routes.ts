type ID = string | number;

export const routes = {
  Home: "/",
  NotAuth: "/not-auth",
  Round: {
    Main: "/round",
    DynamicId: "/round/:id",
    Id: (id: ID) => `/round/${id}`,
  },
};
