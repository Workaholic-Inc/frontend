pipeline {
      agent {
    node {
      label 'agent1'
    }

  }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pull code'
                git branch: 'main', url: 'https://github.com/Workaholic-Inc/frontend.git'
            }
        }
        
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
