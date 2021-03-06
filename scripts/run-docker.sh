#!/bin/bash
 
set -e
 
BASE_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
PROJECT_PATH="$(dirname "$BASE_PATH")"

echo ==========================================================================
echo Starting Docker containers...
echo ==========================================================================
docker-compose -f "$PROJECT_PATH/docker-compose.yml" up -d