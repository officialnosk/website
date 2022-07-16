# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## Docker
- Enter `sudo apt install -y docker.io docker-compose` to install `docker` and `docker-compose` in your `ubuntu` distro.
- Then enter `sudo usermod -aG docker $USER` to add your current user in docker group.
- Then enter `newgrp docker` to relist the user in `docker` group.
- `Docker` and `docker-compose` is now available in your system.

### Dockerfile of the project
- Create a empty file named as `Dockerfile`. Enter the below command:
	````
	# stage 1
	#Base Image
	FROM node:16-alpine as build-step

	#Maintainer of the Dockerfile
	MAINTAINER TheSpiritMan

	#App Working Directory
	WORKDIR /app


	#COPY Dependencies
	COPY package.json /app

	#Install Dependencies
	RUN npm install

	#Add App
	COPY . /app



	#Build App
	RUN npm run build




	# stage 2
	#New Base Image
	FROM nginx:1.23.0-alpine

	#Copy build file
	COPY --from=build-step /app/build /usr/share/nginx/html
	````
- Open terminal, build docker image from the above Dockerfile. Command to build: 
	````
	docker build -t $IMAGE_NAME:$TAG -f Dockerfile .
	````
- Remember to change the `$IMAGE_NAME` and `$TAG` with the desire name and version of the image.


## Docker Hub
- Docker Hub is a popular and public registry for the docker images.
- Command to push the docker image in docker hub: 
  `docker push $IMAGE_NAME:$TAG`
- Docker image of this project can be found in Docker Hub under my account.
- [Link](https://hub.docker.com/r/thespiritman/noskofficial_website) to the image of this project in Docker Hub.


## Run NOSK Website using Docker Image.
- Open terminal. Enter command:
  `docker run -d -p 8080:80 --name=$CONTAINER_NAME $IMAGE_NAME:TAG`
- Using `-d` flag will run the container in detached mode.
- Using `-p` flag will publish the port of the container.
- Using `--name` flag will assign custom_name to a container.
- Change `$IMAGE_NAME`,`$TAG` and `$CONTAINER_NAME` with the docker image name, its tag and assign the container name according to your wish.
- Visit [http://localhost:8080](http://localhost:8080) on your browser to open the project. Remember this webpage is running using your container.