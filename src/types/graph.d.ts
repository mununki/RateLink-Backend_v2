export const typeDefs = ["type Mutation {\n  signup(email: String!, password: String!, nickname: String!): authResponse\n  login(email: String!, password: String!): authResponse\n  profileUpdate(company: String, image: String, job_boolean: String, profile_name: String): User!\n  addRateReader(userId: Int!): User!\n  removeRateReader(userId: Int!): User!\n  setRate(rateId: Int, newRate: String, handler: String!): Rate\n}\n\ntype authResponse {\n  token: String!\n  user: User!\n}\n\ntype Query {\n  getReaders: [User]!\n  getShowers: [User]!\n  getRates(before: String, last: Int, after: String, first: Int, queryParams: String): Rate_rateConnection\n  getInputpersons(search: String): [User]\n  getClients(search: String): [Client]\n  getLiners(search: String, showOurs: Boolean): [Liner]\n  getLocations(search: String, showOurs: Boolean, polOrPod: String): [Location]\n  getCNTRtypes(search: String, showOurs: Boolean): [CNTRtype]\n  me: User!\n}\n\ntype Rate_rateConnection {\n  pageInfo: PageInfo\n  edges: [Rate_rateEdge]\n}\n\ntype PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: String\n  endCursor: String\n}\n\ntype Rate_rateEdge {\n  node: Rate\n  cursor: String\n}\n\ntype Rate {\n  id: Int!\n  inputperson: User!\n  client: Client!\n  liner: Liner!\n  pol: Location!\n  pod: Location!\n  cntrtype: CNTRtype!\n  buying20: Int\n  buying40: Int\n  buying4H: Int\n  selling20: Int\n  selling40: Int\n  selling4H: Int\n  loadingFT: Int\n  dischargingFT: Int\n  offeredDate: String\n  effectiveDate: String\n  recordedDate: String\n  remark: String\n  deleted: Boolean\n}\n\ntype Client {\n  id: Int!\n  name: String!\n  salesman: User!\n  remarks: String!\n  recordedDate: String\n}\n\ntype Liner {\n  id: Int!\n  name: String!\n  label: String!\n}\n\ntype Location {\n  id: Int!\n  name: String!\n  country: String!\n  label: String!\n}\n\ntype CNTRtype {\n  id: Int!\n  name: String!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  nickname: String!\n  password: String!\n  profile: UserProfile!\n}\n\ntype UserProfile {\n  id: Int!\n  owner: User!\n  profile_name: String!\n  company: String\n  job_boolean: String\n  image: String\n}\n"];
/* tslint:disable */

export interface Query {
  getReaders: Array<User>;
  getShowers: Array<User>;
  getRates: Rate_rateConnection | null;
  getInputpersons: Array<User> | null;
  getClients: Array<Client> | null;
  getLiners: Array<Liner> | null;
  getLocations: Array<Location> | null;
  getCNTRtypes: Array<CNTRtype> | null;
  me: User;
}

export interface GetRatesQueryArgs {
  before: string | null;
  last: number | null;
  after: string | null;
  first: number | null;
  queryParams: string | null;
}

export interface GetInputpersonsQueryArgs {
  search: string | null;
}

export interface GetClientsQueryArgs {
  search: string | null;
}

export interface GetLinersQueryArgs {
  search: string | null;
  showOurs: boolean | null;
}

export interface GetLocationsQueryArgs {
  search: string | null;
  showOurs: boolean | null;
  polOrPod: string | null;
}

export interface GetCntRtypesQueryArgs {
  search: string | null;
  showOurs: boolean | null;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  password: string;
  profile: UserProfile;
}

export interface UserProfile {
  id: number;
  owner: User;
  profile_name: string;
  company: string | null;
  job_boolean: string | null;
  image: string | null;
}

export interface Rate_rateConnection {
  pageInfo: PageInfo | null;
  edges: Array<Rate_rateEdge> | null;
}

export interface PageInfo {
  hasNextPage: boolean | null;
  hasPreviousPage: boolean | null;
  startCursor: string | null;
  endCursor: string | null;
}

export interface Rate_rateEdge {
  node: Rate | null;
  cursor: string | null;
}

export interface Rate {
  id: number;
  inputperson: User;
  client: Client;
  liner: Liner;
  pol: Location;
  pod: Location;
  cntrtype: CNTRtype;
  buying20: number | null;
  buying40: number | null;
  buying4H: number | null;
  selling20: number | null;
  selling40: number | null;
  selling4H: number | null;
  loadingFT: number | null;
  dischargingFT: number | null;
  offeredDate: string | null;
  effectiveDate: string | null;
  recordedDate: string | null;
  remark: string | null;
  deleted: boolean | null;
}

export interface Client {
  id: number;
  name: string;
  salesman: User;
  remarks: string;
  recordedDate: string | null;
}

export interface Liner {
  id: number;
  name: string;
  label: string;
}

export interface Location {
  id: number;
  name: string;
  country: string;
  label: string;
}

export interface CNTRtype {
  id: number;
  name: string;
}

export interface Mutation {
  signup: authResponse | null;
  login: authResponse | null;
  profileUpdate: User;
  addRateReader: User;
  removeRateReader: User;
  setRate: Rate | null;
}

export interface SignupMutationArgs {
  email: string;
  password: string;
  nickname: string;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface ProfileUpdateMutationArgs {
  company: string | null;
  image: string | null;
  job_boolean: string | null;
  profile_name: string | null;
}

export interface AddRateReaderMutationArgs {
  userId: number;
}

export interface RemoveRateReaderMutationArgs {
  userId: number;
}

export interface SetRateMutationArgs {
  rateId: number | null;
  newRate: string | null;
  handler: string;
}

export interface authResponse {
  token: string;
  user: User;
}
