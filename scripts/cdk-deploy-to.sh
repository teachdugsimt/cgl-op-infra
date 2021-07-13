#!/usr/bin/env bash

envup() {
  local file=$([ -z "$1" ] && echo ".env" || echo ".env.$1")
  if [ -f $file ]; then
    echo "Start Load ENV" $file
    export $(cat $file | sed 's/#.*//g' | xargs)
    echo "============="
  else
    echo "No $file file found" 1>&2
    return 1
  fi
}

envup $1

aws configure list
read -p "Are you sure? (y|N) : " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # do dangerous stuff
  if [[ $# -ge 2 ]]; then
    shift; shift
    npx cdk list
    npx cdk deploy --all --outputs-file ./cdk-output.json
    exit $?
  else
    echo 1>&2 "Provide account and region as first two args."
    echo 1>&2 "Additional args are passed through to cdk deploy."
    exit 1
  fi

fi