pipeline {
    
agent any

environment {
    dockerCredentials = 'dockerCredentials'
    PROJECT_ID = 'flowing-radio-358003'
    CLUSTER_NAME = 'cluster-demo'
    LOCATION = 'us-central1-c'
    CREDENTIALS_ID = 'flowing-radio-358003'
    IMAGE_NAME = 'new'
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
                powershell 'npm install -g @angular/cli' 
            }
        }
        stage('SonarQube Analysis') {
            environment {
                IMAGE_NAME = 'develop'
            }
            when {
                branch 'develop'
            }
            steps {
                withSonarQubeEnv('SonarQubeScanner') {
                  bat "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Run Test Cases') {
            environment {
                IMAGE_NAME = 'master'
            }
            when {
                branch 'master'
            }
            steps {
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