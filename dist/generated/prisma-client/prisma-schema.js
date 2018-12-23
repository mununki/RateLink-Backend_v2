"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = `type Account_messagebox {
  id: Int!
  msg: String!
  receiver: Account_myuser
  sender: Account_myuser
  time: DateTime!
}

type Account_messageboxConnection {
  pageInfo: PageInfo!
  edges: [Account_messageboxEdge]!
  aggregate: AggregateAccount_messagebox!
}

input Account_messageboxCreateInput {
  msg: String!
  receiver: Account_myuserCreateOneWithoutAccount_messageboxes_receiversInput
  sender: Account_myuserCreateOneWithoutAccount_messageboxes_sendersInput
  time: DateTime!
}

input Account_messageboxCreateManyWithoutReceiverInput {
  create: [Account_messageboxCreateWithoutReceiverInput!]
  connect: [Account_messageboxWhereUniqueInput!]
}

input Account_messageboxCreateManyWithoutSenderInput {
  create: [Account_messageboxCreateWithoutSenderInput!]
  connect: [Account_messageboxWhereUniqueInput!]
}

input Account_messageboxCreateWithoutReceiverInput {
  msg: String!
  sender: Account_myuserCreateOneWithoutAccount_messageboxes_sendersInput
  time: DateTime!
}

input Account_messageboxCreateWithoutSenderInput {
  msg: String!
  receiver: Account_myuserCreateOneWithoutAccount_messageboxes_receiversInput
  time: DateTime!
}

type Account_messageboxEdge {
  node: Account_messagebox!
  cursor: String!
}

enum Account_messageboxOrderByInput {
  id_ASC
  id_DESC
  msg_ASC
  msg_DESC
  time_ASC
  time_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Account_messageboxPreviousValues {
  id: Int!
  msg: String!
  time: DateTime!
}

input Account_messageboxScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  msg: String
  msg_not: String
  msg_in: [String!]
  msg_not_in: [String!]
  msg_lt: String
  msg_lte: String
  msg_gt: String
  msg_gte: String
  msg_contains: String
  msg_not_contains: String
  msg_starts_with: String
  msg_not_starts_with: String
  msg_ends_with: String
  msg_not_ends_with: String
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  AND: [Account_messageboxScalarWhereInput!]
  OR: [Account_messageboxScalarWhereInput!]
  NOT: [Account_messageboxScalarWhereInput!]
}

type Account_messageboxSubscriptionPayload {
  mutation: MutationType!
  node: Account_messagebox
  updatedFields: [String!]
  previousValues: Account_messageboxPreviousValues
}

input Account_messageboxSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Account_messageboxWhereInput
  AND: [Account_messageboxSubscriptionWhereInput!]
  OR: [Account_messageboxSubscriptionWhereInput!]
  NOT: [Account_messageboxSubscriptionWhereInput!]
}

input Account_messageboxUpdateInput {
  msg: String
  receiver: Account_myuserUpdateOneWithoutAccount_messageboxes_receiversInput
  sender: Account_myuserUpdateOneWithoutAccount_messageboxes_sendersInput
  time: DateTime
}

input Account_messageboxUpdateManyDataInput {
  msg: String
  time: DateTime
}

input Account_messageboxUpdateManyMutationInput {
  msg: String
  time: DateTime
}

input Account_messageboxUpdateManyWithoutReceiverInput {
  create: [Account_messageboxCreateWithoutReceiverInput!]
  delete: [Account_messageboxWhereUniqueInput!]
  connect: [Account_messageboxWhereUniqueInput!]
  disconnect: [Account_messageboxWhereUniqueInput!]
  update: [Account_messageboxUpdateWithWhereUniqueWithoutReceiverInput!]
  upsert: [Account_messageboxUpsertWithWhereUniqueWithoutReceiverInput!]
  deleteMany: [Account_messageboxScalarWhereInput!]
  updateMany: [Account_messageboxUpdateManyWithWhereNestedInput!]
}

input Account_messageboxUpdateManyWithoutSenderInput {
  create: [Account_messageboxCreateWithoutSenderInput!]
  delete: [Account_messageboxWhereUniqueInput!]
  connect: [Account_messageboxWhereUniqueInput!]
  disconnect: [Account_messageboxWhereUniqueInput!]
  update: [Account_messageboxUpdateWithWhereUniqueWithoutSenderInput!]
  upsert: [Account_messageboxUpsertWithWhereUniqueWithoutSenderInput!]
  deleteMany: [Account_messageboxScalarWhereInput!]
  updateMany: [Account_messageboxUpdateManyWithWhereNestedInput!]
}

input Account_messageboxUpdateManyWithWhereNestedInput {
  where: Account_messageboxScalarWhereInput!
  data: Account_messageboxUpdateManyDataInput!
}

input Account_messageboxUpdateWithoutReceiverDataInput {
  msg: String
  sender: Account_myuserUpdateOneWithoutAccount_messageboxes_sendersInput
  time: DateTime
}

input Account_messageboxUpdateWithoutSenderDataInput {
  msg: String
  receiver: Account_myuserUpdateOneWithoutAccount_messageboxes_receiversInput
  time: DateTime
}

input Account_messageboxUpdateWithWhereUniqueWithoutReceiverInput {
  where: Account_messageboxWhereUniqueInput!
  data: Account_messageboxUpdateWithoutReceiverDataInput!
}

input Account_messageboxUpdateWithWhereUniqueWithoutSenderInput {
  where: Account_messageboxWhereUniqueInput!
  data: Account_messageboxUpdateWithoutSenderDataInput!
}

input Account_messageboxUpsertWithWhereUniqueWithoutReceiverInput {
  where: Account_messageboxWhereUniqueInput!
  update: Account_messageboxUpdateWithoutReceiverDataInput!
  create: Account_messageboxCreateWithoutReceiverInput!
}

input Account_messageboxUpsertWithWhereUniqueWithoutSenderInput {
  where: Account_messageboxWhereUniqueInput!
  update: Account_messageboxUpdateWithoutSenderDataInput!
  create: Account_messageboxCreateWithoutSenderInput!
}

input Account_messageboxWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  msg: String
  msg_not: String
  msg_in: [String!]
  msg_not_in: [String!]
  msg_lt: String
  msg_lte: String
  msg_gt: String
  msg_gte: String
  msg_contains: String
  msg_not_contains: String
  msg_starts_with: String
  msg_not_starts_with: String
  msg_ends_with: String
  msg_not_ends_with: String
  receiver: Account_myuserWhereInput
  sender: Account_myuserWhereInput
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  AND: [Account_messageboxWhereInput!]
  OR: [Account_messageboxWhereInput!]
  NOT: [Account_messageboxWhereInput!]
}

input Account_messageboxWhereUniqueInput {
  id: Int
}

type Account_myuser {
  account_messageboxes_receivers(where: Account_messageboxWhereInput, orderBy: Account_messageboxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_messagebox!]
  account_messageboxes_senders(where: Account_messageboxWhereInput, orderBy: Account_messageboxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_messagebox!]
  account_myuserprofiles(where: Account_myuserprofileWhereInput, orderBy: Account_myuserprofileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_myuserprofile!]
  account_ratereaders_readers(where: Account_ratereaderWhereInput, orderBy: Account_ratereaderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_ratereader!]
  account_ratereaders_showers(where: Account_ratereaderWhereInput, orderBy: Account_ratereaderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_ratereader!]
  django_admin_logs(where: Django_admin_logWhereInput, orderBy: Django_admin_logOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Django_admin_log!]
  email: String!
  id: Int!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients(where: Rate_clientWhereInput, orderBy: Rate_clientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_client!]
  rate_rates(where: Rate_rateWhereInput, orderBy: Rate_rateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_rate!]
}

type Account_myuserConnection {
  pageInfo: PageInfo!
  edges: [Account_myuserEdge]!
  aggregate: AggregateAccount_myuser!
}

input Account_myuserCreateInput {
  account_messageboxes_receivers: Account_messageboxCreateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxCreateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileCreateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderCreateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderCreateManyWithoutShowerInput
  django_admin_logs: Django_admin_logCreateManyWithoutUserInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients: Rate_clientCreateManyWithoutSalesmanInput
  rate_rates: Rate_rateCreateManyWithoutInputpersonInput
}

