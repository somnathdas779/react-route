

export function signup(state = {}, action) {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { onsignup: true };
    case "REGISTER_SUCCESS":
      return {};
    case "REGISTER_FAILURE":
      return {};
    default:
      return state
  }
}