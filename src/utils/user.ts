const userIsIn = (state: string) => "IN" === state.toUpperCase();

const userIsAdmin = (state: boolean) => state;
export { userIsIn, userIsAdmin };
