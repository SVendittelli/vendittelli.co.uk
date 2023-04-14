// Use the linode_lke_cluster resource to create a Kubernetes cluster
resource "linode_lke_cluster" "k8s" {
  k8s_version = var.k8s_version
  label       = "k8s"
  region      = var.linode_region

  dynamic "pool" {
    for_each = var.pools
    content {
      type  = pool.value["type"]
      count = pool.value["count"]
    }
  }
}

resource "local_sensitive_file" "kubeconfig" {
  content_base64 = linode_lke_cluster.k8s.kubeconfig
  filename       = "${path.module}/kube-config"
}
