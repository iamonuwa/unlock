export const REFRESH_TRANSACTION = 'REFRESH_TRANSACTION'
export const SET_TRANSACTION = 'SET_TRANSACTION'
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION'
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION'

export const refreshTransaction = transaction => ({
  type: REFRESH_TRANSACTION,
  transaction,
})

export const setTransaction = transaction => ({
  type: SET_TRANSACTION,
  transaction,
})

export const updateTransaction = transaction => ({
  type: UPDATE_TRANSACTION,
  transaction,
})

export const deleteTransaction = transaction => ({
  type: DELETE_TRANSACTION,
  transaction,
})
