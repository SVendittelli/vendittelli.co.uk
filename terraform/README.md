<!-- BEGIN_TF_DOCS -->
# Personal Website

The infrastructure for my personal website: [vendittelli.co.uk](https://vendittelli.co.uk/)

## Requirements

| Name | Version |
|------|---------|
| terraform | 1.5.0 |
| aws | 5.3.0 |
| cloudflare | 4.7.1 |
| linode | 2.4.0 |

## Providers

| Name | Version |
|------|---------|
| aws | 5.3.0 |
| cloudflare | 4.7.1 |
| linode | 2.4.0 |

## Resources

| Name | Type |
|------|------|
| [aws_s3_bucket.site](https://registry.terraform.io/providers/hashicorp/aws/5.3.0/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.www](https://registry.terraform.io/providers/hashicorp/aws/5.3.0/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket_acl.site](https://registry.terraform.io/providers/hashicorp/aws/5.3.0/docs/resources/s3_bucket_acl) | resource |
| [aws_s3_bucket_acl.www](https://registry.terraform.io/providers/hashicorp/aws/5.3.0/docs/resources/s3_bucket_acl) | resource |
| [aws_s3_bucket_policy.site](https://registry.terraform.io/providers/hashicorp/aws/5.3.0/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_public_access_block.www](https://registry.terraform.io/providers/hashicorp/aws/5.3.0/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_website_configuration.site](https://registry.terraform.io/providers/hashicorp/aws/5.3.0/docs/resources/s3_bucket_website_configuration) | resource |
| [aws_s3_bucket_website_configuration.www](https://registry.terraform.io/providers/hashicorp/aws/5.3.0/docs/resources/s3_bucket_website_configuration) | resource |
| [cloudflare_managed_headers.managed_headers](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/managed_headers) | resource |
| [cloudflare_record.dmarc](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/record) | resource |
| [cloudflare_record.docs](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/record) | resource |
| [cloudflare_record.domainkey](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/record) | resource |
| [cloudflare_record.site_cname](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/record) | resource |
| [cloudflare_record.spf1](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/record) | resource |
| [cloudflare_record.www](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/record) | resource |
| [cloudflare_zone_settings_override.security](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/resources/zone_settings_override) | resource |
| [linode_lke_cluster.k8s](https://registry.terraform.io/providers/linode/linode/2.4.0/docs/resources/lke_cluster) | resource |
| [cloudflare_zones.domain](https://registry.terraform.io/providers/cloudflare/cloudflare/4.7.1/docs/data-sources/zones) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| aws\_region | The AWS region to put the S3 bucket into. | `string` | `"eu-west-2"` | no |
| github\_user | The GitHub username that owns the GitHub repo. | `string` | `"svendittelli"` | no |
| k8s\_version | The Kubernetes version to use for the cluster. | `string` | `"1.25"` | no |
| linode\_region | The region where the kubernetes cluster will be located. | `string` | `"eu-west"` | no |
| linode\_token | The Linode API Personal Access Token. | `string` | n/a | yes |
| pools | The Node Pool specifications for the kubernetes cluster. | ```list(object({ type = string count = number }))``` | ```[ { "count": 2, "type": "g6-standard-1" } ]``` | no |
| site\_domain | The domain name to use for the static site. | `string` | `"vendittelli.co.uk"` | no |

## Outputs

| Name | Description |
|------|-------------|
| api\_endpoints | k8s cluster API endpoints |
| kubeconfig | Kubeconfig for accessing the k8s cluster (base64 encoded) |
<!-- END_TF_DOCS -->
