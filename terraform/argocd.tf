resource "kubernetes_namespace" "argocd" {
  metadata {
    name = "argocd"
  }

  depends_on = [
    local_sensitive_file.kubeconfig
  ]
}

resource "helm_release" "argocd" {
  name = "argocd"

  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"
  version    = "5.29.1"

  namespace = "argocd"

  depends_on = [
    kubernetes_namespace.argocd
  ]
}

# resource "kubernetes_manifest" "root" {
#   manifest = yamldecode(file("manifest.yaml"))

#   depends_on = [
#     helm_release.argocd
#   ]
# }
