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

    //     stage('Build') {
    //         steps {
    //             sh 'npm run build'
    //         }
    // }

    //     stage('Test') {
    //         steps {
    //             sh 'npm run test'
    //         }
    // }
        stage('Test') {
            steps {
                sh 'pwd'
            }
    }
}
}
