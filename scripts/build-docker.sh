#!/bin/bash
 
set -e
 
BASE_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
PROJECT_PATH="$(dirname "$BASE_PATH")"

echo ==========================================================================
echo Building Docker images...
echo ==========================================================================
docker-compose -f "$PROJECT_PATH/docker-compose.yml" build