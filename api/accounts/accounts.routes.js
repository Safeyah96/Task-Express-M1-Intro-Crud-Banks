const express = require("express");
const accounts = require("../../accounts");
const accountRouter = express.Router();

accountRouter.get("/api/accounts", (request, response) => {
  return response.status(200).json({ accounts: accounts });
});

accountRouter.post("/api/create", (request, response) => {
  let length = accounts.length;
  const newID = accounts[length - 1].id + 1;
  const newAccount = {
    id: newID,
    username: request.body.username,
    funds: req.body.funds,
  };
  console.log("new account", newAccount);
});
ccounts.push(newAccount);
return response.status(201).json({ accounts: accounts });

accountRouter.delete("/api/account/:id", (request, response) => {
  const { id } = request.params;

  const updatedAccounts = accounts.filter((account) => {
    if (account.id != id) {
      return true;
    }
  });
  return response.status(200).json({ accounts: updatedAccounts });
});

accountRouter.put("/api/account/:id", (request, response) => {
  const { id } = request.params;

  const accountFound = accounts.find((account) => {
    if (account.id == id) {
      return true;
    }
  });
  accountFound.accountNumber = request.body.accountNumber;

  return response.status(200).json({ accounts: accountFound });
});

module.exports = accountRouter;
