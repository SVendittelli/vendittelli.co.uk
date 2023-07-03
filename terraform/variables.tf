variable "aws_region" {
  type        = string
  description = "The AWS region to put the S3 bucket into."
  default     = "eu-west-2"
}

variable "site_domain" {
  type        = string
  description = "The domain name to use for the static site."
  default     = "vendittelli.co.uk"
}

variable "github_user" {
  type        = string
  description = "The GitHub username that owns the GitHub repo."
  default     = "svendittelli"
}

variable "linode_token" {
  type        = string
  description = "The Linode API Personal Access Token."
}

variable "k8s_version" {
  type        = string
  description = "The Kubernetes version to use for the cluster."
  default     = "1.26"
}

variable "linode_region" {
  type        = string
  description = "The region where the kubernetes cluster will be located."
  default     = "eu-west"
}

variable "pools" {
  description = "The Node Pool specifications for the kubernetes cluster."
  type = list(object({
    type  = string
    count = number
  }))
  default = [
    {
      type : "g6-standard-1"
      count : 2
    }
  ]
}
