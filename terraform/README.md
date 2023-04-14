<!-- BEGIN_TF_DOCS -->
# Personal Website

The infrastructure for my personal website: [vendittelli.co.uk](https://vendittelli.co.uk/)

## Requirements

| Name | Version |
|------|---------|
| terraform | 1.4.5 |
| aws | 4.62.0 |
| cloudflare | 4.3.0 |
| helm | 2.9.0 |
| kubernetes | 2.19.0 |
| linode | 1.30.0 |
| local | 2.4.0 |

## Providers

| Name | Version |
|------|---------|
| aws | 4.62.0 |
| cloudflare | 4.3.0 |
| helm | 2.9.0 |
| kubernetes | 2.19.0 |
| linode | 1.30.0 |
| local | 2.4.0 |

## Resources

| Name | Type |
|------|------|
| [aws_s3_bucket.site](https://registry.terraform.io/providers/hashicorp/aws/4.62.0/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.www](https://registry.terraform.io/providers/hashicorp/aws/4.62.0/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket_acl.site](https://registry.terraform.io/providers/hashicorp/aws/4.62.0/docs/resources/s3_bucket_acl) | resource |
| [aws_s3_bucket_acl.www](https://registry.terraform.io/providers/hashicorp/aws/4.62.0/docs/resources/s3_bucket_acl) | resource |
| [aws_s3_bucket_policy.site](https://registry.terraform.io/providers/hashicorp/aws/4.62.0/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_public_access_block.www](https://registry.terraform.io/providers/hashicorp/aws/4.62.0/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_website_configuration.site](https://registry.terraform.io/providers/hashicorp/aws/4.62.0/docs/resources/s3_bucket_website_configuration) | resource |
| [aws_s3_bucket_website_configuration.www](https://registry.terraform.io/providers/hashicorp/aws/4.62.0/docs/resources/s3_bucket_website_configuration) | resource |
| [cloudflare_managed_headers.managed_headers](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/managed_headers) | resource |
| [cloudflare_record.dmarc](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/record) | resource |
| [cloudflare_record.docs](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/record) | resource |
| [cloudflare_record.domainkey](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/record) | resource |
| [cloudflare_record.site_cname](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/record) | resource |
| [cloudflare_record.spf1](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/record) | resource |
| [cloudflare_record.www](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/record) | resource |
| [cloudflare_zone_settings_override.security](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/zone_settings_override) | resource |
| [helm_release.argocd](https://registry.terraform.io/providers/hashicorp/helm/2.9.0/docs/resources/release) | resource |
| [kubernetes_namespace.argocd](https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/namespace) | resource |
| [linode_lke_cluster.k8s](https://registry.terraform.io/providers/linode/linode/1.30.0/docs/resources/lke_cluster) | resource |
| [local_sensitive_file.kubeconfig](https://registry.terraform.io/providers/hashicorp/local/2.4.0/docs/resources/sensitive_file) | resource |
| [cloudflare_zones.domain](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/data-sources/zones) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| aws\_region | The AWS region to put the bucket into | `string` | `"eu-west-2"` | no |
| github\_user | The GitHub username that owns the GitHub repo | `string` | n/a | yes |
| k8s\_version | The Kubernetes version to use for this cluster. (required) | `string` | `"1.25"` | no |
| linode\_region | The region where your cluster will be located. (required) | `string` | `"eu-west"` | no |
| linode\_token | Your Linode API Personal Access Token. (required) | `string` | n/a | yes |
| pools | The Node Pool specifications for the Kubernetes cluster. (required) | ```list(object({ type = string count = number }))``` | ```[ { "count": 1, "type": "g6-standard-1" } ]``` | no |
| site\_domain | The domain name to use for the static site | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| api\_endpoints | k8s cluster API endpoints |
| bucket\_endpoint | Bucket endpoint |
| domain\_name | Website endpoint |
| kubeconfig | Kubeconfig for access k8s cluster |
| website\_bucket\_name | Name (id) of the bucket |
<!-- END_TF_DOCS -->
