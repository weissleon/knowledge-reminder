const fs = require("fs");

let userData = require("./user_data.json");

export const userRepo = {
  getAccount: () => userData.account,
  getPassword: () => userData.password,
  authenticate: (account: string, password: string) => {
    if (account === userData.account && password === userData.password)
      return true;
    return false;
  },
};
