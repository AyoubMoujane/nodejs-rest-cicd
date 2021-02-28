pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME= '.'
        CI = 'true'
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
        stage('Build docker image') {
            steps {
                sh 'docker build -t node-img .'
            }
        }
        stage('Push docker image') {
            steps {
                sh 'docker tag node-img rozmo34/nodejs-rest-api'
                sh 'docker push rozmo34/nodejs-rest-api'
            }
        }
    }
}