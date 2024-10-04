pipeline {
      agent {
    node {
      label 'win-agent'
    }
    environment {
      scannerHome = tool 'sonar-server';
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
