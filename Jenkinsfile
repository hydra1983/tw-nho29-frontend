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
                pwd
                ls -l
                echo "prepare"
                '''
            }
        }
        stage('validate') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                echo "validate"
                '''
            }
        }
        stage('init') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                echo "init"
                '''
            }
        }
        stage('analyze') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                echo "analyze"
                '''
            }
        }
        stage('test') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                echo "test"
                '''
            }
        }
        stage('package') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                echo "package"
                '''
            }
        }
        stage('dockerize') {
            steps {
                sh '''#!/usr/local/bin/bash -l
                echo "dockerize"
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
