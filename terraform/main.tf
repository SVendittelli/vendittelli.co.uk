/**
 * # Personal Website
 *
 * The infrastructure for my personal website: [vendittelli.co.uk](https://vendittelli.co.uk/)
 */

terraform {
  required_version = "1.3.8"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.54.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "3.34.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

provider "cloudflare" {}
