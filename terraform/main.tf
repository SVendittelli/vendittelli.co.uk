/**
 * # Personal Website
 *
 * The infrastructure for my personal website: [vendittelli.co.uk](https://vendittelli.co.uk/)
 */

terraform {
  required_version = "1.5.2"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.6.2"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.9.0"
    }
    linode = {
      source  = "linode/linode"
      version = "2.5.1"
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
