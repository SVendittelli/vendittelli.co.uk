variable "aws_region" {
  type        = string
  description = "The AWS region to put the bucket into"
  default     = "eu-west-2"
}

variable "site_domain" {
  type        = string
  description = "The domain name to use for the static site"
}

variable "github_user" {
  type        = string
  description = "The GitHub username that owns the GitHub repo"
}

variable "linode_token" {
  type        = string
  description = "Your Linode API Personal Access Token. (required)"
}

variable "k8s_version" {
  type        = string
  description = "The Kubernetes version to use for this cluster. (required)"
  default     = "1.25"
}

variable "linode_region" {
  type        = string
  description = "The region where your cluster will be located. (required)"
  default     = "eu-west"
}

variable "pools" {
  description = "The Node Pool specifications for the Kubernetes cluster. (required)"
  type = list(object({
    type  = string
    count = number
  }))
  default = [
    {
      type : "g6-standard-1"
      count : 1
    }
  ]
}
