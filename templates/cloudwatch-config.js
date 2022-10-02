# This common-config is used to configure items used for both ssm and cloudwatch access


## Configuration for shared credential.
## Default credential strategy will be used if it is absent here:
## 	Instance role is used for EC2 case by default.
##	AmazonCloudWatchAgent profile is used for onPremise case by default.
 [credentials]
shared_credential_profile = "default"
shared_credential_file = "/root/.aws/credentials"


## Configuration for proxy.
## System-wide environment-variable will be read if it is absent here.
## i.e. HTTP_PROXY/http_proxy; HTTPS_PROXY/https_proxy; NO_PROXY/no_proxy
## Note: system-wide environment-variable is not accessible when using ssm run-command.
## Absent in both here and environment-variable means no proxy will be used.
# [proxy]
#    http_proxy = "{http_url}"
#    https_proxy = "{https_url}"
#    no_proxy = "{domain}"

# [ssl]
#    ca_bundle_path = "{ca_bundle_file_path}"