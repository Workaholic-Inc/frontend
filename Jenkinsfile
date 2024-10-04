pipeline {
    agent {
        label 'win-agent'
    }
    environment {
        scannerHome = tool 'sonar-server'
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
        sh 'echo %cd%'
        sh 'dir /a'
      }
        }

    stage('SonarQube Analysis') {
      steps {
            sh '''$scannerHome/bin/sonar-scanner
      -Dsonar.projectKey=workaholic_frontend \
      -Dsonar.sources=. \
      '''
      }
    }
    }
}
