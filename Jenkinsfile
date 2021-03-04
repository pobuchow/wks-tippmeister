pipeline {
    agent any

    tools {nodejs "node"}
    
    stages {
        stage('Install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run test' 
            }
            post {
                always {
                    step([
                        $class: 'CoberturaPublisher', 
                        coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'
                    ])
                }
                
            }
        }
    }
}