FROM node:10.15.3
ARG APP_ENV=production
ARG BUILD_ENV=development
ENV NODE_ENV ${BUILD_ENV}
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN mkdir -p /app
ADD . ./app
WORKDIR /app
RUN npm install -l
RUN npm install -g @angular/cli@latest
EXPOSE 3000
CMD npm run start
