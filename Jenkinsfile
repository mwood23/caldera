pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Deploy') {

      steps {
        withCredentials([[$class: 'StringBinding', credentialsId: 'FIREBASE_TOKEN', variable: 'FIREBASE_TOKEN']]) {
          sh 'firebase deploy --token "$FIREBASE_TOKEN"'
        }
      }
    }
  }
  tools {
    nodejs 'Node 9'
  }
}
