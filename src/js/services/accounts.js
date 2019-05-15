import Account from "./account"

export function newAccountInstance(address, type, keystring, ethereum, walletType, info) {
  var account = new Account(address, type, keystring, walletType, info)
  return account.sync(ethereum, account)
}

export function cloneAccount(address, type, keystring, walletType, info, balance, nonce, manualNonce  ) {
  var account = new Account(address, type, keystring, walletType, info, balance, nonce, manualNonce )
  return account
}

export function loadAccounts(node) {
  var accounts = {};

  return accounts;
}