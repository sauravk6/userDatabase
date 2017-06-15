export const ADD_NEW_USER = 'ADD_NEW_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'


export const addNewUser = item => ({
  type: ADD_NEW_USER,
  item
})

export const updateUser = item => ({
  type: UPDATE_USER,
  item
})

export const deleteUser = item => ({
  type: DELETE_USER,
  item
})

