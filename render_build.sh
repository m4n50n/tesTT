#!/usr/bin/env bash
# exit on error
set -o errexit

# npm install
# npm run build

pipenv install
pip install geopandas
pipenv run upgrade
