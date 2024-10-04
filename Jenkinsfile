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
        bat 'npm install'
      }
        }

        stage('Test') {
      steps {
        bat 'echo %cd%'
        bat 'dir /a'
      }
        }

    stage('SonarQube Analysis') {
      steps {
        script {
          withSonarQubeEnv('sonar-server') {
            sh '''$scannerHome/bin/sonar-scanner
      -Dsonar.projectKey=workaholic_frontend \
      -Dsonar.sources=. \
      '''
          }
        }
      }
    }
    }
}
