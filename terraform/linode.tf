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
