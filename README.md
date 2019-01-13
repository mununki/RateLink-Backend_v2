# RateLink - Backend

## Target

### 1. Refactory the existing RateLink Backend with new tech stack.

> The existing backend(https://github.com/mattdamon108/RateLink-Backend)

1. Prisma Server (Docker)
2. GraphQL API (Graphql-Yoga)
3. Typescript

### 2. New Backbone

1. Deploy the Prisma Server to AWS ECS + ECR
2. Deploy the GraphQL API to AWS Lambda

## To-dos

- [x] Boilerplating (Prisma Server)
- [x] JWT authentication
- [x] Profile update
- [x] Rate reader & shower list & update
- [x] Rate list (w/ showers, date ranges)
- [x] Rate search
- [x] Query each field for autocomplete in front-end
- [x] Rate Mutation (create, update)
- [x] Query for charts
- [x] Save the profile image to AWS S3 (remove the previous one)
