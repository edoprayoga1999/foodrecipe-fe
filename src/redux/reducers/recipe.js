const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
}

// pending, fulfilled, reject
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LATEST_RECIPE_PENDING':
      return { ...state, isLoading: true }
    case 'GET_LATEST_RECIPE_FULFILLED':
      return { ...state, isLoading: false, data: action.payload.data.data }
    case 'GET_LATEST_RECIPE_REJECTED':
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload.err }
    case 'GET_LIST_RECIPE_PENDING':
      return { ...state, isLoading: true }
    case 'GET_LIST_RECIPE_FULFILLED':
      return { ...state, isLoading: false, data: action.payload.data.data }
    case 'GET_LIST_RECIPE_REJECTED':
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload.err }
    case 'GET_MY_RECIPE_PENDING':
      return { ...state, isLoading: true }
    case 'GET_MY_RECIPE_FULFILLED':
      return { ...state, isLoading: false, data: action.payload.data.data }
    case 'GET_MY_RECIPE_REJECTED':
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload.err }
    case 'GET_DETAIL_RECIPE_PENDING':
      return { ...state, isLoading: true }
    case 'GET_DETAIL_RECIPE_FULFILLED':
      return { ...state, isLoading: false, data: action.payload.data.data }
    case 'GET_DETAIL_RECIPE_REJECTED':
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload.err }
    default:
      return state
  }
}
export default recipeReducer
