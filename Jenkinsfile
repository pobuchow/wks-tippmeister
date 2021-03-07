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
        stage('Static Analysis') { 
            steps {
                sh ' ./node_modules/eslint/bin/eslint.js --ext .jsx --ext .js -f checkstyle src > eslint.xml || true'
            }
            post {
                always {
                  // Warnings Next Generation Plugin
                  recordIssues enabledForFailure: true, tools: [esLint(pattern: 'eslint.xml')]
                }
              }
        }
    }
}