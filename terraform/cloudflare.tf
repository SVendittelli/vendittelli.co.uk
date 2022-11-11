data "cloudflare_zones" "domain" {
  filter {
    name = var.site_domain
  }
}

locals {
  zone_id = data.cloudflare_zones.domain.zones[0].id
}

resource "cloudflare_record" "site_cname" {
  zone_id = local.zone_id
  name    = var.site_domain
  value   = aws_s3_bucket_website_configuration.site.website_endpoint
  type    = "CNAME"

  ttl     = 1
  proxied = true
}

resource "cloudflare_record" "www" {
  zone_id = local.zone_id
  name    = "www"
  value   = var.site_domain
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
    ssl                      = "flexible"
    tls_1_3                  = "on"
    security_header {
      enabled            = true
      include_subdomains = true
      preload            = false
    }
  }
}
