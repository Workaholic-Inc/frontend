pipeline {
      agent {
    node {
      label 'win-agent'
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

    def scannerHome = tool 'sonar-server';
    withSonarQubeEnv('sonar-server') {
      sh '''${scannerHome}/bin/sonar-scanner
      -Dsonar.projectKey=workaholic_frontend \
      -Dsonar.sources=. \
      -Dsonar.host.url=http://localhost:9000 \
      -Dsonar.token=squ_3b92c514a0193c07c6fea7c9a9b072c87f88ff56
      '''
          }
        }
    }
    }
  }
}
