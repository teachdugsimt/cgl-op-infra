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

if [[ $# -ge 2 ]]; then
    shift; shift
    npx cdk list
    npx cdk deploy --all
    exit $?
else
    echo 1>&2 "Provide account and region as first two args."
    echo 1>&2 "Additional args are passed through to cdk deploy."
    exit 1
fi