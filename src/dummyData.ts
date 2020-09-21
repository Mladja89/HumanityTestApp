import { Employee, Position, Shift } from "./types";
import { sampleSize, random } from "lodash-es";

export const positions: Position[] = [
  {
    id: "5f67197d213d9ca09b02b996",
    name: "Bartender",
    color: "#c0ec6c",
  },
  {
    id: "5f67197db665a0b4be0aca3c",
    name: "Cook",
    color: "#e84680",
  },
  {
    id: "5f67197dd7d68ea4014e6303",
    name: "Dishwasher",
    color: "#60d9ea",
  },
  {
    id: "5f67197d1bae7a338637527c",
    name: "Server",
    color: "#fba0c1",
  },
];

export const employees: Employee[] = [
  {
    id: "5f67188066e795d381b48d8c",
    avatar: "http://api.adorable.io/avatars/200/0",
    position: positions[2],
    firstName: "Cummings",
    lastName: "Klein",
  },
  {
    id: "5f6718802b2fc45771a4f699",
    avatar: "http://api.adorable.io/avatars/200/1",
    position: positions[2],
    firstName: "Pearson",
    lastName: "Lamb",
  },
  {
    id: "5f671880d925e6dadaf6d4b1",
    avatar: "http://api.adorable.io/avatars/200/2",
    position: positions[0],
    firstName: "Cara",
    lastName: "Miles",
  },
  {
    id: "5f6718802a0311c8a3001f63",
    avatar: "http://api.adorable.io/avatars/200/3",
    position: positions[3],
    firstName: "Roseann",
    lastName: "Ryan",
  },
  {
    id: "5f671880b9c38d6190232d1b",
    avatar: "http://api.adorable.io/avatars/200/4",
    position: positions[1],
    firstName: "Evelyn",
    lastName: "Delaney",
  },
  {
    id: "5f671880898a34d223ff2ac8",
    avatar: "http://api.adorable.io/avatars/200/5",
    position: positions[1],
    firstName: "Roslyn",
    lastName: "Stafford",
  },
  {
    id: "5f671880cf18838141404b24",
    avatar: "http://api.adorable.io/avatars/200/6",
    position: positions[0],
    firstName: "Durham",
    lastName: "Gilbert",
  },
  {
    id: "5f671880f7869e6af90472fb",
    avatar: "http://api.adorable.io/avatars/200/7",
    position: positions[0],
    firstName: "Andrews",
    lastName: "Wilkerson",
  },
  {
    id: "5f671880ab78e041d293f964",
    avatar: "http://api.adorable.io/avatars/200/8",
    position: positions[2],
    firstName: "Sears",
    lastName: "Figueroa",
  },
  {
    id: "5f67188038434cb72ce6dc18",
    avatar: "http://api.adorable.io/avatars/200/9",
    position: positions[3],
    firstName: "Lana",
    lastName: "Gomez",
  },
  {
    id: "5f671bb1eaf3a6d2dce868c0",
    avatar: "http://api.adorable.io/avatars/200/10",
    position: positions[2],
    firstName: "Miranda",
    lastName: "Henry",
  },
  {
    id: "5f671bb1164027fa34895cdc",
    avatar: "http://api.adorable.io/avatars/200/11",
    position: positions[3],
    firstName: "Cruz",
    lastName: "Mills",
  },
  {
    id: "5f671bb17f1dd548adbbbdf7",
    avatar: "http://api.adorable.io/avatars/200/12",
    position: positions[3],
    firstName: "Reva",
    lastName: "Cotton",
  },
  {
    id: "5f671bb1ca3ed16febccf45b",
    avatar: "http://api.adorable.io/avatars/200/13",
    position: positions[0],
    firstName: "Frieda",
    lastName: "York",
  },
  {
    id: "5f671bb1430ac854654d3c22",
    avatar: "http://api.adorable.io/avatars/200/14",
    position: positions[1],
    firstName: "Alford",
    lastName: "Byers",
  },
  {
    id: "5f671bb19ef05068d27f6c18",
    avatar: "http://api.adorable.io/avatars/200/15",
    position: positions[0],
    firstName: "Fern",
    lastName: "Preston",
  },
  {
    id: "5f671bb140a4443c7e501df7",
    avatar: "http://api.adorable.io/avatars/200/16",
    position: positions[2],
    firstName: "Candy",
    lastName: "Marshall",
  },
  {
    id: "5f671bb1873c4fc2a548c3b3",
    avatar: "http://api.adorable.io/avatars/200/17",
    position: positions[1],
    firstName: "Penelope",
    lastName: "Conway",
  },
  {
    id: "5f671bb100b48df593263c9e",
    avatar: "http://api.adorable.io/avatars/200/18",
    position: positions[1],
    firstName: "Maricela",
    lastName: "Blake",
  },
  {
    id: "5f671bb1f35121416a876be9",
    avatar: "http://api.adorable.io/avatars/200/19",
    position: positions[2],
    firstName: "Wendy",
    lastName: "Kane",
  },
];

const employeesByPosition = (index: number) =>
  employees.filter((e) => e.position === positions[index]);

const sampleEmployees = (index: number) =>
  sampleSize(employeesByPosition(index), random(1,3));

export const shifts: Shift[] = [
  {
    id: "5f671a495ad32b179aadbb5a",
    position: positions[0],
    employees: sampleEmployees(0),
    name: "Bartender",
    dateFrom: '2020-09-21T08:00',
    dateTo: '2020-09-21T13:00',
  },
  {
    id: "5f671a4938caebb3302b3547",
    position: positions[2],
    employees: sampleEmployees(2),
    dateFrom: '2020-09-21T14:00',
    dateTo: '2020-09-21T16:00',
    name: 'Dishwasher'
  },
  {
    id: "5f671a4969b9ea0ba29a1a0e",
    position: positions[0],
    employees: sampleEmployees(0),
    name: "Bartender",
    dateFrom: '2020-09-18T08:00',
    dateTo: '2020-09-18T13:00',
  },
  {
    id: "5f671a49ba8c6b6fbc2ecf09",
    position: positions[3],
    employees: sampleEmployees(3),
    name: "Server",
    dateFrom: '2020-09-17T09:00',
    dateTo: '2020-09-17T18:00',
  },
  {
    id: "5f671a499b7669e5c5e80dbb",
    position: positions[2],
    employees: sampleEmployees(2),
    dateFrom: '2020-09-25T14:00',
    dateTo: '2020-09-25T16:00',
    name: 'Dishwasher'
  },
  {
    id: "5f671a4921dc6b5873759bc8",
    position: positions[1],
    employees: sampleEmployees(1),
    dateFrom: '2020-09-22T10:00',
    dateTo: '2020-09-22T16:00',
    name: 'Cook'
  },
  {
    id: "5f671a4969b8bc660a79b0f1",
    position: positions[3],
    employees: sampleEmployees(3),
    name: "Server",
    dateFrom: '2020-09-29T09:00',
    dateTo: '2020-09-29T14:00',

  },
  {
    id: "5f671a49e2416c2262717314",
    position: positions[1],
    employees: sampleEmployees(1),
    dateFrom: '2020-09-23T09:00',
    dateTo: '2020-09-23T17:00',
    name: 'Cook'
  },
];
