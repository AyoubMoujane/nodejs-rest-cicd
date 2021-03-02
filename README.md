# CI/CD project

Created a CI/CD pipeline composed of:

- a simple Nodejs REST API

- a Jenkins server pulling code from this repository, building, testing, creating a docker image and pushing it to dockerhub

- an ECS instance hosted on AWS running the image pushed on dockerhub
