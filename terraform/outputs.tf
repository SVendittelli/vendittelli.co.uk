output "kubeconfig" {
  description = "Kubeconfig for accessing the k8s cluster (base64 encoded)"
  value       = linode_lke_cluster.k8s.kubeconfig
  sensitive   = true
}

output "api_endpoints" {
  description = "k8s cluster API endpoints"
  value       = linode_lke_cluster.k8s.api_endpoints
}
