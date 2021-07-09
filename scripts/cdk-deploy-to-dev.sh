#!/usr/bin/env bash
# cdk-deploy-to-dev.sh

dir=`dirname $0`
$dir/cdk-deploy-to.sh development 029707422715 ap-southeast-1 "$@"