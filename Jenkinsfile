pipeline {
    agent {
        label 'win-agent'
    }
    triggers {
        pollSCM '* * * * *'
    }
    environment {
      scannerHome = tool name: 'sonarscanner'
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
        sh 'ls -a'
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
