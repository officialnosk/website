# stage 1
#Base Image
FROM node:16-alpine as build-step

#Maintainer of the Dockerfile
MAINTAINER TheSpiritMan

#App Working Directory
WORKDIR /app

#Add App
COPY . .

#Install Dependencies
RUN npm ci --verbose

#Build App
RUN npm run build


# stage 2
#New Base Image
FROM nginx:1.23.0-alpine

#Copy build file
COPY --from=build-step /app/build /usr/share/nginx/html

#Expose Port
EXPOSE 80