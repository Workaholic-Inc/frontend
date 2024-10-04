pipeline {
    agent {
        label 'win-agent'
    }
    triggers {
        pollSCM '* * * * *'
    }
    environment {
      scannerHome = tool 'SonarQube Scanner'
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
        withSonarQubeEnv('sonarqube_server') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }
    }
}
