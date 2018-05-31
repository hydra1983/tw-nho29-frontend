pipeline {
    agent any
    options {
        disableConcurrentBuilds()
    }
    environment {
        TARGET_GIT_URL = "https://github.com/hydra1983/tw-nho29-frontend.git"
        TARGET_GIT_BRANCH = "master"
    }
    stages {
        stage('prepare') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                echo "do nothing"
                '''
            }
        }
        stage('validate') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                node --version
                npm --version
                yarn --version
                '''
            }
        }
        stage('init') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                yarn install
                '''
            }
        }
        stage('analyze') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                yarn lint
                '''
            }
        }
        stage('test') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                yarn test
                '''
            }
        }
        stage('package') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                yarn build
                '''
            }
        }
        stage('dockerize') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                yarn build:docker
                '''
            }
        }
        stage('publish') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                echo "publish"
                '''
            }
        }
    }
    post {
        always {
            sh '''#!/usr/local/bin/bash -l
            echo "cleanup"
            '''
        }
        success {
            sh '''#!/usr/local/bin/bash -l
            echo "success"
            '''
        }
        failure {
            sh '''#!/usr/local/bin/bash -l
            echo "failure"
            '''
        }
    }
}
