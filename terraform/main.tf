/**
 * # Personal Website
 *
 * The infrastructure for my personal website: [vendittelli.co.uk](https://vendittelli.co.uk/)
 */

terraform {
  required_version = "1.5.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.13.1"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.12.0"
    }
    linode = {
      source  = "linode/linode"
      version = "2.6.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

provider "cloudflare" {}

provider "linode" {
  token = var.linode_token
}
