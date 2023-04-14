/**
 * # Personal Website
 *
 * The infrastructure for my personal website: [vendittelli.co.uk](https://vendittelli.co.uk/)
 */

terraform {
  required_version = "1.4.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.62.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.3.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "2.9.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.19.0"
    }
    linode = {
      source  = "linode/linode"
      version = "1.30.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "2.4.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

provider "cloudflare" {}

provider "helm" {
  kubernetes {
    config_path = local_sensitive_file.kubeconfig.filename
  }
}

provider "kubernetes" {
  config_path = local_sensitive_file.kubeconfig.filename

  // Enable manifest_resource to allow for directly applying a manifest file
  experiments {
    manifest_resource = true
  }
}

provider "linode" {
  token = var.linode_token
}
