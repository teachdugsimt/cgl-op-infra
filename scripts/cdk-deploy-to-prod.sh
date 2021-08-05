#!/usr/bin/env bash
# cdk-deploy-to-staging.sh

dir=`dirname $0`
$dir/cdk-deploy-to.sh production 796225514394 ap-southeast-1 "$@"