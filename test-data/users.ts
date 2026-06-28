export const users = {
  validCredentials: {
    username: 'standard_user',
    password: 'secret_sauce'
  },

  invalidPassword: {
    username: 'standard_user',
    password: 'wrong_password'
  },

  invalidUsername: {
    username: 'wrong_user',
    password: 'secret_sauce'
  },

  invalidCredentials: {
    username: 'wrong_user',
    password: 'wrong_password'
  },

  lockedOutUser: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
}