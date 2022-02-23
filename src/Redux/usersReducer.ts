export type LocationType = {
  country: string
  city: string
}

export type UserType = {
  id: number
  imgUrl: string
  followed: boolean
  fullName: string
  status: string
  location: LocationType
}

export type InitialStateType = {
  users: Array<UserType>
}
type GeneralType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState: InitialStateType = {
  users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {

  switch (action.type) {
    case 'FOLLOW': {
      return {...state, users: [...state.users].map(m => m.id === action.userId ? {...m, followed: true} : m)}
    }

    case 'UNFOLLOW': {
      return {...state, users: [...state.users].map(m => m.id === action.userId ? {...m, followed: false} : m)}
    }

    case 'SET-USERS': {

      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state
  }


}

export const followAC = (userId: number) => {
  return {
    type: 'FOLLOW',
    userId: userId,
  } as const
}
export const unfollowAC = (userId: number) => {
  return {
    type: 'UNFOLLOW',
    userId: userId,
  } as const
}
export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: 'SET-USERS',
    users: users,
  } as const
}