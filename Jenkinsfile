pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
        docker {
            image 'dind'
        }
    }
    environment {
        HOME= '.'
        CI = 'true'
        registry = "rozmo34/node-rest-api"
        registryCredential = '35ebaace-4437-495a-b2b6-8872c0549d1a'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        // stage('Push docker image') {
        //     steps {
        //         sh 'docker tag node-img rozmo34/nodejs-rest-api'
        //         sh 'docker push rozmo34/nodejs-rest-api'
        //     }
        // }
    }
}

node {
    def app

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("rozmo34/nodejs-rest-api")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', '35ebaace-4437-495a-b2b6-8872c0549d1a	') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}