import defaultRooms from './data/rooms.json';
import {
  ADD_ROOM,
  REMOVE_ROOM,
  TASK_TOGGLE,
  SELECT_DETAILS
} from '../actions/Types';

const INITIAL_STATE = {
  cleaningAppointment: {
    rooms: [],
    price: 0,
    address: {
      streetNumber: null,
      city: null,
      state: null,
      zip: null
    },
    // date stuff here
  },
  detailRoom: null,
  selectedRooms: [],
  price: 0
}

function containsObject(obj, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
}

function findIndex(obj, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return i;
    }
  }
  return;
}

function calcPrice(rooms) {
  let p = 0;
  if (rooms.length > 0) {
    rooms.forEach((room) => {
      room.roomTasks.forEach((task) => {
        if (task.active) {
          p = p + task.taskPrice;
        }
      });
    });
  }
  return p;
}

function changeTaskStatus(cleaningAppointment, task) {
  for(let i = 0; i < cleaningAppointment.rooms.length; i++) {
    if(cleaningAppointment.rooms[i].roomName === task.roomName) {
      cleaningAppointment.rooms[i].roomTasks.forEach((t) => {
        if(t.taskName === task.taskName) {
          t.active = !t.active;
        }
      });
    }
  }
  return cleaningAppointment;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ROOM:
      let room = Object.assign({}, defaultRooms.rooms[findIndex(action.payload, defaultRooms.rooms)]);
      room.active = true;
      let alist1 = [ room, ...state.selectedRooms ];
      let p1 = calcPrice(alist1);
      return { ...state, selectedRooms: alist1, price: p1 }
    case REMOVE_ROOM:
      let alist = [];
      let i = 0;
      if(state.selectedRooms.length > 1) {
        if(containsObject(action.payload, state.selectedRooms)) {
          i = findIndex(action.payload, state.selectedRooms);
        }
        alist = state.selectedRooms.slice();
        alist.splice(i, 1);
      }
      let p = calcPrice(alist);
      return { ...state, selectedRooms: alist, price: p };
    case TASK_TOGGLE:
      alist = [];
      i = 0;
      if(state.selectedRooms.length > 0) {
        if(containsObject(action.payload.room, state.selectedRooms)) {
          i = findIndex(action.payload.room, state.selectedRooms);
        }
        alist = state.selectedRooms.slice();
        let taskIndex = findIndex(action.payload.task, alist[i].roomTasks);
        alist[i].roomTasks[taskIndex].active = !alist[i].roomTasks[taskIndex].active;
      }
      p = calcPrice(alist);
      return { ...state, selectedRooms: alist, price: p, detailRoom: alist[i] }
    case SELECT_DETAILS:
      return { ...state, detailRoom: action.payload };
    default:
      return state;
  }
};
