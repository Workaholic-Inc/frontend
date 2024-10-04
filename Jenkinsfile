pipeline {
    agent {
      node {
        label 'win-agent'
      }
      environment {
        scannerHome = tool 'sonar-server'
      }
      }
  triggers {
    pollSCM '* * * * *'
  }
    stages {
        stage('Install Packages') {
      steps {
        echo 'Install Dependencies'
        sh 'npm install'
      }
        }

    stage('Test') {
        steps {
            sh 'pwd'
            sh 'ls -a'
        }
    }
    }
}
