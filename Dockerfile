FROM node:10.15.3
RUN mkdir -p /usr/src/sports
COPY build /usr/src/sports/build
COPY server.js /usr/src/sports
COPY deploy-package.json /usr/src/sports/package.json



COPY serverQueriesSchema.graphql /usr/src/sports/
COPY serverQueriesResolver.js /usr/src/sports/
COPY serverMutationsSchema.graphql /usr/src/sports/
COPY serverMutationsResolver.js /usr/src/sports/

WORKDIR /usr/src/sports

RUN echo 'package-lock=false' >> .npmrc
RUN npm install
EXPOSE 80
CMD ["node", "server.js"]