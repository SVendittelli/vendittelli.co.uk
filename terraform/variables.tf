variable "aws_region" {
  type        = string
  description = "The AWS region to deploy resources to"
  default     = "eu-west-1"
}

variable "site_domain" {
  type        = string
  description = "The domain name to use for the static site"
}

variable "github_user" {
  type        = string
  description = "The GitHub username that owns the GitHub repo"
}

variable "mongodbatlas_database_username" {
  type = string
  description = "The MongoDB Atlas admin username"
}

variable "mongodbatlas_database_user_password" {
  type = string
  description = "The MongoDB Atlas admin user password"
}

variable "mongodbatlas_org_id" {
  type = string
  description = "The MongoDB Atlas organisation id"
}

variable "mongodbatlas_accesslistip" {
  type = string
  description = "An IP address permitted to access the Mongo DB cluster"
}
