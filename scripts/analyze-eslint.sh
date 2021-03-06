#!/bin/bash

set -e
 
BASE_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
PROJECT_PATH="$(dirname "$BASE_PATH")"

echo ==========================================================================
echo Performing Static Analysis...
echo ==========================================================================

eslint src > eslint.xml