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

output "connection_strings" {
  value = mongodbatlas_cluster.aoe.connection_strings.0.standard_srv
}
