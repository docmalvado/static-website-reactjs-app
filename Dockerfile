# From base image node
FROM node:14-alpine

# Install extra packages
RUN apk update && apk add bash && apk add bind-tools && apk add curl

# Create working directory
WORKDIR /usr/src/app

# Copying required files from your file system to container file system
COPY ./ ./

# Install all dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Command to run when intantiate an image
CMD ["npm", "start"]