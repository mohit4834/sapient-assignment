pipeline {
    
agent any

environment {
    dockerCredentials = 'dockerCredentials'
    PROJECT_ID = 'flowing-radio-358003'
    CLUSTER_NAME = 'cluster-demo'
    LOCATION = 'us-central1-c'
    CREDENTIALS_ID = 'flowing-radio-358003'
    scannerHome = tool name: 'Test_Sonar'
    username= 'admin'
    appName= 'assignment'
}

tools {
    nodejs 'nodejs'
    dockerTool 'dockerMohit'
}

    stages {
        stage('checkout') {
            steps {
                checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mohit4834/sapient-assignment.git']]]
            }
        }
        stage('Install Dependencies') {
            steps {
                powershell 'npm install' 
            }
        }
        stage('Install Angular') {
            steps {
                script {
                    env.IMAGE_NAME = 'master'
                }
                powershell 'npm install -g @angular/cli' 
            }
        }
        stage('SonarQube Analysis') {
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
        stage('Run Test Cases') {
            when {
                branch 'master'
            }
            steps {
                script {
                    env.IMAGE_NAME = 'master'
                }
                powershell 'npm run test' 
            }
        }
        stage('Build & Push Docker Image') {
            steps {
                script {
                    dockerImage = docker.build "goyalmohit48/i-mohitgoyal-${IMAGE_NAME}:latest"
                    docker.withRegistry('', 'dockerCredentials') {
    				dockerImage.push();
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps{
                powershell "kubectl --kubeconfig=C:/Users/mohitgoyal/.kube/config apply -f deployment-definition.yaml"
            }
        }
    }
}