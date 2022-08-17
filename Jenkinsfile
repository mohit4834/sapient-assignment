pipeline {
    
agent any

environment {
    scannerHome = tool name: 'Test_Sonar'
}

tools {
    nodejs 'nodejs'
}

    stages {
        stage('Build') {
            steps {
                checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mohit4834/sapient-assignment.git']]]
				powershell 'npm install'
				script {
                    env.IMAGE_NAME = 'master'
                }
                powershell 'npm install -g @angular/cli' 
            }
        }
        stage('Sonarqube Analysis') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    env.IMAGE_NAME = 'develop'
                }
                withSonarQubeEnv('SonarQubeScanner') {
                  bat "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Kubernetes Deployment') {
            steps{
                powershell "kubectl --kubeconfig=C:/Users/mohitgoyal/.kube/config apply -f deployment-definition.yaml"
            }
        }
    }
}