input Account_myuserCreateOneWithoutAccount_messageboxes_receiversInput {
  create: Account_myuserCreateWithoutAccount_messageboxes_receiversInput
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserCreateOneWithoutAccount_messageboxes_sendersInput {
  create: Account_myuserCreateWithoutAccount_messageboxes_sendersInput
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserCreateOneWithoutAccount_myuserprofilesInput {
  create: Account_myuserCreateWithoutAccount_myuserprofilesInput
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserCreateOneWithoutAccount_ratereaders_readersInput {
  create: Account_myuserCreateWithoutAccount_ratereaders_readersInput
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserCreateOneWithoutAccount_ratereaders_showersInput {
  create: Account_myuserCreateWithoutAccount_ratereaders_showersInput
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserCreateOneWithoutDjango_admin_logsInput {
  create: Account_myuserCreateWithoutDjango_admin_logsInput
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserCreateOneWithoutRate_clientsInput {
  create: Account_myuserCreateWithoutRate_clientsInput
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserCreateOneWithoutRate_ratesInput {
  create: Account_myuserCreateWithoutRate_ratesInput
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserCreateWithoutAccount_messageboxes_receiversInput {
  account_messageboxes_senders: Account_messageboxCreateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileCreateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderCreateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderCreateManyWithoutShowerInput
  django_admin_logs: Django_admin_logCreateManyWithoutUserInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients: Rate_clientCreateManyWithoutSalesmanInput
  rate_rates: Rate_rateCreateManyWithoutInputpersonInput
}

input Account_myuserCreateWithoutAccount_messageboxes_sendersInput {
  account_messageboxes_receivers: Account_messageboxCreateManyWithoutReceiverInput
  account_myuserprofiles: Account_myuserprofileCreateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderCreateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderCreateManyWithoutShowerInput
  django_admin_logs: Django_admin_logCreateManyWithoutUserInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients: Rate_clientCreateManyWithoutSalesmanInput
  rate_rates: Rate_rateCreateManyWithoutInputpersonInput
}

input Account_myuserCreateWithoutAccount_myuserprofilesInput {
  account_messageboxes_receivers: Account_messageboxCreateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxCreateManyWithoutSenderInput
  account_ratereaders_readers: Account_ratereaderCreateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderCreateManyWithoutShowerInput
  django_admin_logs: Django_admin_logCreateManyWithoutUserInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients: Rate_clientCreateManyWithoutSalesmanInput
  rate_rates: Rate_rateCreateManyWithoutInputpersonInput
}

input Account_myuserCreateWithoutAccount_ratereaders_readersInput {
  account_messageboxes_receivers: Account_messageboxCreateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxCreateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileCreateManyWithoutOwnerInput
  account_ratereaders_showers: Account_ratereaderCreateManyWithoutShowerInput
  django_admin_logs: Django_admin_logCreateManyWithoutUserInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients: Rate_clientCreateManyWithoutSalesmanInput
  rate_rates: Rate_rateCreateManyWithoutInputpersonInput
}

input Account_myuserCreateWithoutAccount_ratereaders_showersInput {
  account_messageboxes_receivers: Account_messageboxCreateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxCreateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileCreateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderCreateManyWithoutReaderInput
  django_admin_logs: Django_admin_logCreateManyWithoutUserInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients: Rate_clientCreateManyWithoutSalesmanInput
  rate_rates: Rate_rateCreateManyWithoutInputpersonInput
}

input Account_myuserCreateWithoutDjango_admin_logsInput {
  account_messageboxes_receivers: Account_messageboxCreateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxCreateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileCreateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderCreateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderCreateManyWithoutShowerInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients: Rate_clientCreateManyWithoutSalesmanInput
  rate_rates: Rate_rateCreateManyWithoutInputpersonInput
}

input Account_myuserCreateWithoutRate_clientsInput {
  account_messageboxes_receivers: Account_messageboxCreateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxCreateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileCreateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderCreateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderCreateManyWithoutShowerInput
  django_admin_logs: Django_admin_logCreateManyWithoutUserInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_rates: Rate_rateCreateManyWithoutInputpersonInput
}

input Account_myuserCreateWithoutRate_ratesInput {
  account_messageboxes_receivers: Account_messageboxCreateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxCreateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileCreateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderCreateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderCreateManyWithoutShowerInput
  django_admin_logs: Django_admin_logCreateManyWithoutUserInput
  email: String!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
  rate_clients: Rate_clientCreateManyWithoutSalesmanInput
}

type Account_myuserEdge {
  node: Account_myuser!
  cursor: String!
}

enum Account_myuserOrderByInput {
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  is_active_ASC
  is_active_DESC
  is_admin_ASC
  is_admin_DESC
  last_login_ASC
  last_login_DESC
  nickname_ASC
  nickname_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Account_myuserPreviousValues {
  email: String!
  id: Int!
  is_active: Boolean!
  is_admin: Boolean!
  last_login: DateTime
  nickname: String!
  password: String!
}

type Account_myuserprofile {
  company: String!
  id: Int!
  image: String!
  job_boolean: String!
  owner: Account_myuser
  profile_name: String!
}

type Account_myuserprofileConnection {
  pageInfo: PageInfo!
  edges: [Account_myuserprofileEdge]!
  aggregate: AggregateAccount_myuserprofile!
}

input Account_myuserprofileCreateInput {
  company: String!
  image: String!
  job_boolean: String!
  owner: Account_myuserCreateOneWithoutAccount_myuserprofilesInput
  profile_name: String!
}

input Account_myuserprofileCreateManyWithoutOwnerInput {
  create: [Account_myuserprofileCreateWithoutOwnerInput!]
  connect: [Account_myuserprofileWhereUniqueInput!]
}

input Account_myuserprofileCreateWithoutOwnerInput {
  company: String!
  image: String!
  job_boolean: String!
  profile_name: String!
}

type Account_myuserprofileEdge {
  node: Account_myuserprofile!
  cursor: String!
}

enum Account_myuserprofileOrderByInput {
  company_ASC
  company_DESC
  id_ASC
  id_DESC
  image_ASC
  image_DESC
  job_boolean_ASC
  job_boolean_DESC
  profile_name_ASC
  profile_name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Account_myuserprofilePreviousValues {
  company: String!
  id: Int!
  image: String!
  job_boolean: String!
  profile_name: String!
}

input Account_myuserprofileScalarWhereInput {
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  job_boolean: String
  job_boolean_not: String
  job_boolean_in: [String!]
  job_boolean_not_in: [String!]
  job_boolean_lt: String
  job_boolean_lte: String
  job_boolean_gt: String
  job_boolean_gte: String
  job_boolean_contains: String
  job_boolean_not_contains: String
  job_boolean_starts_with: String
  job_boolean_not_starts_with: String
  job_boolean_ends_with: String
  job_boolean_not_ends_with: String
  profile_name: String
  profile_name_not: String
  profile_name_in: [String!]
  profile_name_not_in: [String!]
  profile_name_lt: String
  profile_name_lte: String
  profile_name_gt: String
  profile_name_gte: String
  profile_name_contains: String
  profile_name_not_contains: String
  profile_name_starts_with: String
  profile_name_not_starts_with: String
  profile_name_ends_with: String
  profile_name_not_ends_with: String
  AND: [Account_myuserprofileScalarWhereInput!]
  OR: [Account_myuserprofileScalarWhereInput!]
  NOT: [Account_myuserprofileScalarWhereInput!]
}

type Account_myuserprofileSubscriptionPayload {
  mutation: MutationType!
  node: Account_myuserprofile
  updatedFields: [String!]
  previousValues: Account_myuserprofilePreviousValues
}

input Account_myuserprofileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Account_myuserprofileWhereInput
  AND: [Account_myuserprofileSubscriptionWhereInput!]
  OR: [Account_myuserprofileSubscriptionWhereInput!]
  NOT: [Account_myuserprofileSubscriptionWhereInput!]
}

input Account_myuserprofileUpdateInput {
  company: String
  image: String
  job_boolean: String
  owner: Account_myuserUpdateOneWithoutAccount_myuserprofilesInput
  profile_name: String
}

input Account_myuserprofileUpdateManyDataInput {
  company: String
  image: String
  job_boolean: String
  profile_name: String
}

input Account_myuserprofileUpdateManyMutationInput {
  company: String
  image: String
  job_boolean: String
  profile_name: String
}

input Account_myuserprofileUpdateManyWithoutOwnerInput {
  create: [Account_myuserprofileCreateWithoutOwnerInput!]
  delete: [Account_myuserprofileWhereUniqueInput!]
  connect: [Account_myuserprofileWhereUniqueInput!]
  disconnect: [Account_myuserprofileWhereUniqueInput!]
  update: [Account_myuserprofileUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [Account_myuserprofileUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [Account_myuserprofileScalarWhereInput!]
  updateMany: [Account_myuserprofileUpdateManyWithWhereNestedInput!]
}

input Account_myuserprofileUpdateManyWithWhereNestedInput {
  where: Account_myuserprofileScalarWhereInput!
  data: Account_myuserprofileUpdateManyDataInput!
}

input Account_myuserprofileUpdateWithoutOwnerDataInput {
  company: String
  image: String
  job_boolean: String
  profile_name: String
}

input Account_myuserprofileUpdateWithWhereUniqueWithoutOwnerInput {
  where: Account_myuserprofileWhereUniqueInput!
  data: Account_myuserprofileUpdateWithoutOwnerDataInput!
}

input Account_myuserprofileUpsertWithWhereUniqueWithoutOwnerInput {
  where: Account_myuserprofileWhereUniqueInput!
  update: Account_myuserprofileUpdateWithoutOwnerDataInput!
  create: Account_myuserprofileCreateWithoutOwnerInput!
}

input Account_myuserprofileWhereInput {
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  job_boolean: String
  job_boolean_not: String
  job_boolean_in: [String!]
  job_boolean_not_in: [String!]
  job_boolean_lt: String
  job_boolean_lte: String
  job_boolean_gt: String
  job_boolean_gte: String
  job_boolean_contains: String
  job_boolean_not_contains: String
  job_boolean_starts_with: String
  job_boolean_not_starts_with: String
  job_boolean_ends_with: String
  job_boolean_not_ends_with: String
  owner: Account_myuserWhereInput
  profile_name: String
  profile_name_not: String
  profile_name_in: [String!]
  profile_name_not_in: [String!]
  profile_name_lt: String
  profile_name_lte: String
  profile_name_gt: String
  profile_name_gte: String
  profile_name_contains: String
  profile_name_not_contains: String
  profile_name_starts_with: String
  profile_name_not_starts_with: String
  profile_name_ends_with: String
  profile_name_not_ends_with: String
  AND: [Account_myuserprofileWhereInput!]
  OR: [Account_myuserprofileWhereInput!]
  NOT: [Account_myuserprofileWhereInput!]
}

input Account_myuserprofileWhereUniqueInput {
  id: Int
}

type Account_myuserSubscriptionPayload {
  mutation: MutationType!
  node: Account_myuser
  updatedFields: [String!]
  previousValues: Account_myuserPreviousValues
}

input Account_myuserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Account_myuserWhereInput
  AND: [Account_myuserSubscriptionWhereInput!]
  OR: [Account_myuserSubscriptionWhereInput!]
  NOT: [Account_myuserSubscriptionWhereInput!]
}

input Account_myuserUpdateInput {
  account_messageboxes_receivers: Account_messageboxUpdateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxUpdateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileUpdateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderUpdateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderUpdateManyWithoutShowerInput
  django_admin_logs: Django_admin_logUpdateManyWithoutUserInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_clients: Rate_clientUpdateManyWithoutSalesmanInput
  rate_rates: Rate_rateUpdateManyWithoutInputpersonInput
}

input Account_myuserUpdateManyMutationInput {
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
}

input Account_myuserUpdateOneWithoutAccount_messageboxes_receiversInput {
  create: Account_myuserCreateWithoutAccount_messageboxes_receiversInput
  update: Account_myuserUpdateWithoutAccount_messageboxes_receiversDataInput
  upsert: Account_myuserUpsertWithoutAccount_messageboxes_receiversInput
  delete: Boolean
  disconnect: Boolean
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserUpdateOneWithoutAccount_messageboxes_sendersInput {
  create: Account_myuserCreateWithoutAccount_messageboxes_sendersInput
  update: Account_myuserUpdateWithoutAccount_messageboxes_sendersDataInput
  upsert: Account_myuserUpsertWithoutAccount_messageboxes_sendersInput
  delete: Boolean
  disconnect: Boolean
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserUpdateOneWithoutAccount_myuserprofilesInput {
  create: Account_myuserCreateWithoutAccount_myuserprofilesInput
  update: Account_myuserUpdateWithoutAccount_myuserprofilesDataInput
  upsert: Account_myuserUpsertWithoutAccount_myuserprofilesInput
  delete: Boolean
  disconnect: Boolean
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserUpdateOneWithoutAccount_ratereaders_readersInput {
  create: Account_myuserCreateWithoutAccount_ratereaders_readersInput
  update: Account_myuserUpdateWithoutAccount_ratereaders_readersDataInput
  upsert: Account_myuserUpsertWithoutAccount_ratereaders_readersInput
  delete: Boolean
  disconnect: Boolean
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserUpdateOneWithoutAccount_ratereaders_showersInput {
  create: Account_myuserCreateWithoutAccount_ratereaders_showersInput
  update: Account_myuserUpdateWithoutAccount_ratereaders_showersDataInput
  upsert: Account_myuserUpsertWithoutAccount_ratereaders_showersInput
  delete: Boolean
  disconnect: Boolean
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserUpdateOneWithoutDjango_admin_logsInput {
  create: Account_myuserCreateWithoutDjango_admin_logsInput
  update: Account_myuserUpdateWithoutDjango_admin_logsDataInput
  upsert: Account_myuserUpsertWithoutDjango_admin_logsInput
  delete: Boolean
  disconnect: Boolean
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserUpdateOneWithoutRate_clientsInput {
  create: Account_myuserCreateWithoutRate_clientsInput
  update: Account_myuserUpdateWithoutRate_clientsDataInput
  upsert: Account_myuserUpsertWithoutRate_clientsInput
  delete: Boolean
  disconnect: Boolean
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserUpdateOneWithoutRate_ratesInput {
  create: Account_myuserCreateWithoutRate_ratesInput
  update: Account_myuserUpdateWithoutRate_ratesDataInput
  upsert: Account_myuserUpsertWithoutRate_ratesInput
  delete: Boolean
  disconnect: Boolean
  connect: Account_myuserWhereUniqueInput
}

input Account_myuserUpdateWithoutAccount_messageboxes_receiversDataInput {
  account_messageboxes_senders: Account_messageboxUpdateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileUpdateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderUpdateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderUpdateManyWithoutShowerInput
  django_admin_logs: Django_admin_logUpdateManyWithoutUserInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_clients: Rate_clientUpdateManyWithoutSalesmanInput
  rate_rates: Rate_rateUpdateManyWithoutInputpersonInput
}

input Account_myuserUpdateWithoutAccount_messageboxes_sendersDataInput {
  account_messageboxes_receivers: Account_messageboxUpdateManyWithoutReceiverInput
  account_myuserprofiles: Account_myuserprofileUpdateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderUpdateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderUpdateManyWithoutShowerInput
  django_admin_logs: Django_admin_logUpdateManyWithoutUserInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_clients: Rate_clientUpdateManyWithoutSalesmanInput
  rate_rates: Rate_rateUpdateManyWithoutInputpersonInput
}

input Account_myuserUpdateWithoutAccount_myuserprofilesDataInput {
  account_messageboxes_receivers: Account_messageboxUpdateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxUpdateManyWithoutSenderInput
  account_ratereaders_readers: Account_ratereaderUpdateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderUpdateManyWithoutShowerInput
  django_admin_logs: Django_admin_logUpdateManyWithoutUserInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_clients: Rate_clientUpdateManyWithoutSalesmanInput
  rate_rates: Rate_rateUpdateManyWithoutInputpersonInput
}

input Account_myuserUpdateWithoutAccount_ratereaders_readersDataInput {
  account_messageboxes_receivers: Account_messageboxUpdateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxUpdateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileUpdateManyWithoutOwnerInput
  account_ratereaders_showers: Account_ratereaderUpdateManyWithoutShowerInput
  django_admin_logs: Django_admin_logUpdateManyWithoutUserInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_clients: Rate_clientUpdateManyWithoutSalesmanInput
  rate_rates: Rate_rateUpdateManyWithoutInputpersonInput
}

input Account_myuserUpdateWithoutAccount_ratereaders_showersDataInput {
  account_messageboxes_receivers: Account_messageboxUpdateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxUpdateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileUpdateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderUpdateManyWithoutReaderInput
  django_admin_logs: Django_admin_logUpdateManyWithoutUserInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_clients: Rate_clientUpdateManyWithoutSalesmanInput
  rate_rates: Rate_rateUpdateManyWithoutInputpersonInput
}

input Account_myuserUpdateWithoutDjango_admin_logsDataInput {
  account_messageboxes_receivers: Account_messageboxUpdateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxUpdateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileUpdateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderUpdateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderUpdateManyWithoutShowerInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_clients: Rate_clientUpdateManyWithoutSalesmanInput
  rate_rates: Rate_rateUpdateManyWithoutInputpersonInput
}

input Account_myuserUpdateWithoutRate_clientsDataInput {
  account_messageboxes_receivers: Account_messageboxUpdateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxUpdateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileUpdateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderUpdateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderUpdateManyWithoutShowerInput
  django_admin_logs: Django_admin_logUpdateManyWithoutUserInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_rates: Rate_rateUpdateManyWithoutInputpersonInput
}

input Account_myuserUpdateWithoutRate_ratesDataInput {
  account_messageboxes_receivers: Account_messageboxUpdateManyWithoutReceiverInput
  account_messageboxes_senders: Account_messageboxUpdateManyWithoutSenderInput
  account_myuserprofiles: Account_myuserprofileUpdateManyWithoutOwnerInput
  account_ratereaders_readers: Account_ratereaderUpdateManyWithoutReaderInput
  account_ratereaders_showers: Account_ratereaderUpdateManyWithoutShowerInput
  django_admin_logs: Django_admin_logUpdateManyWithoutUserInput
  email: String
  is_active: Boolean
  is_admin: Boolean
  last_login: DateTime
  nickname: String
  password: String
  rate_clients: Rate_clientUpdateManyWithoutSalesmanInput
}

input Account_myuserUpsertWithoutAccount_messageboxes_receiversInput {
  update: Account_myuserUpdateWithoutAccount_messageboxes_receiversDataInput!
  create: Account_myuserCreateWithoutAccount_messageboxes_receiversInput!
}

input Account_myuserUpsertWithoutAccount_messageboxes_sendersInput {
  update: Account_myuserUpdateWithoutAccount_messageboxes_sendersDataInput!
  create: Account_myuserCreateWithoutAccount_messageboxes_sendersInput!
}

input Account_myuserUpsertWithoutAccount_myuserprofilesInput {
  update: Account_myuserUpdateWithoutAccount_myuserprofilesDataInput!
  create: Account_myuserCreateWithoutAccount_myuserprofilesInput!
}

input Account_myuserUpsertWithoutAccount_ratereaders_readersInput {
  update: Account_myuserUpdateWithoutAccount_ratereaders_readersDataInput!
  create: Account_myuserCreateWithoutAccount_ratereaders_readersInput!
}

input Account_myuserUpsertWithoutAccount_ratereaders_showersInput {
  update: Account_myuserUpdateWithoutAccount_ratereaders_showersDataInput!
  create: Account_myuserCreateWithoutAccount_ratereaders_showersInput!
}

input Account_myuserUpsertWithoutDjango_admin_logsInput {
  update: Account_myuserUpdateWithoutDjango_admin_logsDataInput!
  create: Account_myuserCreateWithoutDjango_admin_logsInput!
}

input Account_myuserUpsertWithoutRate_clientsInput {
  update: Account_myuserUpdateWithoutRate_clientsDataInput!
  create: Account_myuserCreateWithoutRate_clientsInput!
}

input Account_myuserUpsertWithoutRate_ratesInput {
  update: Account_myuserUpdateWithoutRate_ratesDataInput!
  create: Account_myuserCreateWithoutRate_ratesInput!
}

input Account_myuserWhereInput {
  account_messageboxes_receivers_every: Account_messageboxWhereInput
  account_messageboxes_receivers_some: Account_messageboxWhereInput
  account_messageboxes_receivers_none: Account_messageboxWhereInput
  account_messageboxes_senders_every: Account_messageboxWhereInput
  account_messageboxes_senders_some: Account_messageboxWhereInput
  account_messageboxes_senders_none: Account_messageboxWhereInput
  account_myuserprofiles_every: Account_myuserprofileWhereInput
  account_myuserprofiles_some: Account_myuserprofileWhereInput
  account_myuserprofiles_none: Account_myuserprofileWhereInput
  account_ratereaders_readers_every: Account_ratereaderWhereInput
  account_ratereaders_readers_some: Account_ratereaderWhereInput
  account_ratereaders_readers_none: Account_ratereaderWhereInput
  account_ratereaders_showers_every: Account_ratereaderWhereInput
  account_ratereaders_showers_some: Account_ratereaderWhereInput
  account_ratereaders_showers_none: Account_ratereaderWhereInput
  django_admin_logs_every: Django_admin_logWhereInput
  django_admin_logs_some: Django_admin_logWhereInput
  django_admin_logs_none: Django_admin_logWhereInput
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  is_active: Boolean
  is_active_not: Boolean
  is_admin: Boolean
  is_admin_not: Boolean
  last_login: DateTime
  last_login_not: DateTime
  last_login_in: [DateTime!]
  last_login_not_in: [DateTime!]
  last_login_lt: DateTime
  last_login_lte: DateTime
  last_login_gt: DateTime
  last_login_gte: DateTime
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  rate_clients_every: Rate_clientWhereInput
  rate_clients_some: Rate_clientWhereInput
  rate_clients_none: Rate_clientWhereInput
  rate_rates_every: Rate_rateWhereInput
  rate_rates_some: Rate_rateWhereInput
  rate_rates_none: Rate_rateWhereInput
  AND: [Account_myuserWhereInput!]
  OR: [Account_myuserWhereInput!]
  NOT: [Account_myuserWhereInput!]
}

input Account_myuserWhereUniqueInput {
  email: String
  id: Int
}

type Account_ratereader {
  id: Int!
  reader: Account_myuser
  relationship_date: DateTime!
  shower: Account_myuser
}

type Account_ratereaderConnection {
  pageInfo: PageInfo!
  edges: [Account_ratereaderEdge]!
  aggregate: AggregateAccount_ratereader!
}

input Account_ratereaderCreateInput {
  reader: Account_myuserCreateOneWithoutAccount_ratereaders_readersInput
  relationship_date: DateTime!
  shower: Account_myuserCreateOneWithoutAccount_ratereaders_showersInput
}

input Account_ratereaderCreateManyWithoutReaderInput {
  create: [Account_ratereaderCreateWithoutReaderInput!]
  connect: [Account_ratereaderWhereUniqueInput!]
}

input Account_ratereaderCreateManyWithoutShowerInput {
  create: [Account_ratereaderCreateWithoutShowerInput!]
  connect: [Account_ratereaderWhereUniqueInput!]
}

input Account_ratereaderCreateWithoutReaderInput {
  relationship_date: DateTime!
  shower: Account_myuserCreateOneWithoutAccount_ratereaders_showersInput
}

input Account_ratereaderCreateWithoutShowerInput {
  reader: Account_myuserCreateOneWithoutAccount_ratereaders_readersInput
  relationship_date: DateTime!
}

type Account_ratereaderEdge {
  node: Account_ratereader!
  cursor: String!
}

enum Account_ratereaderOrderByInput {
  id_ASC
  id_DESC
  relationship_date_ASC
  relationship_date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Account_ratereaderPreviousValues {
  id: Int!
  relationship_date: DateTime!
}

input Account_ratereaderScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  relationship_date: DateTime
  relationship_date_not: DateTime
  relationship_date_in: [DateTime!]
  relationship_date_not_in: [DateTime!]
  relationship_date_lt: DateTime
  relationship_date_lte: DateTime
  relationship_date_gt: DateTime
  relationship_date_gte: DateTime
  AND: [Account_ratereaderScalarWhereInput!]
  OR: [Account_ratereaderScalarWhereInput!]
  NOT: [Account_ratereaderScalarWhereInput!]
}

type Account_ratereaderSubscriptionPayload {
  mutation: MutationType!
  node: Account_ratereader
  updatedFields: [String!]
  previousValues: Account_ratereaderPreviousValues
}

input Account_ratereaderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Account_ratereaderWhereInput
  AND: [Account_ratereaderSubscriptionWhereInput!]
  OR: [Account_ratereaderSubscriptionWhereInput!]
  NOT: [Account_ratereaderSubscriptionWhereInput!]
}

input Account_ratereaderUpdateInput {
  reader: Account_myuserUpdateOneWithoutAccount_ratereaders_readersInput
  relationship_date: DateTime
  shower: Account_myuserUpdateOneWithoutAccount_ratereaders_showersInput
}

input Account_ratereaderUpdateManyDataInput {
  relationship_date: DateTime
}

input Account_ratereaderUpdateManyMutationInput {
  relationship_date: DateTime
}

input Account_ratereaderUpdateManyWithoutReaderInput {
  create: [Account_ratereaderCreateWithoutReaderInput!]
  delete: [Account_ratereaderWhereUniqueInput!]
  connect: [Account_ratereaderWhereUniqueInput!]
  disconnect: [Account_ratereaderWhereUniqueInput!]
  update: [Account_ratereaderUpdateWithWhereUniqueWithoutReaderInput!]
  upsert: [Account_ratereaderUpsertWithWhereUniqueWithoutReaderInput!]
  deleteMany: [Account_ratereaderScalarWhereInput!]
  updateMany: [Account_ratereaderUpdateManyWithWhereNestedInput!]
}

input Account_ratereaderUpdateManyWithoutShowerInput {
  create: [Account_ratereaderCreateWithoutShowerInput!]
  delete: [Account_ratereaderWhereUniqueInput!]
  connect: [Account_ratereaderWhereUniqueInput!]
  disconnect: [Account_ratereaderWhereUniqueInput!]
  update: [Account_ratereaderUpdateWithWhereUniqueWithoutShowerInput!]
  upsert: [Account_ratereaderUpsertWithWhereUniqueWithoutShowerInput!]
  deleteMany: [Account_ratereaderScalarWhereInput!]
  updateMany: [Account_ratereaderUpdateManyWithWhereNestedInput!]
}

input Account_ratereaderUpdateManyWithWhereNestedInput {
  where: Account_ratereaderScalarWhereInput!
  data: Account_ratereaderUpdateManyDataInput!
}

input Account_ratereaderUpdateWithoutReaderDataInput {
  relationship_date: DateTime
  shower: Account_myuserUpdateOneWithoutAccount_ratereaders_showersInput
}

input Account_ratereaderUpdateWithoutShowerDataInput {
  reader: Account_myuserUpdateOneWithoutAccount_ratereaders_readersInput
  relationship_date: DateTime
}

input Account_ratereaderUpdateWithWhereUniqueWithoutReaderInput {
  where: Account_ratereaderWhereUniqueInput!
  data: Account_ratereaderUpdateWithoutReaderDataInput!
}

input Account_ratereaderUpdateWithWhereUniqueWithoutShowerInput {
  where: Account_ratereaderWhereUniqueInput!
  data: Account_ratereaderUpdateWithoutShowerDataInput!
}

input Account_ratereaderUpsertWithWhereUniqueWithoutReaderInput {
  where: Account_ratereaderWhereUniqueInput!
  update: Account_ratereaderUpdateWithoutReaderDataInput!
  create: Account_ratereaderCreateWithoutReaderInput!
}

input Account_ratereaderUpsertWithWhereUniqueWithoutShowerInput {
  where: Account_ratereaderWhereUniqueInput!
  update: Account_ratereaderUpdateWithoutShowerDataInput!
  create: Account_ratereaderCreateWithoutShowerInput!
}

input Account_ratereaderWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  reader: Account_myuserWhereInput
  relationship_date: DateTime
  relationship_date_not: DateTime
  relationship_date_in: [DateTime!]
  relationship_date_not_in: [DateTime!]
  relationship_date_lt: DateTime
  relationship_date_lte: DateTime
  relationship_date_gt: DateTime
  relationship_date_gte: DateTime
  shower: Account_myuserWhereInput
  AND: [Account_ratereaderWhereInput!]
  OR: [Account_ratereaderWhereInput!]
  NOT: [Account_ratereaderWhereInput!]
}

input Account_ratereaderWhereUniqueInput {
  id: Int
}

type AggregateAccount_messagebox {
  count: Int!
}

type AggregateAccount_myuser {
  count: Int!
}

type AggregateAccount_myuserprofile {
  count: Int!
}

type AggregateAccount_ratereader {
  count: Int!
}

type AggregateAuth_group {
  count: Int!
}

type AggregateAuth_group_permissions {
  count: Int!
}

type AggregateAuth_permission {
  count: Int!
}

type AggregateCountrycity_liner {
  count: Int!
}

type AggregateCountrycity_location {
  count: Int!
}

type AggregateDjango_admin_log {
  count: Int!
}

type AggregateDjango_content_type {
  count: Int!
}

type AggregateDjango_migrations {
  count: Int!
}

type AggregateDjango_session {
  count: Int!
}

type AggregateRate_client {
  count: Int!
}

type AggregateRate_cntrtype {
  count: Int!
}

type AggregateRate_rate {
  count: Int!
}

type Auth_group {
  auth_group_permissionses(where: Auth_group_permissionsWhereInput, orderBy: Auth_group_permissionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Auth_group_permissions!]
  id: Int!
  name: String!
}

type Auth_group_permissions {
  group: Auth_group
  id: Int!
  permission: Auth_permission
}

type Auth_group_permissionsConnection {
  pageInfo: PageInfo!
  edges: [Auth_group_permissionsEdge]!
  aggregate: AggregateAuth_group_permissions!
}

input Auth_group_permissionsCreateInput {
  group: Auth_groupCreateOneWithoutAuth_group_permissionsesInput
  permission: Auth_permissionCreateOneWithoutAuth_group_permissionsesInput
}

input Auth_group_permissionsCreateManyWithoutGroupInput {
  create: [Auth_group_permissionsCreateWithoutGroupInput!]
  connect: [Auth_group_permissionsWhereUniqueInput!]
}

input Auth_group_permissionsCreateManyWithoutPermissionInput {
  create: [Auth_group_permissionsCreateWithoutPermissionInput!]
  connect: [Auth_group_permissionsWhereUniqueInput!]
}

input Auth_group_permissionsCreateWithoutGroupInput {
  permission: Auth_permissionCreateOneWithoutAuth_group_permissionsesInput
}

input Auth_group_permissionsCreateWithoutPermissionInput {
  group: Auth_groupCreateOneWithoutAuth_group_permissionsesInput
}

type Auth_group_permissionsEdge {
  node: Auth_group_permissions!
  cursor: String!
}

enum Auth_group_permissionsOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Auth_group_permissionsPreviousValues {
  id: Int!
}

input Auth_group_permissionsScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  AND: [Auth_group_permissionsScalarWhereInput!]
  OR: [Auth_group_permissionsScalarWhereInput!]
  NOT: [Auth_group_permissionsScalarWhereInput!]
}

type Auth_group_permissionsSubscriptionPayload {
  mutation: MutationType!
  node: Auth_group_permissions
  updatedFields: [String!]
  previousValues: Auth_group_permissionsPreviousValues
}

input Auth_group_permissionsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Auth_group_permissionsWhereInput
  AND: [Auth_group_permissionsSubscriptionWhereInput!]
  OR: [Auth_group_permissionsSubscriptionWhereInput!]
  NOT: [Auth_group_permissionsSubscriptionWhereInput!]
}

input Auth_group_permissionsUpdateInput {
  group: Auth_groupUpdateOneWithoutAuth_group_permissionsesInput
  permission: Auth_permissionUpdateOneWithoutAuth_group_permissionsesInput
}

input Auth_group_permissionsUpdateManyWithoutGroupInput {
  create: [Auth_group_permissionsCreateWithoutGroupInput!]
  delete: [Auth_group_permissionsWhereUniqueInput!]
  connect: [Auth_group_permissionsWhereUniqueInput!]
  disconnect: [Auth_group_permissionsWhereUniqueInput!]
  update: [Auth_group_permissionsUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [Auth_group_permissionsUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [Auth_group_permissionsScalarWhereInput!]
}

input Auth_group_permissionsUpdateManyWithoutPermissionInput {
  create: [Auth_group_permissionsCreateWithoutPermissionInput!]
  delete: [Auth_group_permissionsWhereUniqueInput!]
  connect: [Auth_group_permissionsWhereUniqueInput!]
  disconnect: [Auth_group_permissionsWhereUniqueInput!]
  update: [Auth_group_permissionsUpdateWithWhereUniqueWithoutPermissionInput!]
  upsert: [Auth_group_permissionsUpsertWithWhereUniqueWithoutPermissionInput!]
  deleteMany: [Auth_group_permissionsScalarWhereInput!]
}

input Auth_group_permissionsUpdateWithoutGroupDataInput {
  permission: Auth_permissionUpdateOneWithoutAuth_group_permissionsesInput
}

input Auth_group_permissionsUpdateWithoutPermissionDataInput {
  group: Auth_groupUpdateOneWithoutAuth_group_permissionsesInput
}

input Auth_group_permissionsUpdateWithWhereUniqueWithoutGroupInput {
  where: Auth_group_permissionsWhereUniqueInput!
  data: Auth_group_permissionsUpdateWithoutGroupDataInput!
}

input Auth_group_permissionsUpdateWithWhereUniqueWithoutPermissionInput {
  where: Auth_group_permissionsWhereUniqueInput!
  data: Auth_group_permissionsUpdateWithoutPermissionDataInput!
}

input Auth_group_permissionsUpsertWithWhereUniqueWithoutGroupInput {
  where: Auth_group_permissionsWhereUniqueInput!
  update: Auth_group_permissionsUpdateWithoutGroupDataInput!
  create: Auth_group_permissionsCreateWithoutGroupInput!
}

input Auth_group_permissionsUpsertWithWhereUniqueWithoutPermissionInput {
  where: Auth_group_permissionsWhereUniqueInput!
  update: Auth_group_permissionsUpdateWithoutPermissionDataInput!
  create: Auth_group_permissionsCreateWithoutPermissionInput!
}

input Auth_group_permissionsWhereInput {
  group: Auth_groupWhereInput
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  permission: Auth_permissionWhereInput
  AND: [Auth_group_permissionsWhereInput!]
  OR: [Auth_group_permissionsWhereInput!]
  NOT: [Auth_group_permissionsWhereInput!]
}

input Auth_group_permissionsWhereUniqueInput {
  id: Int
}

type Auth_groupConnection {
  pageInfo: PageInfo!
  edges: [Auth_groupEdge]!
  aggregate: AggregateAuth_group!
}

input Auth_groupCreateInput {
  auth_group_permissionses: Auth_group_permissionsCreateManyWithoutGroupInput
  name: String!
}

input Auth_groupCreateOneWithoutAuth_group_permissionsesInput {
  create: Auth_groupCreateWithoutAuth_group_permissionsesInput
  connect: Auth_groupWhereUniqueInput
}

input Auth_groupCreateWithoutAuth_group_permissionsesInput {
  name: String!
}

type Auth_groupEdge {
  node: Auth_group!
  cursor: String!
}

enum Auth_groupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Auth_groupPreviousValues {
  id: Int!
  name: String!
}

type Auth_groupSubscriptionPayload {
  mutation: MutationType!
  node: Auth_group
  updatedFields: [String!]
  previousValues: Auth_groupPreviousValues
}

input Auth_groupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Auth_groupWhereInput
  AND: [Auth_groupSubscriptionWhereInput!]
  OR: [Auth_groupSubscriptionWhereInput!]
  NOT: [Auth_groupSubscriptionWhereInput!]
}

input Auth_groupUpdateInput {
  auth_group_permissionses: Auth_group_permissionsUpdateManyWithoutGroupInput
  name: String
}

input Auth_groupUpdateManyMutationInput {
  name: String
}

input Auth_groupUpdateOneWithoutAuth_group_permissionsesInput {
  create: Auth_groupCreateWithoutAuth_group_permissionsesInput
  update: Auth_groupUpdateWithoutAuth_group_permissionsesDataInput
  upsert: Auth_groupUpsertWithoutAuth_group_permissionsesInput
  delete: Boolean
  disconnect: Boolean
  connect: Auth_groupWhereUniqueInput
}

input Auth_groupUpdateWithoutAuth_group_permissionsesDataInput {
  name: String
}

input Auth_groupUpsertWithoutAuth_group_permissionsesInput {
  update: Auth_groupUpdateWithoutAuth_group_permissionsesDataInput!
  create: Auth_groupCreateWithoutAuth_group_permissionsesInput!
}

input Auth_groupWhereInput {
  auth_group_permissionses_every: Auth_group_permissionsWhereInput
  auth_group_permissionses_some: Auth_group_permissionsWhereInput
  auth_group_permissionses_none: Auth_group_permissionsWhereInput
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [Auth_groupWhereInput!]
  OR: [Auth_groupWhereInput!]
  NOT: [Auth_groupWhereInput!]
}

input Auth_groupWhereUniqueInput {
  id: Int
  name: String
}

type Auth_permission {
  auth_group_permissionses(where: Auth_group_permissionsWhereInput, orderBy: Auth_group_permissionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Auth_group_permissions!]
  codename: String!
  content_type: Django_content_type
  id: Int!
  name: String!
}

type Auth_permissionConnection {
  pageInfo: PageInfo!
  edges: [Auth_permissionEdge]!
  aggregate: AggregateAuth_permission!
}

input Auth_permissionCreateInput {
  auth_group_permissionses: Auth_group_permissionsCreateManyWithoutPermissionInput
  codename: String!
  content_type: Django_content_typeCreateOneWithoutAuth_permissionsInput
  name: String!
}

input Auth_permissionCreateManyWithoutContent_typeInput {
  create: [Auth_permissionCreateWithoutContent_typeInput!]
  connect: [Auth_permissionWhereUniqueInput!]
}

input Auth_permissionCreateOneWithoutAuth_group_permissionsesInput {
  create: Auth_permissionCreateWithoutAuth_group_permissionsesInput
  connect: Auth_permissionWhereUniqueInput
}

input Auth_permissionCreateWithoutAuth_group_permissionsesInput {
  codename: String!
  content_type: Django_content_typeCreateOneWithoutAuth_permissionsInput
  name: String!
}

input Auth_permissionCreateWithoutContent_typeInput {
  auth_group_permissionses: Auth_group_permissionsCreateManyWithoutPermissionInput
  codename: String!
  name: String!
}

type Auth_permissionEdge {
  node: Auth_permission!
  cursor: String!
}

enum Auth_permissionOrderByInput {
  codename_ASC
  codename_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Auth_permissionPreviousValues {
  codename: String!
  id: Int!
  name: String!
}

input Auth_permissionScalarWhereInput {
  codename: String
  codename_not: String
  codename_in: [String!]
  codename_not_in: [String!]
  codename_lt: String
  codename_lte: String
  codename_gt: String
  codename_gte: String
  codename_contains: String
  codename_not_contains: String
  codename_starts_with: String
  codename_not_starts_with: String
  codename_ends_with: String
  codename_not_ends_with: String
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [Auth_permissionScalarWhereInput!]
  OR: [Auth_permissionScalarWhereInput!]
  NOT: [Auth_permissionScalarWhereInput!]
}

type Auth_permissionSubscriptionPayload {
  mutation: MutationType!
  node: Auth_permission
  updatedFields: [String!]
  previousValues: Auth_permissionPreviousValues
}

input Auth_permissionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Auth_permissionWhereInput
  AND: [Auth_permissionSubscriptionWhereInput!]
  OR: [Auth_permissionSubscriptionWhereInput!]
  NOT: [Auth_permissionSubscriptionWhereInput!]
}

input Auth_permissionUpdateInput {
  auth_group_permissionses: Auth_group_permissionsUpdateManyWithoutPermissionInput
  codename: String
  content_type: Django_content_typeUpdateOneWithoutAuth_permissionsInput
  name: String
}

input Auth_permissionUpdateManyDataInput {
  codename: String
  name: String
}

input Auth_permissionUpdateManyMutationInput {
  codename: String
  name: String
}

input Auth_permissionUpdateManyWithoutContent_typeInput {
  create: [Auth_permissionCreateWithoutContent_typeInput!]
  delete: [Auth_permissionWhereUniqueInput!]
  connect: [Auth_permissionWhereUniqueInput!]
  disconnect: [Auth_permissionWhereUniqueInput!]
  update: [Auth_permissionUpdateWithWhereUniqueWithoutContent_typeInput!]
  upsert: [Auth_permissionUpsertWithWhereUniqueWithoutContent_typeInput!]
  deleteMany: [Auth_permissionScalarWhereInput!]
  updateMany: [Auth_permissionUpdateManyWithWhereNestedInput!]
}

input Auth_permissionUpdateManyWithWhereNestedInput {
  where: Auth_permissionScalarWhereInput!
  data: Auth_permissionUpdateManyDataInput!
}

input Auth_permissionUpdateOneWithoutAuth_group_permissionsesInput {
  create: Auth_permissionCreateWithoutAuth_group_permissionsesInput
  update: Auth_permissionUpdateWithoutAuth_group_permissionsesDataInput
  upsert: Auth_permissionUpsertWithoutAuth_group_permissionsesInput
  delete: Boolean
  disconnect: Boolean
  connect: Auth_permissionWhereUniqueInput
}

input Auth_permissionUpdateWithoutAuth_group_permissionsesDataInput {
  codename: String
  content_type: Django_content_typeUpdateOneWithoutAuth_permissionsInput
  name: String
}

input Auth_permissionUpdateWithoutContent_typeDataInput {
  auth_group_permissionses: Auth_group_permissionsUpdateManyWithoutPermissionInput
  codename: String
  name: String
}

input Auth_permissionUpdateWithWhereUniqueWithoutContent_typeInput {
  where: Auth_permissionWhereUniqueInput!
  data: Auth_permissionUpdateWithoutContent_typeDataInput!
}

input Auth_permissionUpsertWithoutAuth_group_permissionsesInput {
  update: Auth_permissionUpdateWithoutAuth_group_permissionsesDataInput!
  create: Auth_permissionCreateWithoutAuth_group_permissionsesInput!
}

input Auth_permissionUpsertWithWhereUniqueWithoutContent_typeInput {
  where: Auth_permissionWhereUniqueInput!
  update: Auth_permissionUpdateWithoutContent_typeDataInput!
  create: Auth_permissionCreateWithoutContent_typeInput!
}

input Auth_permissionWhereInput {
  auth_group_permissionses_every: Auth_group_permissionsWhereInput
  auth_group_permissionses_some: Auth_group_permissionsWhereInput
  auth_group_permissionses_none: Auth_group_permissionsWhereInput
  codename: String
  codename_not: String
  codename_in: [String!]
  codename_not_in: [String!]
  codename_lt: String
  codename_lte: String
  codename_gt: String
  codename_gte: String
  codename_contains: String
  codename_not_contains: String
  codename_starts_with: String
  codename_not_starts_with: String
  codename_ends_with: String
  codename_not_ends_with: String
  content_type: Django_content_typeWhereInput
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [Auth_permissionWhereInput!]
  OR: [Auth_permissionWhereInput!]
  NOT: [Auth_permissionWhereInput!]
}

input Auth_permissionWhereUniqueInput {
  codename: String
  id: Int
}

type BatchPayload {
  count: Long!
}

type Countrycity_liner {
  id: Int!
  label: String!
  name: String!
  rate_rates(where: Rate_rateWhereInput, orderBy: Rate_rateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_rate!]
}

type Countrycity_linerConnection {
  pageInfo: PageInfo!
  edges: [Countrycity_linerEdge]!
  aggregate: AggregateCountrycity_liner!
}

input Countrycity_linerCreateInput {
  label: String!
  name: String!
  rate_rates: Rate_rateCreateManyWithoutLinerInput
}

input Countrycity_linerCreateOneWithoutRate_ratesInput {
  create: Countrycity_linerCreateWithoutRate_ratesInput
  connect: Countrycity_linerWhereUniqueInput
}

input Countrycity_linerCreateWithoutRate_ratesInput {
  label: String!
  name: String!
}

type Countrycity_linerEdge {
  node: Countrycity_liner!
  cursor: String!
}

enum Countrycity_linerOrderByInput {
  id_ASC
  id_DESC
  label_ASC
  label_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Countrycity_linerPreviousValues {
  id: Int!
  label: String!
  name: String!
}

type Countrycity_linerSubscriptionPayload {
  mutation: MutationType!
  node: Countrycity_liner
  updatedFields: [String!]
  previousValues: Countrycity_linerPreviousValues
}

input Countrycity_linerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Countrycity_linerWhereInput
  AND: [Countrycity_linerSubscriptionWhereInput!]
  OR: [Countrycity_linerSubscriptionWhereInput!]
  NOT: [Countrycity_linerSubscriptionWhereInput!]
}

input Countrycity_linerUpdateInput {
  label: String
  name: String
  rate_rates: Rate_rateUpdateManyWithoutLinerInput
}

input Countrycity_linerUpdateManyMutationInput {
  label: String
  name: String
}

input Countrycity_linerUpdateOneWithoutRate_ratesInput {
  create: Countrycity_linerCreateWithoutRate_ratesInput
  update: Countrycity_linerUpdateWithoutRate_ratesDataInput
  upsert: Countrycity_linerUpsertWithoutRate_ratesInput
  delete: Boolean
  disconnect: Boolean
  connect: Countrycity_linerWhereUniqueInput
}

input Countrycity_linerUpdateWithoutRate_ratesDataInput {
  label: String
  name: String
}

input Countrycity_linerUpsertWithoutRate_ratesInput {
  update: Countrycity_linerUpdateWithoutRate_ratesDataInput!
  create: Countrycity_linerCreateWithoutRate_ratesInput!
}

input Countrycity_linerWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rate_rates_every: Rate_rateWhereInput
  rate_rates_some: Rate_rateWhereInput
  rate_rates_none: Rate_rateWhereInput
  AND: [Countrycity_linerWhereInput!]
  OR: [Countrycity_linerWhereInput!]
  NOT: [Countrycity_linerWhereInput!]
}

input Countrycity_linerWhereUniqueInput {
  id: Int
}

type Countrycity_location {
  country: String!
  id: Int!
  label: String!
  name: String!
  rate_rates_pods(where: Rate_rateWhereInput, orderBy: Rate_rateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_rate!]
  rate_rates_pols(where: Rate_rateWhereInput, orderBy: Rate_rateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_rate!]
}

type Countrycity_locationConnection {
  pageInfo: PageInfo!
  edges: [Countrycity_locationEdge]!
  aggregate: AggregateCountrycity_location!
}

input Countrycity_locationCreateInput {
  country: String!
  label: String!
  name: String!
  rate_rates_pods: Rate_rateCreateManyWithoutPodInput
  rate_rates_pols: Rate_rateCreateManyWithoutPolInput
}

input Countrycity_locationCreateOneWithoutRate_rates_podsInput {
  create: Countrycity_locationCreateWithoutRate_rates_podsInput
  connect: Countrycity_locationWhereUniqueInput
}

input Countrycity_locationCreateOneWithoutRate_rates_polsInput {
  create: Countrycity_locationCreateWithoutRate_rates_polsInput
  connect: Countrycity_locationWhereUniqueInput
}

input Countrycity_locationCreateWithoutRate_rates_podsInput {
  country: String!
  label: String!
  name: String!
  rate_rates_pols: Rate_rateCreateManyWithoutPolInput
}

input Countrycity_locationCreateWithoutRate_rates_polsInput {
  country: String!
  label: String!
  name: String!
  rate_rates_pods: Rate_rateCreateManyWithoutPodInput
}

type Countrycity_locationEdge {
  node: Countrycity_location!
  cursor: String!
}

enum Countrycity_locationOrderByInput {
  country_ASC
  country_DESC
  id_ASC
  id_DESC
  label_ASC
  label_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Countrycity_locationPreviousValues {
  country: String!
  id: Int!
  label: String!
  name: String!
}

type Countrycity_locationSubscriptionPayload {
  mutation: MutationType!
  node: Countrycity_location
  updatedFields: [String!]
  previousValues: Countrycity_locationPreviousValues
}

input Countrycity_locationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Countrycity_locationWhereInput
  AND: [Countrycity_locationSubscriptionWhereInput!]
  OR: [Countrycity_locationSubscriptionWhereInput!]
  NOT: [Countrycity_locationSubscriptionWhereInput!]
}

input Countrycity_locationUpdateInput {
  country: String
  label: String
  name: String
  rate_rates_pods: Rate_rateUpdateManyWithoutPodInput
  rate_rates_pols: Rate_rateUpdateManyWithoutPolInput
}

input Countrycity_locationUpdateManyMutationInput {
  country: String
  label: String
  name: String
}

input Countrycity_locationUpdateOneWithoutRate_rates_podsInput {
  create: Countrycity_locationCreateWithoutRate_rates_podsInput
  update: Countrycity_locationUpdateWithoutRate_rates_podsDataInput
  upsert: Countrycity_locationUpsertWithoutRate_rates_podsInput
  delete: Boolean
  disconnect: Boolean
  connect: Countrycity_locationWhereUniqueInput
}

input Countrycity_locationUpdateOneWithoutRate_rates_polsInput {
  create: Countrycity_locationCreateWithoutRate_rates_polsInput
  update: Countrycity_locationUpdateWithoutRate_rates_polsDataInput
  upsert: Countrycity_locationUpsertWithoutRate_rates_polsInput
  delete: Boolean
  disconnect: Boolean
  connect: Countrycity_locationWhereUniqueInput
}

input Countrycity_locationUpdateWithoutRate_rates_podsDataInput {
  country: String
  label: String
  name: String
  rate_rates_pols: Rate_rateUpdateManyWithoutPolInput
}

input Countrycity_locationUpdateWithoutRate_rates_polsDataInput {
  country: String
  label: String
  name: String
  rate_rates_pods: Rate_rateUpdateManyWithoutPodInput
}

input Countrycity_locationUpsertWithoutRate_rates_podsInput {
  update: Countrycity_locationUpdateWithoutRate_rates_podsDataInput!
  create: Countrycity_locationCreateWithoutRate_rates_podsInput!
}

input Countrycity_locationUpsertWithoutRate_rates_polsInput {
  update: Countrycity_locationUpdateWithoutRate_rates_polsDataInput!
  create: Countrycity_locationCreateWithoutRate_rates_polsInput!
}

input Countrycity_locationWhereInput {
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rate_rates_pods_every: Rate_rateWhereInput
  rate_rates_pods_some: Rate_rateWhereInput
  rate_rates_pods_none: Rate_rateWhereInput
  rate_rates_pols_every: Rate_rateWhereInput
  rate_rates_pols_some: Rate_rateWhereInput
  rate_rates_pols_none: Rate_rateWhereInput
  AND: [Countrycity_locationWhereInput!]
  OR: [Countrycity_locationWhereInput!]
  NOT: [Countrycity_locationWhereInput!]
}

input Countrycity_locationWhereUniqueInput {
  id: Int
}

scalar DateTime

type Django_admin_log {
  action_flag: Int!
  action_time: DateTime!
  change_message: String!
  content_type: Django_content_type
  id: Int!
  object_id: String
  object_repr: String!
  user: Account_myuser
}

type Django_admin_logConnection {
  pageInfo: PageInfo!
  edges: [Django_admin_logEdge]!
  aggregate: AggregateDjango_admin_log!
}

input Django_admin_logCreateInput {
  action_flag: Int!
  action_time: DateTime!
  change_message: String!
  content_type: Django_content_typeCreateOneWithoutDjango_admin_logsInput
  object_id: String
  object_repr: String!
  user: Account_myuserCreateOneWithoutDjango_admin_logsInput
}

input Django_admin_logCreateManyWithoutContent_typeInput {
  create: [Django_admin_logCreateWithoutContent_typeInput!]
  connect: [Django_admin_logWhereUniqueInput!]
}

input Django_admin_logCreateManyWithoutUserInput {
  create: [Django_admin_logCreateWithoutUserInput!]
  connect: [Django_admin_logWhereUniqueInput!]
}

input Django_admin_logCreateWithoutContent_typeInput {
  action_flag: Int!
  action_time: DateTime!
  change_message: String!
  object_id: String
  object_repr: String!
  user: Account_myuserCreateOneWithoutDjango_admin_logsInput
}

input Django_admin_logCreateWithoutUserInput {
  action_flag: Int!
  action_time: DateTime!
  change_message: String!
  content_type: Django_content_typeCreateOneWithoutDjango_admin_logsInput
  object_id: String
  object_repr: String!
}

type Django_admin_logEdge {
  node: Django_admin_log!
  cursor: String!
}

enum Django_admin_logOrderByInput {
  action_flag_ASC
  action_flag_DESC
  action_time_ASC
  action_time_DESC
  change_message_ASC
  change_message_DESC
  id_ASC
  id_DESC
  object_id_ASC
  object_id_DESC
  object_repr_ASC
  object_repr_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Django_admin_logPreviousValues {
  action_flag: Int!
  action_time: DateTime!
  change_message: String!
  id: Int!
  object_id: String
  object_repr: String!
}

input Django_admin_logScalarWhereInput {
  action_flag: Int
  action_flag_not: Int
  action_flag_in: [Int!]
  action_flag_not_in: [Int!]
  action_flag_lt: Int
  action_flag_lte: Int
  action_flag_gt: Int
  action_flag_gte: Int
  action_time: DateTime
  action_time_not: DateTime
  action_time_in: [DateTime!]
  action_time_not_in: [DateTime!]
  action_time_lt: DateTime
  action_time_lte: DateTime
  action_time_gt: DateTime
  action_time_gte: DateTime
  change_message: String
  change_message_not: String
  change_message_in: [String!]
  change_message_not_in: [String!]
  change_message_lt: String
  change_message_lte: String
  change_message_gt: String
  change_message_gte: String
  change_message_contains: String
  change_message_not_contains: String
  change_message_starts_with: String
  change_message_not_starts_with: String
  change_message_ends_with: String
  change_message_not_ends_with: String
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  object_id: String
  object_id_not: String
  object_id_in: [String!]
  object_id_not_in: [String!]
  object_id_lt: String
  object_id_lte: String
  object_id_gt: String
  object_id_gte: String
  object_id_contains: String
  object_id_not_contains: String
  object_id_starts_with: String
  object_id_not_starts_with: String
  object_id_ends_with: String
  object_id_not_ends_with: String
  object_repr: String
  object_repr_not: String
  object_repr_in: [String!]
  object_repr_not_in: [String!]
  object_repr_lt: String
  object_repr_lte: String
  object_repr_gt: String
  object_repr_gte: String
  object_repr_contains: String
  object_repr_not_contains: String
  object_repr_starts_with: String
  object_repr_not_starts_with: String
  object_repr_ends_with: String
  object_repr_not_ends_with: String
  AND: [Django_admin_logScalarWhereInput!]
  OR: [Django_admin_logScalarWhereInput!]
  NOT: [Django_admin_logScalarWhereInput!]
}

type Django_admin_logSubscriptionPayload {
  mutation: MutationType!
  node: Django_admin_log
  updatedFields: [String!]
  previousValues: Django_admin_logPreviousValues
}

input Django_admin_logSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Django_admin_logWhereInput
  AND: [Django_admin_logSubscriptionWhereInput!]
  OR: [Django_admin_logSubscriptionWhereInput!]
  NOT: [Django_admin_logSubscriptionWhereInput!]
}

input Django_admin_logUpdateInput {
  action_flag: Int
  action_time: DateTime
  change_message: String
  content_type: Django_content_typeUpdateOneWithoutDjango_admin_logsInput
  object_id: String
  object_repr: String
  user: Account_myuserUpdateOneWithoutDjango_admin_logsInput
}

input Django_admin_logUpdateManyDataInput {
  action_flag: Int
  action_time: DateTime
  change_message: String
  object_id: String
  object_repr: String
}

input Django_admin_logUpdateManyMutationInput {
  action_flag: Int
  action_time: DateTime
  change_message: String
  object_id: String
  object_repr: String
}

input Django_admin_logUpdateManyWithoutContent_typeInput {
  create: [Django_admin_logCreateWithoutContent_typeInput!]
  delete: [Django_admin_logWhereUniqueInput!]
  connect: [Django_admin_logWhereUniqueInput!]
  disconnect: [Django_admin_logWhereUniqueInput!]
  update: [Django_admin_logUpdateWithWhereUniqueWithoutContent_typeInput!]
  upsert: [Django_admin_logUpsertWithWhereUniqueWithoutContent_typeInput!]
  deleteMany: [Django_admin_logScalarWhereInput!]
  updateMany: [Django_admin_logUpdateManyWithWhereNestedInput!]
}

input Django_admin_logUpdateManyWithoutUserInput {
  create: [Django_admin_logCreateWithoutUserInput!]
  delete: [Django_admin_logWhereUniqueInput!]
  connect: [Django_admin_logWhereUniqueInput!]
  disconnect: [Django_admin_logWhereUniqueInput!]
  update: [Django_admin_logUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [Django_admin_logUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [Django_admin_logScalarWhereInput!]
  updateMany: [Django_admin_logUpdateManyWithWhereNestedInput!]
}

input Django_admin_logUpdateManyWithWhereNestedInput {
  where: Django_admin_logScalarWhereInput!
  data: Django_admin_logUpdateManyDataInput!
}

input Django_admin_logUpdateWithoutContent_typeDataInput {
  action_flag: Int
  action_time: DateTime
  change_message: String
  object_id: String
  object_repr: String
  user: Account_myuserUpdateOneWithoutDjango_admin_logsInput
}

input Django_admin_logUpdateWithoutUserDataInput {
  action_flag: Int
  action_time: DateTime
  change_message: String
  content_type: Django_content_typeUpdateOneWithoutDjango_admin_logsInput
  object_id: String
  object_repr: String
}

input Django_admin_logUpdateWithWhereUniqueWithoutContent_typeInput {
  where: Django_admin_logWhereUniqueInput!
  data: Django_admin_logUpdateWithoutContent_typeDataInput!
}

input Django_admin_logUpdateWithWhereUniqueWithoutUserInput {
  where: Django_admin_logWhereUniqueInput!
  data: Django_admin_logUpdateWithoutUserDataInput!
}

input Django_admin_logUpsertWithWhereUniqueWithoutContent_typeInput {
  where: Django_admin_logWhereUniqueInput!
  update: Django_admin_logUpdateWithoutContent_typeDataInput!
  create: Django_admin_logCreateWithoutContent_typeInput!
}

input Django_admin_logUpsertWithWhereUniqueWithoutUserInput {
  where: Django_admin_logWhereUniqueInput!
  update: Django_admin_logUpdateWithoutUserDataInput!
  create: Django_admin_logCreateWithoutUserInput!
}

input Django_admin_logWhereInput {
  action_flag: Int
  action_flag_not: Int
  action_flag_in: [Int!]
  action_flag_not_in: [Int!]
  action_flag_lt: Int
  action_flag_lte: Int
  action_flag_gt: Int
  action_flag_gte: Int
  action_time: DateTime
  action_time_not: DateTime
  action_time_in: [DateTime!]
  action_time_not_in: [DateTime!]
  action_time_lt: DateTime
  action_time_lte: DateTime
  action_time_gt: DateTime
  action_time_gte: DateTime
  change_message: String
  change_message_not: String
  change_message_in: [String!]
  change_message_not_in: [String!]
  change_message_lt: String
  change_message_lte: String
  change_message_gt: String
  change_message_gte: String
  change_message_contains: String
  change_message_not_contains: String
  change_message_starts_with: String
  change_message_not_starts_with: String
  change_message_ends_with: String
  change_message_not_ends_with: String
  content_type: Django_content_typeWhereInput
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  object_id: String
  object_id_not: String
  object_id_in: [String!]
  object_id_not_in: [String!]
  object_id_lt: String
  object_id_lte: String
  object_id_gt: String
  object_id_gte: String
  object_id_contains: String
  object_id_not_contains: String
  object_id_starts_with: String
  object_id_not_starts_with: String
  object_id_ends_with: String
  object_id_not_ends_with: String
  object_repr: String
  object_repr_not: String
  object_repr_in: [String!]
  object_repr_not_in: [String!]
  object_repr_lt: String
  object_repr_lte: String
  object_repr_gt: String
  object_repr_gte: String
  object_repr_contains: String
  object_repr_not_contains: String
  object_repr_starts_with: String
  object_repr_not_starts_with: String
  object_repr_ends_with: String
  object_repr_not_ends_with: String
  user: Account_myuserWhereInput
  AND: [Django_admin_logWhereInput!]
  OR: [Django_admin_logWhereInput!]
  NOT: [Django_admin_logWhereInput!]
}

input Django_admin_logWhereUniqueInput {
  id: Int
}

type Django_content_type {
  app_label: String!
  auth_permissions(where: Auth_permissionWhereInput, orderBy: Auth_permissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Auth_permission!]
  django_admin_logs(where: Django_admin_logWhereInput, orderBy: Django_admin_logOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Django_admin_log!]
  id: Int!
  model: String!
}

type Django_content_typeConnection {
  pageInfo: PageInfo!
  edges: [Django_content_typeEdge]!
  aggregate: AggregateDjango_content_type!
}

input Django_content_typeCreateInput {
  app_label: String!
  auth_permissions: Auth_permissionCreateManyWithoutContent_typeInput
  django_admin_logs: Django_admin_logCreateManyWithoutContent_typeInput
  model: String!
}

input Django_content_typeCreateOneWithoutAuth_permissionsInput {
  create: Django_content_typeCreateWithoutAuth_permissionsInput
  connect: Django_content_typeWhereUniqueInput
}

input Django_content_typeCreateOneWithoutDjango_admin_logsInput {
  create: Django_content_typeCreateWithoutDjango_admin_logsInput
  connect: Django_content_typeWhereUniqueInput
}

input Django_content_typeCreateWithoutAuth_permissionsInput {
  app_label: String!
  django_admin_logs: Django_admin_logCreateManyWithoutContent_typeInput
  model: String!
}

input Django_content_typeCreateWithoutDjango_admin_logsInput {
  app_label: String!
  auth_permissions: Auth_permissionCreateManyWithoutContent_typeInput
  model: String!
}

type Django_content_typeEdge {
  node: Django_content_type!
  cursor: String!
}

enum Django_content_typeOrderByInput {
  app_label_ASC
  app_label_DESC
  id_ASC
  id_DESC
  model_ASC
  model_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Django_content_typePreviousValues {
  app_label: String!
  id: Int!
  model: String!
}

type Django_content_typeSubscriptionPayload {
  mutation: MutationType!
  node: Django_content_type
  updatedFields: [String!]
  previousValues: Django_content_typePreviousValues
}

input Django_content_typeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Django_content_typeWhereInput
  AND: [Django_content_typeSubscriptionWhereInput!]
  OR: [Django_content_typeSubscriptionWhereInput!]
  NOT: [Django_content_typeSubscriptionWhereInput!]
}

input Django_content_typeUpdateInput {
  app_label: String
  auth_permissions: Auth_permissionUpdateManyWithoutContent_typeInput
  django_admin_logs: Django_admin_logUpdateManyWithoutContent_typeInput
  model: String
}

input Django_content_typeUpdateManyMutationInput {
  app_label: String
  model: String
}

input Django_content_typeUpdateOneWithoutAuth_permissionsInput {
  create: Django_content_typeCreateWithoutAuth_permissionsInput
  update: Django_content_typeUpdateWithoutAuth_permissionsDataInput
  upsert: Django_content_typeUpsertWithoutAuth_permissionsInput
  delete: Boolean
  disconnect: Boolean
  connect: Django_content_typeWhereUniqueInput
}

input Django_content_typeUpdateOneWithoutDjango_admin_logsInput {
  create: Django_content_typeCreateWithoutDjango_admin_logsInput
  update: Django_content_typeUpdateWithoutDjango_admin_logsDataInput
  upsert: Django_content_typeUpsertWithoutDjango_admin_logsInput
  delete: Boolean
  disconnect: Boolean
  connect: Django_content_typeWhereUniqueInput
}

input Django_content_typeUpdateWithoutAuth_permissionsDataInput {
  app_label: String
  django_admin_logs: Django_admin_logUpdateManyWithoutContent_typeInput
  model: String
}

input Django_content_typeUpdateWithoutDjango_admin_logsDataInput {
  app_label: String
  auth_permissions: Auth_permissionUpdateManyWithoutContent_typeInput
  model: String
}

input Django_content_typeUpsertWithoutAuth_permissionsInput {
  update: Django_content_typeUpdateWithoutAuth_permissionsDataInput!
  create: Django_content_typeCreateWithoutAuth_permissionsInput!
}

input Django_content_typeUpsertWithoutDjango_admin_logsInput {
  update: Django_content_typeUpdateWithoutDjango_admin_logsDataInput!
  create: Django_content_typeCreateWithoutDjango_admin_logsInput!
}

input Django_content_typeWhereInput {
  app_label: String
  app_label_not: String
  app_label_in: [String!]
  app_label_not_in: [String!]
  app_label_lt: String
  app_label_lte: String
  app_label_gt: String
  app_label_gte: String
  app_label_contains: String
  app_label_not_contains: String
  app_label_starts_with: String
  app_label_not_starts_with: String
  app_label_ends_with: String
  app_label_not_ends_with: String
  auth_permissions_every: Auth_permissionWhereInput
  auth_permissions_some: Auth_permissionWhereInput
  auth_permissions_none: Auth_permissionWhereInput
  django_admin_logs_every: Django_admin_logWhereInput
  django_admin_logs_some: Django_admin_logWhereInput
  django_admin_logs_none: Django_admin_logWhereInput
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  model: String
  model_not: String
  model_in: [String!]
  model_not_in: [String!]
  model_lt: String
  model_lte: String
  model_gt: String
  model_gte: String
  model_contains: String
  model_not_contains: String
  model_starts_with: String
  model_not_starts_with: String
  model_ends_with: String
  model_not_ends_with: String
  AND: [Django_content_typeWhereInput!]
  OR: [Django_content_typeWhereInput!]
  NOT: [Django_content_typeWhereInput!]
}

input Django_content_typeWhereUniqueInput {
  app_label: String
  id: Int
  model: String
}

type Django_migrations {
  app: String!
  applied: DateTime!
  id: Int!
  name: String!
}

type Django_migrationsConnection {
  pageInfo: PageInfo!
  edges: [Django_migrationsEdge]!
  aggregate: AggregateDjango_migrations!
}

input Django_migrationsCreateInput {
  app: String!
  applied: DateTime!
  name: String!
}

type Django_migrationsEdge {
  node: Django_migrations!
  cursor: String!
}

enum Django_migrationsOrderByInput {
  app_ASC
  app_DESC
  applied_ASC
  applied_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Django_migrationsPreviousValues {
  app: String!
  applied: DateTime!
  id: Int!
  name: String!
}

type Django_migrationsSubscriptionPayload {
  mutation: MutationType!
  node: Django_migrations
  updatedFields: [String!]
  previousValues: Django_migrationsPreviousValues
}

input Django_migrationsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Django_migrationsWhereInput
  AND: [Django_migrationsSubscriptionWhereInput!]
  OR: [Django_migrationsSubscriptionWhereInput!]
  NOT: [Django_migrationsSubscriptionWhereInput!]
}

input Django_migrationsUpdateInput {
  app: String
  applied: DateTime
  name: String
}

input Django_migrationsUpdateManyMutationInput {
  app: String
  applied: DateTime
  name: String
}

input Django_migrationsWhereInput {
  app: String
  app_not: String
  app_in: [String!]
  app_not_in: [String!]
  app_lt: String
  app_lte: String
  app_gt: String
  app_gte: String
  app_contains: String
  app_not_contains: String
  app_starts_with: String
  app_not_starts_with: String
  app_ends_with: String
  app_not_ends_with: String
  applied: DateTime
  applied_not: DateTime
  applied_in: [DateTime!]
  applied_not_in: [DateTime!]
  applied_lt: DateTime
  applied_lte: DateTime
  applied_gt: DateTime
  applied_gte: DateTime
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [Django_migrationsWhereInput!]
  OR: [Django_migrationsWhereInput!]
  NOT: [Django_migrationsWhereInput!]
}

input Django_migrationsWhereUniqueInput {
  id: Int
}

type Django_session {
  expire_date: DateTime!
  id: ID!
  session_data: String!
}

type Django_sessionConnection {
  pageInfo: PageInfo!
  edges: [Django_sessionEdge]!
  aggregate: AggregateDjango_session!
}

input Django_sessionCreateInput {
  expire_date: DateTime!
  session_data: String!
}

type Django_sessionEdge {
  node: Django_session!
  cursor: String!
}

enum Django_sessionOrderByInput {
  expire_date_ASC
  expire_date_DESC
  id_ASC
  id_DESC
  session_data_ASC
  session_data_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Django_sessionPreviousValues {
  expire_date: DateTime!
  id: ID!
  session_data: String!
}

type Django_sessionSubscriptionPayload {
  mutation: MutationType!
  node: Django_session
  updatedFields: [String!]
  previousValues: Django_sessionPreviousValues
}

input Django_sessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Django_sessionWhereInput
  AND: [Django_sessionSubscriptionWhereInput!]
  OR: [Django_sessionSubscriptionWhereInput!]
  NOT: [Django_sessionSubscriptionWhereInput!]
}

input Django_sessionUpdateInput {
  expire_date: DateTime
  session_data: String
}

input Django_sessionUpdateManyMutationInput {
  expire_date: DateTime
  session_data: String
}

input Django_sessionWhereInput {
  expire_date: DateTime
  expire_date_not: DateTime
  expire_date_in: [DateTime!]
  expire_date_not_in: [DateTime!]
  expire_date_lt: DateTime
  expire_date_lte: DateTime
  expire_date_gt: DateTime
  expire_date_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  session_data: String
  session_data_not: String
  session_data_in: [String!]
  session_data_not_in: [String!]
  session_data_lt: String
  session_data_lte: String
  session_data_gt: String
  session_data_gte: String
  session_data_contains: String
  session_data_not_contains: String
  session_data_starts_with: String
  session_data_not_starts_with: String
  session_data_ends_with: String
  session_data_not_ends_with: String
  AND: [Django_sessionWhereInput!]
  OR: [Django_sessionWhereInput!]
  NOT: [Django_sessionWhereInput!]
}

input Django_sessionWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAccount_messagebox(data: Account_messageboxCreateInput!): Account_messagebox!
  updateAccount_messagebox(data: Account_messageboxUpdateInput!, where: Account_messageboxWhereUniqueInput!): Account_messagebox
  updateManyAccount_messageboxes(data: Account_messageboxUpdateManyMutationInput!, where: Account_messageboxWhereInput): BatchPayload!
  upsertAccount_messagebox(where: Account_messageboxWhereUniqueInput!, create: Account_messageboxCreateInput!, update: Account_messageboxUpdateInput!): Account_messagebox!
  deleteAccount_messagebox(where: Account_messageboxWhereUniqueInput!): Account_messagebox
  deleteManyAccount_messageboxes(where: Account_messageboxWhereInput): BatchPayload!
  createAccount_myuser(data: Account_myuserCreateInput!): Account_myuser!
  updateAccount_myuser(data: Account_myuserUpdateInput!, where: Account_myuserWhereUniqueInput!): Account_myuser
  updateManyAccount_myusers(data: Account_myuserUpdateManyMutationInput!, where: Account_myuserWhereInput): BatchPayload!
  upsertAccount_myuser(where: Account_myuserWhereUniqueInput!, create: Account_myuserCreateInput!, update: Account_myuserUpdateInput!): Account_myuser!
  deleteAccount_myuser(where: Account_myuserWhereUniqueInput!): Account_myuser
  deleteManyAccount_myusers(where: Account_myuserWhereInput): BatchPayload!
  createAccount_myuserprofile(data: Account_myuserprofileCreateInput!): Account_myuserprofile!
  updateAccount_myuserprofile(data: Account_myuserprofileUpdateInput!, where: Account_myuserprofileWhereUniqueInput!): Account_myuserprofile
  updateManyAccount_myuserprofiles(data: Account_myuserprofileUpdateManyMutationInput!, where: Account_myuserprofileWhereInput): BatchPayload!
  upsertAccount_myuserprofile(where: Account_myuserprofileWhereUniqueInput!, create: Account_myuserprofileCreateInput!, update: Account_myuserprofileUpdateInput!): Account_myuserprofile!
  deleteAccount_myuserprofile(where: Account_myuserprofileWhereUniqueInput!): Account_myuserprofile
  deleteManyAccount_myuserprofiles(where: Account_myuserprofileWhereInput): BatchPayload!
  createAccount_ratereader(data: Account_ratereaderCreateInput!): Account_ratereader!
  updateAccount_ratereader(data: Account_ratereaderUpdateInput!, where: Account_ratereaderWhereUniqueInput!): Account_ratereader
  updateManyAccount_ratereaders(data: Account_ratereaderUpdateManyMutationInput!, where: Account_ratereaderWhereInput): BatchPayload!
  upsertAccount_ratereader(where: Account_ratereaderWhereUniqueInput!, create: Account_ratereaderCreateInput!, update: Account_ratereaderUpdateInput!): Account_ratereader!
  deleteAccount_ratereader(where: Account_ratereaderWhereUniqueInput!): Account_ratereader
  deleteManyAccount_ratereaders(where: Account_ratereaderWhereInput): BatchPayload!
  createAuth_group(data: Auth_groupCreateInput!): Auth_group!
  updateAuth_group(data: Auth_groupUpdateInput!, where: Auth_groupWhereUniqueInput!): Auth_group
  updateManyAuth_groups(data: Auth_groupUpdateManyMutationInput!, where: Auth_groupWhereInput): BatchPayload!
  upsertAuth_group(where: Auth_groupWhereUniqueInput!, create: Auth_groupCreateInput!, update: Auth_groupUpdateInput!): Auth_group!
  deleteAuth_group(where: Auth_groupWhereUniqueInput!): Auth_group
  deleteManyAuth_groups(where: Auth_groupWhereInput): BatchPayload!
  createAuth_group_permissions(data: Auth_group_permissionsCreateInput!): Auth_group_permissions!
  updateAuth_group_permissions(data: Auth_group_permissionsUpdateInput!, where: Auth_group_permissionsWhereUniqueInput!): Auth_group_permissions
  upsertAuth_group_permissions(where: Auth_group_permissionsWhereUniqueInput!, create: Auth_group_permissionsCreateInput!, update: Auth_group_permissionsUpdateInput!): Auth_group_permissions!
  deleteAuth_group_permissions(where: Auth_group_permissionsWhereUniqueInput!): Auth_group_permissions
  deleteManyAuth_group_permissionses(where: Auth_group_permissionsWhereInput): BatchPayload!
  createAuth_permission(data: Auth_permissionCreateInput!): Auth_permission!
  updateAuth_permission(data: Auth_permissionUpdateInput!, where: Auth_permissionWhereUniqueInput!): Auth_permission
  updateManyAuth_permissions(data: Auth_permissionUpdateManyMutationInput!, where: Auth_permissionWhereInput): BatchPayload!
  upsertAuth_permission(where: Auth_permissionWhereUniqueInput!, create: Auth_permissionCreateInput!, update: Auth_permissionUpdateInput!): Auth_permission!
  deleteAuth_permission(where: Auth_permissionWhereUniqueInput!): Auth_permission
  deleteManyAuth_permissions(where: Auth_permissionWhereInput): BatchPayload!
  createCountrycity_liner(data: Countrycity_linerCreateInput!): Countrycity_liner!
  updateCountrycity_liner(data: Countrycity_linerUpdateInput!, where: Countrycity_linerWhereUniqueInput!): Countrycity_liner
  updateManyCountrycity_liners(data: Countrycity_linerUpdateManyMutationInput!, where: Countrycity_linerWhereInput): BatchPayload!
  upsertCountrycity_liner(where: Countrycity_linerWhereUniqueInput!, create: Countrycity_linerCreateInput!, update: Countrycity_linerUpdateInput!): Countrycity_liner!
  deleteCountrycity_liner(where: Countrycity_linerWhereUniqueInput!): Countrycity_liner
  deleteManyCountrycity_liners(where: Countrycity_linerWhereInput): BatchPayload!
  createCountrycity_location(data: Countrycity_locationCreateInput!): Countrycity_location!
  updateCountrycity_location(data: Countrycity_locationUpdateInput!, where: Countrycity_locationWhereUniqueInput!): Countrycity_location
  updateManyCountrycity_locations(data: Countrycity_locationUpdateManyMutationInput!, where: Countrycity_locationWhereInput): BatchPayload!
  upsertCountrycity_location(where: Countrycity_locationWhereUniqueInput!, create: Countrycity_locationCreateInput!, update: Countrycity_locationUpdateInput!): Countrycity_location!
  deleteCountrycity_location(where: Countrycity_locationWhereUniqueInput!): Countrycity_location
  deleteManyCountrycity_locations(where: Countrycity_locationWhereInput): BatchPayload!
  createDjango_admin_log(data: Django_admin_logCreateInput!): Django_admin_log!
  updateDjango_admin_log(data: Django_admin_logUpdateInput!, where: Django_admin_logWhereUniqueInput!): Django_admin_log
  updateManyDjango_admin_logs(data: Django_admin_logUpdateManyMutationInput!, where: Django_admin_logWhereInput): BatchPayload!
  upsertDjango_admin_log(where: Django_admin_logWhereUniqueInput!, create: Django_admin_logCreateInput!, update: Django_admin_logUpdateInput!): Django_admin_log!
  deleteDjango_admin_log(where: Django_admin_logWhereUniqueInput!): Django_admin_log
  deleteManyDjango_admin_logs(where: Django_admin_logWhereInput): BatchPayload!
  createDjango_content_type(data: Django_content_typeCreateInput!): Django_content_type!
  updateDjango_content_type(data: Django_content_typeUpdateInput!, where: Django_content_typeWhereUniqueInput!): Django_content_type
  updateManyDjango_content_types(data: Django_content_typeUpdateManyMutationInput!, where: Django_content_typeWhereInput): BatchPayload!
  upsertDjango_content_type(where: Django_content_typeWhereUniqueInput!, create: Django_content_typeCreateInput!, update: Django_content_typeUpdateInput!): Django_content_type!
  deleteDjango_content_type(where: Django_content_typeWhereUniqueInput!): Django_content_type
  deleteManyDjango_content_types(where: Django_content_typeWhereInput): BatchPayload!
  createDjango_migrations(data: Django_migrationsCreateInput!): Django_migrations!
  updateDjango_migrations(data: Django_migrationsUpdateInput!, where: Django_migrationsWhereUniqueInput!): Django_migrations
  updateManyDjango_migrationses(data: Django_migrationsUpdateManyMutationInput!, where: Django_migrationsWhereInput): BatchPayload!
  upsertDjango_migrations(where: Django_migrationsWhereUniqueInput!, create: Django_migrationsCreateInput!, update: Django_migrationsUpdateInput!): Django_migrations!
  deleteDjango_migrations(where: Django_migrationsWhereUniqueInput!): Django_migrations
  deleteManyDjango_migrationses(where: Django_migrationsWhereInput): BatchPayload!
  createDjango_session(data: Django_sessionCreateInput!): Django_session!
  updateDjango_session(data: Django_sessionUpdateInput!, where: Django_sessionWhereUniqueInput!): Django_session
  updateManyDjango_sessions(data: Django_sessionUpdateManyMutationInput!, where: Django_sessionWhereInput): BatchPayload!
  upsertDjango_session(where: Django_sessionWhereUniqueInput!, create: Django_sessionCreateInput!, update: Django_sessionUpdateInput!): Django_session!
  deleteDjango_session(where: Django_sessionWhereUniqueInput!): Django_session
  deleteManyDjango_sessions(where: Django_sessionWhereInput): BatchPayload!
  createRate_client(data: Rate_clientCreateInput!): Rate_client!
  updateRate_client(data: Rate_clientUpdateInput!, where: Rate_clientWhereUniqueInput!): Rate_client
  updateManyRate_clients(data: Rate_clientUpdateManyMutationInput!, where: Rate_clientWhereInput): BatchPayload!
  upsertRate_client(where: Rate_clientWhereUniqueInput!, create: Rate_clientCreateInput!, update: Rate_clientUpdateInput!): Rate_client!
  deleteRate_client(where: Rate_clientWhereUniqueInput!): Rate_client
  deleteManyRate_clients(where: Rate_clientWhereInput): BatchPayload!
  createRate_cntrtype(data: Rate_cntrtypeCreateInput!): Rate_cntrtype!
  updateRate_cntrtype(data: Rate_cntrtypeUpdateInput!, where: Rate_cntrtypeWhereUniqueInput!): Rate_cntrtype
  updateManyRate_cntrtypes(data: Rate_cntrtypeUpdateManyMutationInput!, where: Rate_cntrtypeWhereInput): BatchPayload!
  upsertRate_cntrtype(where: Rate_cntrtypeWhereUniqueInput!, create: Rate_cntrtypeCreateInput!, update: Rate_cntrtypeUpdateInput!): Rate_cntrtype!
  deleteRate_cntrtype(where: Rate_cntrtypeWhereUniqueInput!): Rate_cntrtype
  deleteManyRate_cntrtypes(where: Rate_cntrtypeWhereInput): BatchPayload!
  createRate_rate(data: Rate_rateCreateInput!): Rate_rate!
  updateRate_rate(data: Rate_rateUpdateInput!, where: Rate_rateWhereUniqueInput!): Rate_rate
  updateManyRate_rates(data: Rate_rateUpdateManyMutationInput!, where: Rate_rateWhereInput): BatchPayload!
  upsertRate_rate(where: Rate_rateWhereUniqueInput!, create: Rate_rateCreateInput!, update: Rate_rateUpdateInput!): Rate_rate!
  deleteRate_rate(where: Rate_rateWhereUniqueInput!): Rate_rate
  deleteManyRate_rates(where: Rate_rateWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  account_messagebox(where: Account_messageboxWhereUniqueInput!): Account_messagebox
  account_messageboxes(where: Account_messageboxWhereInput, orderBy: Account_messageboxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_messagebox]!
  account_messageboxesConnection(where: Account_messageboxWhereInput, orderBy: Account_messageboxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Account_messageboxConnection!
  account_myuser(where: Account_myuserWhereUniqueInput!): Account_myuser
  account_myusers(where: Account_myuserWhereInput, orderBy: Account_myuserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_myuser]!
  account_myusersConnection(where: Account_myuserWhereInput, orderBy: Account_myuserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Account_myuserConnection!
  account_myuserprofile(where: Account_myuserprofileWhereUniqueInput!): Account_myuserprofile
  account_myuserprofiles(where: Account_myuserprofileWhereInput, orderBy: Account_myuserprofileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_myuserprofile]!
  account_myuserprofilesConnection(where: Account_myuserprofileWhereInput, orderBy: Account_myuserprofileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Account_myuserprofileConnection!
  account_ratereader(where: Account_ratereaderWhereUniqueInput!): Account_ratereader
  account_ratereaders(where: Account_ratereaderWhereInput, orderBy: Account_ratereaderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account_ratereader]!
  account_ratereadersConnection(where: Account_ratereaderWhereInput, orderBy: Account_ratereaderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Account_ratereaderConnection!
  auth_group(where: Auth_groupWhereUniqueInput!): Auth_group
  auth_groups(where: Auth_groupWhereInput, orderBy: Auth_groupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Auth_group]!
  auth_groupsConnection(where: Auth_groupWhereInput, orderBy: Auth_groupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Auth_groupConnection!
  auth_group_permissions(where: Auth_group_permissionsWhereUniqueInput!): Auth_group_permissions
  auth_group_permissionses(where: Auth_group_permissionsWhereInput, orderBy: Auth_group_permissionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Auth_group_permissions]!
  auth_group_permissionsesConnection(where: Auth_group_permissionsWhereInput, orderBy: Auth_group_permissionsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Auth_group_permissionsConnection!
  auth_permission(where: Auth_permissionWhereUniqueInput!): Auth_permission
  auth_permissions(where: Auth_permissionWhereInput, orderBy: Auth_permissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Auth_permission]!
  auth_permissionsConnection(where: Auth_permissionWhereInput, orderBy: Auth_permissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Auth_permissionConnection!
  countrycity_liner(where: Countrycity_linerWhereUniqueInput!): Countrycity_liner
  countrycity_liners(where: Countrycity_linerWhereInput, orderBy: Countrycity_linerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Countrycity_liner]!
  countrycity_linersConnection(where: Countrycity_linerWhereInput, orderBy: Countrycity_linerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Countrycity_linerConnection!
  countrycity_location(where: Countrycity_locationWhereUniqueInput!): Countrycity_location
  countrycity_locations(where: Countrycity_locationWhereInput, orderBy: Countrycity_locationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Countrycity_location]!
  countrycity_locationsConnection(where: Countrycity_locationWhereInput, orderBy: Countrycity_locationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Countrycity_locationConnection!
  django_admin_log(where: Django_admin_logWhereUniqueInput!): Django_admin_log
  django_admin_logs(where: Django_admin_logWhereInput, orderBy: Django_admin_logOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Django_admin_log]!
  django_admin_logsConnection(where: Django_admin_logWhereInput, orderBy: Django_admin_logOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Django_admin_logConnection!
  django_content_type(where: Django_content_typeWhereUniqueInput!): Django_content_type
  django_content_types(where: Django_content_typeWhereInput, orderBy: Django_content_typeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Django_content_type]!
  django_content_typesConnection(where: Django_content_typeWhereInput, orderBy: Django_content_typeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Django_content_typeConnection!
  django_migrations(where: Django_migrationsWhereUniqueInput!): Django_migrations
  django_migrationses(where: Django_migrationsWhereInput, orderBy: Django_migrationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Django_migrations]!
  django_migrationsesConnection(where: Django_migrationsWhereInput, orderBy: Django_migrationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Django_migrationsConnection!
  django_session(where: Django_sessionWhereUniqueInput!): Django_session
  django_sessions(where: Django_sessionWhereInput, orderBy: Django_sessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Django_session]!
  django_sessionsConnection(where: Django_sessionWhereInput, orderBy: Django_sessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Django_sessionConnection!
  rate_client(where: Rate_clientWhereUniqueInput!): Rate_client
  rate_clients(where: Rate_clientWhereInput, orderBy: Rate_clientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_client]!
  rate_clientsConnection(where: Rate_clientWhereInput, orderBy: Rate_clientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Rate_clientConnection!
  rate_cntrtype(where: Rate_cntrtypeWhereUniqueInput!): Rate_cntrtype
  rate_cntrtypes(where: Rate_cntrtypeWhereInput, orderBy: Rate_cntrtypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_cntrtype]!
  rate_cntrtypesConnection(where: Rate_cntrtypeWhereInput, orderBy: Rate_cntrtypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Rate_cntrtypeConnection!
  rate_rate(where: Rate_rateWhereUniqueInput!): Rate_rate
  rate_rates(where: Rate_rateWhereInput, orderBy: Rate_rateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_rate]!
  rate_ratesConnection(where: Rate_rateWhereInput, orderBy: Rate_rateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Rate_rateConnection!
  node(id: ID!): Node
}

type Rate_client {
  id: Int!
  name: String!
  rate_rates(where: Rate_rateWhereInput, orderBy: Rate_rateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_rate!]
  recordedDate: DateTime!
  remarks: String!
  salesman: Account_myuser
}

type Rate_clientConnection {
  pageInfo: PageInfo!
  edges: [Rate_clientEdge]!
  aggregate: AggregateRate_client!
}

input Rate_clientCreateInput {
  name: String!
  rate_rates: Rate_rateCreateManyWithoutAccountInput
  recordedDate: DateTime!
  remarks: String!
  salesman: Account_myuserCreateOneWithoutRate_clientsInput
}

input Rate_clientCreateManyWithoutSalesmanInput {
  create: [Rate_clientCreateWithoutSalesmanInput!]
  connect: [Rate_clientWhereUniqueInput!]
}

input Rate_clientCreateOneWithoutRate_ratesInput {
  create: Rate_clientCreateWithoutRate_ratesInput
  connect: Rate_clientWhereUniqueInput
}

input Rate_clientCreateWithoutRate_ratesInput {
  name: String!
  recordedDate: DateTime!
  remarks: String!
  salesman: Account_myuserCreateOneWithoutRate_clientsInput
}

input Rate_clientCreateWithoutSalesmanInput {
  name: String!
  rate_rates: Rate_rateCreateManyWithoutAccountInput
  recordedDate: DateTime!
  remarks: String!
}

type Rate_clientEdge {
  node: Rate_client!
  cursor: String!
}

enum Rate_clientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  recordedDate_ASC
  recordedDate_DESC
  remarks_ASC
  remarks_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Rate_clientPreviousValues {
  id: Int!
  name: String!
  recordedDate: DateTime!
  remarks: String!
}

input Rate_clientScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  recordedDate: DateTime
  recordedDate_not: DateTime
  recordedDate_in: [DateTime!]
  recordedDate_not_in: [DateTime!]
  recordedDate_lt: DateTime
  recordedDate_lte: DateTime
  recordedDate_gt: DateTime
  recordedDate_gte: DateTime
  remarks: String
  remarks_not: String
  remarks_in: [String!]
  remarks_not_in: [String!]
  remarks_lt: String
  remarks_lte: String
  remarks_gt: String
  remarks_gte: String
  remarks_contains: String
  remarks_not_contains: String
  remarks_starts_with: String
  remarks_not_starts_with: String
  remarks_ends_with: String
  remarks_not_ends_with: String
  AND: [Rate_clientScalarWhereInput!]
  OR: [Rate_clientScalarWhereInput!]
  NOT: [Rate_clientScalarWhereInput!]
}

type Rate_clientSubscriptionPayload {
  mutation: MutationType!
  node: Rate_client
  updatedFields: [String!]
  previousValues: Rate_clientPreviousValues
}

input Rate_clientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Rate_clientWhereInput
  AND: [Rate_clientSubscriptionWhereInput!]
  OR: [Rate_clientSubscriptionWhereInput!]
  NOT: [Rate_clientSubscriptionWhereInput!]
}

input Rate_clientUpdateInput {
  name: String
  rate_rates: Rate_rateUpdateManyWithoutAccountInput
  recordedDate: DateTime
  remarks: String
  salesman: Account_myuserUpdateOneWithoutRate_clientsInput
}

input Rate_clientUpdateManyDataInput {
  name: String
  recordedDate: DateTime
  remarks: String
}

input Rate_clientUpdateManyMutationInput {
  name: String
  recordedDate: DateTime
  remarks: String
}

input Rate_clientUpdateManyWithoutSalesmanInput {
  create: [Rate_clientCreateWithoutSalesmanInput!]
  delete: [Rate_clientWhereUniqueInput!]
  connect: [Rate_clientWhereUniqueInput!]
  disconnect: [Rate_clientWhereUniqueInput!]
  update: [Rate_clientUpdateWithWhereUniqueWithoutSalesmanInput!]
  upsert: [Rate_clientUpsertWithWhereUniqueWithoutSalesmanInput!]
  deleteMany: [Rate_clientScalarWhereInput!]
  updateMany: [Rate_clientUpdateManyWithWhereNestedInput!]
}

input Rate_clientUpdateManyWithWhereNestedInput {
  where: Rate_clientScalarWhereInput!
  data: Rate_clientUpdateManyDataInput!
}

input Rate_clientUpdateOneWithoutRate_ratesInput {
  create: Rate_clientCreateWithoutRate_ratesInput
  update: Rate_clientUpdateWithoutRate_ratesDataInput
  upsert: Rate_clientUpsertWithoutRate_ratesInput
  delete: Boolean
  disconnect: Boolean
  connect: Rate_clientWhereUniqueInput
}

input Rate_clientUpdateWithoutRate_ratesDataInput {
  name: String
  recordedDate: DateTime
  remarks: String
  salesman: Account_myuserUpdateOneWithoutRate_clientsInput
}

input Rate_clientUpdateWithoutSalesmanDataInput {
  name: String
  rate_rates: Rate_rateUpdateManyWithoutAccountInput
  recordedDate: DateTime
  remarks: String
}

input Rate_clientUpdateWithWhereUniqueWithoutSalesmanInput {
  where: Rate_clientWhereUniqueInput!
  data: Rate_clientUpdateWithoutSalesmanDataInput!
}

input Rate_clientUpsertWithoutRate_ratesInput {
  update: Rate_clientUpdateWithoutRate_ratesDataInput!
  create: Rate_clientCreateWithoutRate_ratesInput!
}

input Rate_clientUpsertWithWhereUniqueWithoutSalesmanInput {
  where: Rate_clientWhereUniqueInput!
  update: Rate_clientUpdateWithoutSalesmanDataInput!
  create: Rate_clientCreateWithoutSalesmanInput!
}

input Rate_clientWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rate_rates_every: Rate_rateWhereInput
  rate_rates_some: Rate_rateWhereInput
  rate_rates_none: Rate_rateWhereInput
  recordedDate: DateTime
  recordedDate_not: DateTime
  recordedDate_in: [DateTime!]
  recordedDate_not_in: [DateTime!]
  recordedDate_lt: DateTime
  recordedDate_lte: DateTime
  recordedDate_gt: DateTime
  recordedDate_gte: DateTime
  remarks: String
  remarks_not: String
  remarks_in: [String!]
  remarks_not_in: [String!]
  remarks_lt: String
  remarks_lte: String
  remarks_gt: String
  remarks_gte: String
  remarks_contains: String
  remarks_not_contains: String
  remarks_starts_with: String
  remarks_not_starts_with: String
  remarks_ends_with: String
  remarks_not_ends_with: String
  salesman: Account_myuserWhereInput
  AND: [Rate_clientWhereInput!]
  OR: [Rate_clientWhereInput!]
  NOT: [Rate_clientWhereInput!]
}

input Rate_clientWhereUniqueInput {
  id: Int
}

type Rate_cntrtype {
  id: Int!
  name: String!
  rate_rates(where: Rate_rateWhereInput, orderBy: Rate_rateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rate_rate!]
}

type Rate_cntrtypeConnection {
  pageInfo: PageInfo!
  edges: [Rate_cntrtypeEdge]!
  aggregate: AggregateRate_cntrtype!
}

input Rate_cntrtypeCreateInput {
  name: String!
  rate_rates: Rate_rateCreateManyWithoutTypeInput
}

input Rate_cntrtypeCreateOneWithoutRate_ratesInput {
  create: Rate_cntrtypeCreateWithoutRate_ratesInput
  connect: Rate_cntrtypeWhereUniqueInput
}

input Rate_cntrtypeCreateWithoutRate_ratesInput {
  name: String!
}

type Rate_cntrtypeEdge {
  node: Rate_cntrtype!
  cursor: String!
}

enum Rate_cntrtypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Rate_cntrtypePreviousValues {
  id: Int!
  name: String!
}

type Rate_cntrtypeSubscriptionPayload {
  mutation: MutationType!
  node: Rate_cntrtype
  updatedFields: [String!]
  previousValues: Rate_cntrtypePreviousValues
}

input Rate_cntrtypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Rate_cntrtypeWhereInput
  AND: [Rate_cntrtypeSubscriptionWhereInput!]
  OR: [Rate_cntrtypeSubscriptionWhereInput!]
  NOT: [Rate_cntrtypeSubscriptionWhereInput!]
}

input Rate_cntrtypeUpdateInput {
  name: String
  rate_rates: Rate_rateUpdateManyWithoutTypeInput
}

input Rate_cntrtypeUpdateManyMutationInput {
  name: String
}

input Rate_cntrtypeUpdateOneWithoutRate_ratesInput {
  create: Rate_cntrtypeCreateWithoutRate_ratesInput
  update: Rate_cntrtypeUpdateWithoutRate_ratesDataInput
  upsert: Rate_cntrtypeUpsertWithoutRate_ratesInput
  delete: Boolean
  disconnect: Boolean
  connect: Rate_cntrtypeWhereUniqueInput
}

input Rate_cntrtypeUpdateWithoutRate_ratesDataInput {
  name: String
}

input Rate_cntrtypeUpsertWithoutRate_ratesInput {
  update: Rate_cntrtypeUpdateWithoutRate_ratesDataInput!
  create: Rate_cntrtypeCreateWithoutRate_ratesInput!
}

input Rate_cntrtypeWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rate_rates_every: Rate_rateWhereInput
  rate_rates_some: Rate_rateWhereInput
  rate_rates_none: Rate_rateWhereInput
  AND: [Rate_cntrtypeWhereInput!]
  OR: [Rate_cntrtypeWhereInput!]
  NOT: [Rate_cntrtypeWhereInput!]
}

input Rate_cntrtypeWhereUniqueInput {
  id: Int
}

type Rate_rate {
  account: Rate_client
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  id: Int!
  inputperson: Account_myuser
  liner: Countrycity_liner
  loadingFT: Int!
  offeredDate: DateTime!
  pod: Countrycity_location
  pol: Countrycity_location
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
  type: Rate_cntrtype
}

type Rate_rateConnection {
  pageInfo: PageInfo!
  edges: [Rate_rateEdge]!
  aggregate: AggregateRate_rate!
}

input Rate_rateCreateInput {
  account: Rate_clientCreateOneWithoutRate_ratesInput
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  inputperson: Account_myuserCreateOneWithoutRate_ratesInput
  liner: Countrycity_linerCreateOneWithoutRate_ratesInput
  loadingFT: Int!
  offeredDate: DateTime!
  pod: Countrycity_locationCreateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationCreateOneWithoutRate_rates_polsInput
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
  type: Rate_cntrtypeCreateOneWithoutRate_ratesInput
}

input Rate_rateCreateManyWithoutAccountInput {
  create: [Rate_rateCreateWithoutAccountInput!]
  connect: [Rate_rateWhereUniqueInput!]
}

input Rate_rateCreateManyWithoutInputpersonInput {
  create: [Rate_rateCreateWithoutInputpersonInput!]
  connect: [Rate_rateWhereUniqueInput!]
}

input Rate_rateCreateManyWithoutLinerInput {
  create: [Rate_rateCreateWithoutLinerInput!]
  connect: [Rate_rateWhereUniqueInput!]
}

input Rate_rateCreateManyWithoutPodInput {
  create: [Rate_rateCreateWithoutPodInput!]
  connect: [Rate_rateWhereUniqueInput!]
}

input Rate_rateCreateManyWithoutPolInput {
  create: [Rate_rateCreateWithoutPolInput!]
  connect: [Rate_rateWhereUniqueInput!]
}

input Rate_rateCreateManyWithoutTypeInput {
  create: [Rate_rateCreateWithoutTypeInput!]
  connect: [Rate_rateWhereUniqueInput!]
}

input Rate_rateCreateWithoutAccountInput {
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  inputperson: Account_myuserCreateOneWithoutRate_ratesInput
  liner: Countrycity_linerCreateOneWithoutRate_ratesInput
  loadingFT: Int!
  offeredDate: DateTime!
  pod: Countrycity_locationCreateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationCreateOneWithoutRate_rates_polsInput
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
  type: Rate_cntrtypeCreateOneWithoutRate_ratesInput
}

input Rate_rateCreateWithoutInputpersonInput {
  account: Rate_clientCreateOneWithoutRate_ratesInput
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  liner: Countrycity_linerCreateOneWithoutRate_ratesInput
  loadingFT: Int!
  offeredDate: DateTime!
  pod: Countrycity_locationCreateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationCreateOneWithoutRate_rates_polsInput
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
  type: Rate_cntrtypeCreateOneWithoutRate_ratesInput
}

input Rate_rateCreateWithoutLinerInput {
  account: Rate_clientCreateOneWithoutRate_ratesInput
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  inputperson: Account_myuserCreateOneWithoutRate_ratesInput
  loadingFT: Int!
  offeredDate: DateTime!
  pod: Countrycity_locationCreateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationCreateOneWithoutRate_rates_polsInput
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
  type: Rate_cntrtypeCreateOneWithoutRate_ratesInput
}

input Rate_rateCreateWithoutPodInput {
  account: Rate_clientCreateOneWithoutRate_ratesInput
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  inputperson: Account_myuserCreateOneWithoutRate_ratesInput
  liner: Countrycity_linerCreateOneWithoutRate_ratesInput
  loadingFT: Int!
  offeredDate: DateTime!
  pol: Countrycity_locationCreateOneWithoutRate_rates_polsInput
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
  type: Rate_cntrtypeCreateOneWithoutRate_ratesInput
}

input Rate_rateCreateWithoutPolInput {
  account: Rate_clientCreateOneWithoutRate_ratesInput
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  inputperson: Account_myuserCreateOneWithoutRate_ratesInput
  liner: Countrycity_linerCreateOneWithoutRate_ratesInput
  loadingFT: Int!
  offeredDate: DateTime!
  pod: Countrycity_locationCreateOneWithoutRate_rates_podsInput
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
  type: Rate_cntrtypeCreateOneWithoutRate_ratesInput
}

input Rate_rateCreateWithoutTypeInput {
  account: Rate_clientCreateOneWithoutRate_ratesInput
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  inputperson: Account_myuserCreateOneWithoutRate_ratesInput
  liner: Countrycity_linerCreateOneWithoutRate_ratesInput
  loadingFT: Int!
  offeredDate: DateTime!
  pod: Countrycity_locationCreateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationCreateOneWithoutRate_rates_polsInput
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
}

type Rate_rateEdge {
  node: Rate_rate!
  cursor: String!
}

enum Rate_rateOrderByInput {
  buying20_ASC
  buying20_DESC
  buying40_ASC
  buying40_DESC
  buying4H_ASC
  buying4H_DESC
  deleted_ASC
  deleted_DESC
  dischargingFT_ASC
  dischargingFT_DESC
  effectiveDate_ASC
  effectiveDate_DESC
  id_ASC
  id_DESC
  loadingFT_ASC
  loadingFT_DESC
  offeredDate_ASC
  offeredDate_DESC
  recordedDate_ASC
  recordedDate_DESC
  remark_ASC
  remark_DESC
  selling20_ASC
  selling20_DESC
  selling40_ASC
  selling40_DESC
  selling4H_ASC
  selling4H_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Rate_ratePreviousValues {
  buying20: Int!
  buying40: Int!
  buying4H: Int!
  deleted: Boolean!
  dischargingFT: Int!
  effectiveDate: DateTime!
  id: Int!
  loadingFT: Int!
  offeredDate: DateTime!
  recordedDate: DateTime!
  remark: String!
  selling20: Int!
  selling40: Int!
  selling4H: Int!
}

input Rate_rateScalarWhereInput {
  buying20: Int
  buying20_not: Int
  buying20_in: [Int!]
  buying20_not_in: [Int!]
  buying20_lt: Int
  buying20_lte: Int
  buying20_gt: Int
  buying20_gte: Int
  buying40: Int
  buying40_not: Int
  buying40_in: [Int!]
  buying40_not_in: [Int!]
  buying40_lt: Int
  buying40_lte: Int
  buying40_gt: Int
  buying40_gte: Int
  buying4H: Int
  buying4H_not: Int
  buying4H_in: [Int!]
  buying4H_not_in: [Int!]
  buying4H_lt: Int
  buying4H_lte: Int
  buying4H_gt: Int
  buying4H_gte: Int
  deleted: Boolean
  deleted_not: Boolean
  dischargingFT: Int
  dischargingFT_not: Int
  dischargingFT_in: [Int!]
  dischargingFT_not_in: [Int!]
  dischargingFT_lt: Int
  dischargingFT_lte: Int
  dischargingFT_gt: Int
  dischargingFT_gte: Int
  effectiveDate: DateTime
  effectiveDate_not: DateTime
  effectiveDate_in: [DateTime!]
  effectiveDate_not_in: [DateTime!]
  effectiveDate_lt: DateTime
  effectiveDate_lte: DateTime
  effectiveDate_gt: DateTime
  effectiveDate_gte: DateTime
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  loadingFT: Int
  loadingFT_not: Int
  loadingFT_in: [Int!]
  loadingFT_not_in: [Int!]
  loadingFT_lt: Int
  loadingFT_lte: Int
  loadingFT_gt: Int
  loadingFT_gte: Int
  offeredDate: DateTime
  offeredDate_not: DateTime
  offeredDate_in: [DateTime!]
  offeredDate_not_in: [DateTime!]
  offeredDate_lt: DateTime
  offeredDate_lte: DateTime
  offeredDate_gt: DateTime
  offeredDate_gte: DateTime
  recordedDate: DateTime
  recordedDate_not: DateTime
  recordedDate_in: [DateTime!]
  recordedDate_not_in: [DateTime!]
  recordedDate_lt: DateTime
  recordedDate_lte: DateTime
  recordedDate_gt: DateTime
  recordedDate_gte: DateTime
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  selling20: Int
  selling20_not: Int
  selling20_in: [Int!]
  selling20_not_in: [Int!]
  selling20_lt: Int
  selling20_lte: Int
  selling20_gt: Int
  selling20_gte: Int
  selling40: Int
  selling40_not: Int
  selling40_in: [Int!]
  selling40_not_in: [Int!]
  selling40_lt: Int
  selling40_lte: Int
  selling40_gt: Int
  selling40_gte: Int
  selling4H: Int
  selling4H_not: Int
  selling4H_in: [Int!]
  selling4H_not_in: [Int!]
  selling4H_lt: Int
  selling4H_lte: Int
  selling4H_gt: Int
  selling4H_gte: Int
  AND: [Rate_rateScalarWhereInput!]
  OR: [Rate_rateScalarWhereInput!]
  NOT: [Rate_rateScalarWhereInput!]
}

type Rate_rateSubscriptionPayload {
  mutation: MutationType!
  node: Rate_rate
  updatedFields: [String!]
  previousValues: Rate_ratePreviousValues
}

input Rate_rateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Rate_rateWhereInput
  AND: [Rate_rateSubscriptionWhereInput!]
  OR: [Rate_rateSubscriptionWhereInput!]
  NOT: [Rate_rateSubscriptionWhereInput!]
}

input Rate_rateUpdateInput {
  account: Rate_clientUpdateOneWithoutRate_ratesInput
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  inputperson: Account_myuserUpdateOneWithoutRate_ratesInput
  liner: Countrycity_linerUpdateOneWithoutRate_ratesInput
  loadingFT: Int
  offeredDate: DateTime
  pod: Countrycity_locationUpdateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationUpdateOneWithoutRate_rates_polsInput
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
  type: Rate_cntrtypeUpdateOneWithoutRate_ratesInput
}

input Rate_rateUpdateManyDataInput {
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  loadingFT: Int
  offeredDate: DateTime
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
}

input Rate_rateUpdateManyMutationInput {
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  loadingFT: Int
  offeredDate: DateTime
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
}

input Rate_rateUpdateManyWithoutAccountInput {
  create: [Rate_rateCreateWithoutAccountInput!]
  delete: [Rate_rateWhereUniqueInput!]
  connect: [Rate_rateWhereUniqueInput!]
  disconnect: [Rate_rateWhereUniqueInput!]
  update: [Rate_rateUpdateWithWhereUniqueWithoutAccountInput!]
  upsert: [Rate_rateUpsertWithWhereUniqueWithoutAccountInput!]
  deleteMany: [Rate_rateScalarWhereInput!]
  updateMany: [Rate_rateUpdateManyWithWhereNestedInput!]
}

input Rate_rateUpdateManyWithoutInputpersonInput {
  create: [Rate_rateCreateWithoutInputpersonInput!]
  delete: [Rate_rateWhereUniqueInput!]
  connect: [Rate_rateWhereUniqueInput!]
  disconnect: [Rate_rateWhereUniqueInput!]
  update: [Rate_rateUpdateWithWhereUniqueWithoutInputpersonInput!]
  upsert: [Rate_rateUpsertWithWhereUniqueWithoutInputpersonInput!]
  deleteMany: [Rate_rateScalarWhereInput!]
  updateMany: [Rate_rateUpdateManyWithWhereNestedInput!]
}

input Rate_rateUpdateManyWithoutLinerInput {
  create: [Rate_rateCreateWithoutLinerInput!]
  delete: [Rate_rateWhereUniqueInput!]
  connect: [Rate_rateWhereUniqueInput!]
  disconnect: [Rate_rateWhereUniqueInput!]
  update: [Rate_rateUpdateWithWhereUniqueWithoutLinerInput!]
  upsert: [Rate_rateUpsertWithWhereUniqueWithoutLinerInput!]
  deleteMany: [Rate_rateScalarWhereInput!]
  updateMany: [Rate_rateUpdateManyWithWhereNestedInput!]
}

input Rate_rateUpdateManyWithoutPodInput {
  create: [Rate_rateCreateWithoutPodInput!]
  delete: [Rate_rateWhereUniqueInput!]
  connect: [Rate_rateWhereUniqueInput!]
  disconnect: [Rate_rateWhereUniqueInput!]
  update: [Rate_rateUpdateWithWhereUniqueWithoutPodInput!]
  upsert: [Rate_rateUpsertWithWhereUniqueWithoutPodInput!]
  deleteMany: [Rate_rateScalarWhereInput!]
  updateMany: [Rate_rateUpdateManyWithWhereNestedInput!]
}

input Rate_rateUpdateManyWithoutPolInput {
  create: [Rate_rateCreateWithoutPolInput!]
  delete: [Rate_rateWhereUniqueInput!]
  connect: [Rate_rateWhereUniqueInput!]
  disconnect: [Rate_rateWhereUniqueInput!]
  update: [Rate_rateUpdateWithWhereUniqueWithoutPolInput!]
  upsert: [Rate_rateUpsertWithWhereUniqueWithoutPolInput!]
  deleteMany: [Rate_rateScalarWhereInput!]
  updateMany: [Rate_rateUpdateManyWithWhereNestedInput!]
}

input Rate_rateUpdateManyWithoutTypeInput {
  create: [Rate_rateCreateWithoutTypeInput!]
  delete: [Rate_rateWhereUniqueInput!]
  connect: [Rate_rateWhereUniqueInput!]
  disconnect: [Rate_rateWhereUniqueInput!]
  update: [Rate_rateUpdateWithWhereUniqueWithoutTypeInput!]
  upsert: [Rate_rateUpsertWithWhereUniqueWithoutTypeInput!]
  deleteMany: [Rate_rateScalarWhereInput!]
  updateMany: [Rate_rateUpdateManyWithWhereNestedInput!]
}

input Rate_rateUpdateManyWithWhereNestedInput {
  where: Rate_rateScalarWhereInput!
  data: Rate_rateUpdateManyDataInput!
}

input Rate_rateUpdateWithoutAccountDataInput {
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  inputperson: Account_myuserUpdateOneWithoutRate_ratesInput
  liner: Countrycity_linerUpdateOneWithoutRate_ratesInput
  loadingFT: Int
  offeredDate: DateTime
  pod: Countrycity_locationUpdateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationUpdateOneWithoutRate_rates_polsInput
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
  type: Rate_cntrtypeUpdateOneWithoutRate_ratesInput
}

input Rate_rateUpdateWithoutInputpersonDataInput {
  account: Rate_clientUpdateOneWithoutRate_ratesInput
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  liner: Countrycity_linerUpdateOneWithoutRate_ratesInput
  loadingFT: Int
  offeredDate: DateTime
  pod: Countrycity_locationUpdateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationUpdateOneWithoutRate_rates_polsInput
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
  type: Rate_cntrtypeUpdateOneWithoutRate_ratesInput
}

input Rate_rateUpdateWithoutLinerDataInput {
  account: Rate_clientUpdateOneWithoutRate_ratesInput
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  inputperson: Account_myuserUpdateOneWithoutRate_ratesInput
  loadingFT: Int
  offeredDate: DateTime
  pod: Countrycity_locationUpdateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationUpdateOneWithoutRate_rates_polsInput
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
  type: Rate_cntrtypeUpdateOneWithoutRate_ratesInput
}

input Rate_rateUpdateWithoutPodDataInput {
  account: Rate_clientUpdateOneWithoutRate_ratesInput
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  inputperson: Account_myuserUpdateOneWithoutRate_ratesInput
  liner: Countrycity_linerUpdateOneWithoutRate_ratesInput
  loadingFT: Int
  offeredDate: DateTime
  pol: Countrycity_locationUpdateOneWithoutRate_rates_polsInput
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
  type: Rate_cntrtypeUpdateOneWithoutRate_ratesInput
}

input Rate_rateUpdateWithoutPolDataInput {
  account: Rate_clientUpdateOneWithoutRate_ratesInput
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  inputperson: Account_myuserUpdateOneWithoutRate_ratesInput
  liner: Countrycity_linerUpdateOneWithoutRate_ratesInput
  loadingFT: Int
  offeredDate: DateTime
  pod: Countrycity_locationUpdateOneWithoutRate_rates_podsInput
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
  type: Rate_cntrtypeUpdateOneWithoutRate_ratesInput
}

input Rate_rateUpdateWithoutTypeDataInput {
  account: Rate_clientUpdateOneWithoutRate_ratesInput
  buying20: Int
  buying40: Int
  buying4H: Int
  deleted: Boolean
  dischargingFT: Int
  effectiveDate: DateTime
  inputperson: Account_myuserUpdateOneWithoutRate_ratesInput
  liner: Countrycity_linerUpdateOneWithoutRate_ratesInput
  loadingFT: Int
  offeredDate: DateTime
  pod: Countrycity_locationUpdateOneWithoutRate_rates_podsInput
  pol: Countrycity_locationUpdateOneWithoutRate_rates_polsInput
  recordedDate: DateTime
  remark: String
  selling20: Int
  selling40: Int
  selling4H: Int
}

input Rate_rateUpdateWithWhereUniqueWithoutAccountInput {
  where: Rate_rateWhereUniqueInput!
  data: Rate_rateUpdateWithoutAccountDataInput!
}

input Rate_rateUpdateWithWhereUniqueWithoutInputpersonInput {
  where: Rate_rateWhereUniqueInput!
  data: Rate_rateUpdateWithoutInputpersonDataInput!
}

input Rate_rateUpdateWithWhereUniqueWithoutLinerInput {
  where: Rate_rateWhereUniqueInput!
  data: Rate_rateUpdateWithoutLinerDataInput!
}

input Rate_rateUpdateWithWhereUniqueWithoutPodInput {
  where: Rate_rateWhereUniqueInput!
  data: Rate_rateUpdateWithoutPodDataInput!
}

input Rate_rateUpdateWithWhereUniqueWithoutPolInput {
  where: Rate_rateWhereUniqueInput!
  data: Rate_rateUpdateWithoutPolDataInput!
}

input Rate_rateUpdateWithWhereUniqueWithoutTypeInput {
  where: Rate_rateWhereUniqueInput!
  data: Rate_rateUpdateWithoutTypeDataInput!
}

input Rate_rateUpsertWithWhereUniqueWithoutAccountInput {
  where: Rate_rateWhereUniqueInput!
  update: Rate_rateUpdateWithoutAccountDataInput!
  create: Rate_rateCreateWithoutAccountInput!
}

input Rate_rateUpsertWithWhereUniqueWithoutInputpersonInput {
  where: Rate_rateWhereUniqueInput!
  update: Rate_rateUpdateWithoutInputpersonDataInput!
  create: Rate_rateCreateWithoutInputpersonInput!
}

input Rate_rateUpsertWithWhereUniqueWithoutLinerInput {
  where: Rate_rateWhereUniqueInput!
  update: Rate_rateUpdateWithoutLinerDataInput!
  create: Rate_rateCreateWithoutLinerInput!
}

input Rate_rateUpsertWithWhereUniqueWithoutPodInput {
  where: Rate_rateWhereUniqueInput!
  update: Rate_rateUpdateWithoutPodDataInput!
  create: Rate_rateCreateWithoutPodInput!
}

input Rate_rateUpsertWithWhereUniqueWithoutPolInput {
  where: Rate_rateWhereUniqueInput!
  update: Rate_rateUpdateWithoutPolDataInput!
  create: Rate_rateCreateWithoutPolInput!
}

input Rate_rateUpsertWithWhereUniqueWithoutTypeInput {
  where: Rate_rateWhereUniqueInput!
  update: Rate_rateUpdateWithoutTypeDataInput!
  create: Rate_rateCreateWithoutTypeInput!
}

input Rate_rateWhereInput {
  account: Rate_clientWhereInput
  buying20: Int
  buying20_not: Int
  buying20_in: [Int!]
  buying20_not_in: [Int!]
  buying20_lt: Int
  buying20_lte: Int
  buying20_gt: Int
  buying20_gte: Int
  buying40: Int
  buying40_not: Int
  buying40_in: [Int!]
  buying40_not_in: [Int!]
  buying40_lt: Int
  buying40_lte: Int
  buying40_gt: Int
  buying40_gte: Int
  buying4H: Int
  buying4H_not: Int
  buying4H_in: [Int!]
  buying4H_not_in: [Int!]
  buying4H_lt: Int
  buying4H_lte: Int
  buying4H_gt: Int
  buying4H_gte: Int
  deleted: Boolean
  deleted_not: Boolean
  dischargingFT: Int
  dischargingFT_not: Int
  dischargingFT_in: [Int!]
  dischargingFT_not_in: [Int!]
  dischargingFT_lt: Int
  dischargingFT_lte: Int
  dischargingFT_gt: Int
  dischargingFT_gte: Int
  effectiveDate: DateTime
  effectiveDate_not: DateTime
  effectiveDate_in: [DateTime!]
  effectiveDate_not_in: [DateTime!]
  effectiveDate_lt: DateTime
  effectiveDate_lte: DateTime
  effectiveDate_gt: DateTime
  effectiveDate_gte: DateTime
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  inputperson: Account_myuserWhereInput
  liner: Countrycity_linerWhereInput
  loadingFT: Int
  loadingFT_not: Int
  loadingFT_in: [Int!]
  loadingFT_not_in: [Int!]
  loadingFT_lt: Int
  loadingFT_lte: Int
  loadingFT_gt: Int
  loadingFT_gte: Int
  offeredDate: DateTime
  offeredDate_not: DateTime
  offeredDate_in: [DateTime!]
  offeredDate_not_in: [DateTime!]
  offeredDate_lt: DateTime
  offeredDate_lte: DateTime
  offeredDate_gt: DateTime
  offeredDate_gte: DateTime
  pod: Countrycity_locationWhereInput
  pol: Countrycity_locationWhereInput
  recordedDate: DateTime
  recordedDate_not: DateTime
  recordedDate_in: [DateTime!]
  recordedDate_not_in: [DateTime!]
  recordedDate_lt: DateTime
  recordedDate_lte: DateTime
  recordedDate_gt: DateTime
  recordedDate_gte: DateTime
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  selling20: Int
  selling20_not: Int
  selling20_in: [Int!]
  selling20_not_in: [Int!]
  selling20_lt: Int
  selling20_lte: Int
  selling20_gt: Int
  selling20_gte: Int
  selling40: Int
  selling40_not: Int
  selling40_in: [Int!]
  selling40_not_in: [Int!]
  selling40_lt: Int
  selling40_lte: Int
  selling40_gt: Int
  selling40_gte: Int
  selling4H: Int
  selling4H_not: Int
  selling4H_in: [Int!]
  selling4H_not_in: [Int!]
  selling4H_lt: Int
  selling4H_lte: Int
  selling4H_gt: Int
  selling4H_gte: Int
  type: Rate_cntrtypeWhereInput
  AND: [Rate_rateWhereInput!]
  OR: [Rate_rateWhereInput!]
  NOT: [Rate_rateWhereInput!]
}

input Rate_rateWhereUniqueInput {
  id: Int
}

type Subscription {
  account_messagebox(where: Account_messageboxSubscriptionWhereInput): Account_messageboxSubscriptionPayload
  account_myuser(where: Account_myuserSubscriptionWhereInput): Account_myuserSubscriptionPayload
  account_myuserprofile(where: Account_myuserprofileSubscriptionWhereInput): Account_myuserprofileSubscriptionPayload
  account_ratereader(where: Account_ratereaderSubscriptionWhereInput): Account_ratereaderSubscriptionPayload
  auth_group(where: Auth_groupSubscriptionWhereInput): Auth_groupSubscriptionPayload
  auth_group_permissions(where: Auth_group_permissionsSubscriptionWhereInput): Auth_group_permissionsSubscriptionPayload
  auth_permission(where: Auth_permissionSubscriptionWhereInput): Auth_permissionSubscriptionPayload
  countrycity_liner(where: Countrycity_linerSubscriptionWhereInput): Countrycity_linerSubscriptionPayload
  countrycity_location(where: Countrycity_locationSubscriptionWhereInput): Countrycity_locationSubscriptionPayload
  django_admin_log(where: Django_admin_logSubscriptionWhereInput): Django_admin_logSubscriptionPayload
  django_content_type(where: Django_content_typeSubscriptionWhereInput): Django_content_typeSubscriptionPayload
  django_migrations(where: Django_migrationsSubscriptionWhereInput): Django_migrationsSubscriptionPayload
  django_session(where: Django_sessionSubscriptionWhereInput): Django_sessionSubscriptionPayload
  rate_client(where: Rate_clientSubscriptionWhereInput): Rate_clientSubscriptionPayload
  rate_cntrtype(where: Rate_cntrtypeSubscriptionWhereInput): Rate_cntrtypeSubscriptionPayload
  rate_rate(where: Rate_rateSubscriptionWhereInput): Rate_rateSubscriptionPayload
}
`;
