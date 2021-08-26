FROM node:16-bullseye-slim AS dashboard-builder

ARG STAGING_DEPLOYMENT=false

# make the 'app' folder the current working directory
WORKDIR /app

# Copy project files and folders to the current working directory (i.e. '/app')
COPY  . .


# Install dependencies
RUN yarn


# build app for production
RUN yarn build


FROM node:16-bullseye-slim AS dashboard

RUN yarn global add serve

COPY --from=dashboard-builder /app/dist/ /dist

ENV PORT=3004
EXPOSE 3004

CMD [ "serve", "--single", "/dist" ]
