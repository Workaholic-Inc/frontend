pipeline {
      agent {
    node {
      label 'agent1'
    }

  }

    stages {
        stage('Install Packages') {
            steps {
                echo 'Install Dependencies'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
    }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
    }
}
}
