terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.38.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.27.0"
    }
  }
}
