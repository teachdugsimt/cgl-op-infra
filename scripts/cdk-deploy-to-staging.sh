#!/usr/bin/env bash
# cdk-deploy-to-staging.sh

dir=`dirname $0`
$dir/cdk-deploy-to.sh staging 329729442144 ap-southeast-1 "$@"