<!-- BEGIN_TF_DOCS -->
# Personal Website

The infrastructure for my personal website: [vendittelli.co.uk](https://vendittelli.co.uk/)

## Requirements

| Name | Version |
|------|---------|
| terraform | 1.3.5 |
| aws | 4.40.0 |
| cloudflare | 3.28.0 |
| mongodbatlas | 1.4.6 |

## Providers

| Name | Version |
|------|---------|
| aws | 4.40.0 |
| cloudflare | 3.28.0 |
| mongodbatlas | 1.4.6 |

## Resources

| Name | Type |
|------|------|
| [aws_s3_bucket.site](https://registry.terraform.io/providers/hashicorp/aws/4.40.0/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.www](https://registry.terraform.io/providers/hashicorp/aws/4.40.0/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket_acl.site](https://registry.terraform.io/providers/hashicorp/aws/4.40.0/docs/resources/s3_bucket_acl) | resource |
| [aws_s3_bucket_acl.www](https://registry.terraform.io/providers/hashicorp/aws/4.40.0/docs/resources/s3_bucket_acl) | resource |
| [aws_s3_bucket_policy.site](https://registry.terraform.io/providers/hashicorp/aws/4.40.0/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_public_access_block.www](https://registry.terraform.io/providers/hashicorp/aws/4.40.0/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_website_configuration.site](https://registry.terraform.io/providers/hashicorp/aws/4.40.0/docs/resources/s3_bucket_website_configuration) | resource |
| [aws_s3_bucket_website_configuration.www](https://registry.terraform.io/providers/hashicorp/aws/4.40.0/docs/resources/s3_bucket_website_configuration) | resource |
| [cloudflare_managed_headers.managed_headers](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/resources/managed_headers) | resource |
| [cloudflare_record.dmarc](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/resources/record) | resource |
| [cloudflare_record.docs](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/resources/record) | resource |
| [cloudflare_record.domainkey](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/resources/record) | resource |
| [cloudflare_record.site_cname](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/resources/record) | resource |
| [cloudflare_record.spf1](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/resources/record) | resource |
| [cloudflare_record.www](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/resources/record) | resource |
| [cloudflare_zone_settings_override.security](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/resources/zone_settings_override) | resource |
| [mongodbatlas_cluster.my_cluster](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.4.6/docs/resources/cluster) | resource |
| [mongodbatlas_database_user.my_user](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.4.6/docs/resources/database_user) | resource |
| [mongodbatlas_project.my_project](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.4.6/docs/resources/project) | resource |
| [mongodbatlas_project_ip_access_list.my_ipaddress](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.4.6/docs/resources/project_ip_access_list) | resource |
| [cloudflare_zones.domain](https://registry.terraform.io/providers/cloudflare/cloudflare/3.28.0/docs/data-sources/zones) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| aws\_region | The AWS region to deploy resources to | `string` | `"eu-west-1"` | no |
| github\_user | The GitHub username that owns the GitHub repo | `string` | n/a | yes |
| mongodbatlas\_accesslistip | An IP address permitted to access the Mongo DB cluster | `string` | n/a | yes |
| mongodbatlas\_database\_user\_password | The MongoDB Atlas admin user password | `string` | n/a | yes |
| mongodbatlas\_database\_username | The MongoDB Atlas admin username | `string` | n/a | yes |
| mongodbatlas\_org\_id | The MongoDB Atlas organisation id | `string` | n/a | yes |
| site\_domain | The domain name to use for the static site | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| bucket\_endpoint | Bucket endpoint |
| connection\_strings | n/a |
| domain\_name | Website endpoint |
| website\_bucket\_name | Name (id) of the bucket |
<!-- END_TF_DOCS -->
