output "website_bucket_name" {
  description = "Name (id) of the bucket"
  value       = aws_s3_bucket.site.id
}

output "bucket_endpoint" {
  description = "Bucket endpoint"
  value       = aws_s3_bucket_website_configuration.site.website_endpoint
}

output "domain_name" {
  description = "Website endpoint"
  value       = var.site_domain
}

output "kubeconfig" {
  description = "Kubeconfig for access k8s cluster"
  value       = linode_lke_cluster.k8s.kubeconfig
  sensitive   = true
}

output "api_endpoints" {
  description = "k8s cluster API endpoints"
  value       = linode_lke_cluster.k8s.api_endpoints
}
