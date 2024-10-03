pipeline {
      agent {
    node {
      label 'agent1'
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

    // stage('SonarQube Analysis') {
    // def scannerHome = tool 'sonar-server';
    // withSonarQubeEnv() {
    //   sh "${scannerHome}/bin/sonar-scanner"
    //       }
    // }

  }
}
