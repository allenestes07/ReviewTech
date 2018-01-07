const defaultState =   {
    opened: false
  };

export default function (state = defaultState, action) {
  // console.log(action.id);
  switch(action.type) {
    case "HEADER_DROPWDOWN":
    return Object.assign({}, state, {
      opened: !state.opened,
      itemClicked: action.itemClicked
    })
    default: return state;
  }
}
