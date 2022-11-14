data "cloudflare_zones" "domain" {
  filter {
    name = var.site_domain
  }
}

locals {
  zone_id = data.cloudflare_zones.domain.zones[0].id
}

# apex domain CNAME record
resource "cloudflare_record" "site_cname" {
  zone_id = local.zone_id
  name    = var.site_domain
  value   = aws_s3_bucket_website_configuration.site.website_endpoint
  type    = "CNAME"

  ttl     = 1
  proxied = true
}

# www subdomain pointing to apex domain
resource "cloudflare_record" "www" {
  zone_id = local.zone_id
  name    = "www"
  value   = var.site_domain
  type    = "CNAME"

  ttl     = 1
  proxied = true
}

# docs subdomain pointing to GitHub pages
resource "cloudflare_record" "docs" {
  zone_id = local.zone_id
  name    = "docs"
  value   = "${var.github_user}.github.io"
  type    = "CNAME"

  ttl     = 1
  proxied = true
}

# Disable email
resource "cloudflare_record" "dmarc" {
  zone_id = local.zone_id
  name    = "_dmarc"
  value   = "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"
  type    = "TXT"

  ttl = 1
}

resource "cloudflare_record" "domainkey" {
  zone_id = local.zone_id
  name    = "*._domainkey"
  value   = "v=DKIM1; p="
  type    = "TXT"

  ttl = 1
}

resource "cloudflare_record" "spf1" {
  zone_id = local.zone_id
  name    = "vendittelli.co.uk"
  value   = "v=spf1 -all"
  type    = "TXT"

  ttl = 1
}

# Variously configure:
# - Redirect all requests with scheme “http” to “https”
# - Change “http” to “https” for all resources or links that can be served with HTTPS
# - Encrypts browser -> cloudflare but not to S3
# - Enable the latest version of the TLS protocol
# - Enable HSTS headers for root and subdomains
resource "cloudflare_zone_settings_override" "security" {
  zone_id = local.zone_id

  settings {
    always_use_https         = "on"
    automatic_https_rewrites = "on"
    min_tls_version          = "1.2"
    ssl                      = "flexible"
    tls_1_3                  = "on"
    security_header {
      enabled            = true
      max_age            = 604800
      include_subdomains = true
      preload            = false
    }
  }
}

# Enable security headers using Managed Meaders
# https://developers.cloudflare.com/rules/transform/managed-transforms/reference/
resource "cloudflare_managed_headers" "managed_headers" {
  zone_id = local.zone_id

  managed_response_headers {
    id      = "add_security_headers"
    enabled = true
  }
}
