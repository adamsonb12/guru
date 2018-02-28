import defaultRooms from './data/rooms.json';
import allAppointments from './data/appointments.json';
import {
  ADD_ROOM,
  REMOVE_ROOM,
  TASK_TOGGLE,
  SELECT_DETAILS,
  CONTACT_NAME_CHANGED,
  ADDRESS_CHANGED,
  PHONE_CHANGED,
  DATE_CHANGED,
  CONFIRM_APPOINTMENT
} from '../actions/Types';

const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const INITIAL_STATE = {
  appointments: allAppointments,
  address: '',
  addressValid: false,
  phone: '',
  phoneValid: false,
  contactName: '',
  chosenDate: new Date(),
  currentDate: new Date(),
  cleaningAppointment: {
    address: '',
    dateScheduled: '',
    cleaingAppointmentDate: '',
    contactName: '',
    contactPhone: '',
    rooms: [],
    price: 0,
    guruId: null,
    guruName: '',
    guruPhone: '',
    guruAvatarLink: '',
    guruAverageRating: 0
  },
  dateString: 'Select a date',
  timeString: 'Select a date',
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

function formatDateString(date) {
  let monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "June", "July",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayNameIndex = date.getDay();
  let monthIndex = date.getMonth();
  let dayNum = date.getDate();
  let year = date.getFullYear();
  
  return (days[dayNameIndex] + ', ' + monthNames[monthIndex] + ' ' + dayNum + ', ' + year);
}

function formatTimeString(date) {
  let hour = date.getHours();
  let s = hour > 12 ? 'PM' : 'AM';
  if(hour > 12) {
    hour = hour % 12;
  }
  let min = date.getMinutes();
  if(min < 10) {
    return (hour + ':' + '0' + min + ' ' + s);  
  }
  return (hour + ':' + min + ' ' + s);
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
    case ADDRESS_CHANGED:
      // See if the address is valid
      let valid = true;
      return { ...state, address: action.payload, addressValid: valid };
    case PHONE_CHANGED:
      if(phoneRegex.test(action.payload)) {
        valid = true;
      }
      else {
        valid = false;
      }
      return { ...state, phone: action.payload, phoneValid: valid };
    case CONTACT_NAME_CHANGED:
      return { ...state, contactName: action.payload };
    case DATE_CHANGED:
      return { ...state, chosenDate: action.payload, dateString: formatDateString(action.payload), timeString: formatTimeString(action.payload) };
    case CONFIRM_APPOINTMENT:
      let c = {};
      c.address = state.address;
      c.dateScheduled = state.currentDate;
      c.cleaningAppointmentDate = state.chosenDate;
      c.contactName = state.contactName;
      c.contactPhone = state.phone;
      c.rooms = state.selectedRooms;
      c.price = state.price;
      c.guruId = 1;
      c.guruName = 'Cleaning People Inc.';
      c.guruPhone = '8014451234';
      c.guruAvatarLink = 'https://heroichollywood.b-cdn.net/wp-content/uploads/2017/02/Finn.jpg?x42694';
      c.guruAverageRating = 4.73;
      let apps = state.appointments;
      apps.push(c);
      return { ...state, ...INITIAL_STATE, appointments: apps };
    default:
      return state;
  }
};
