terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.39.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.27.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

provider "cloudflare" {}
