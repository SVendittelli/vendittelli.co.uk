---
layout: page
title: Security
permalink: /security/
---

The project's [security policy]({{ site.github.repository_url }}/security/policy) can be found in the [`SECURITY.md`]({{ site.github.repository_url }}/tree/main/SECURITY.md).

Security issue can be reported via [GitHub]({{ site.github.repository_url }}/security/advisories).

This information is also made available in line with the [proposed standard](https://securitytxt.org/) at [vendittelli.co.uk/.well-known/security.txt](https://vendittelli.co.uk/.well-known/security.txt).

## Table of Contents

- [Dependabot](#dependabot)
- [Best practices](#best-practices)
- [Do Not Track Compliance Policy](#do-not-track-compliance-policy)

## Dependabot

For alerts regarding vulnerable packages, this project use's [GitHub's dependabot](https://github.com/dependabot). Known vulnerabilities can be found on [GitHub]({{ site.github.repository_url }}/security/dependabot).

Dependencies are automatically updated by renovate, see [Dependencies](dependencies.md#renovate) for more information.

## Code scanning

There is an open task for code scanning ([#73]({{ site.github.issues_url }}/73)).

## Best practices

[![Mozilla HTTP Observatory](https://img.shields.io/mozilla-observatory/grade/vendittelli.co.uk?publish)](https://observatory.mozilla.org/analyze/vendittelli.co.uk)

Following the recommendations of [Mozilla HTTP Observatory](https://observatory.mozilla.org/analyze/vendittelli.co.uk), the following security best practices are being used:

### Content Security Policy

> The new Content-Security-Policy HTTP response header helps you reduce XSS risks on modern browsers by declaring which dynamic resources are allowed to load. - <https://content-security-policy.com>

Configured using a `meta` tag in the [`index.html`]({{ site.github.repository_url }}/tree/main/apps/home/src/index.html)

We specify the following policy:

```txt
default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; base-uri 'self'; form-action 'self'
```

This prevents loading resources from any source by default, but allows loading specific resources from the same origin (same scheme, host and port).

### HTTP Strict Transport Security (HSTS)

> The HTTP Strict-Transport-Security response header (often abbreviated as HSTS) informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS. - [mdm web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

Configured on [Cloudflare](infrastructure/cloudflare.md) using the [`cloudflare_zone_settings_override.security`]({{ site.github.repository_url }}/tree/main/terraform/cloudflare.tf) resource.

_Note:_ Following Google Chrome's advice, I am incrementally increasing the `max-age` for the `Strict-Transport-Security header`. Starting at 5 minutes, then 1 week, and finally 1 month. If that does not cause any issues, then increase to 1 year and apply to be included in Chrome's HSTS list. [Configure HSTS with increasing max-age #42]({{ site.github.issues_url }}/42).

### HTTPS Redirect

Automatically redirect HTTP requests to HTTPS.

Configured on [Cloudflare](infrastructure/cloudflare.md) using the [`cloudflare_zone_settings_override.security`]({{ site.github.repository_url }}/tree/main/terraform/cloudflare.tf) resource.

### Referrer Policy

> When a user navigates to a site via a hyperlink or a website loads an external resource, browsers inform the destination site of the origin of the requests through the use of the HTTP `Referer` (sic) header. Although this can be useful for a variety of purposes, it can also place the privacy of users at risk. - [Mozilla](https://infosec.mozilla.org/guidelines/web_security#referrer-policy)

Configured on [Cloudflare](infrastructure/cloudflare.md) using the [`cloudflare_managed_headers.managed_headers`]({{ site.github.repository_url }}/tree/main/terraform/cloudflare.tf) resource.

This sets the referrer policy to:

```txt
Referrer-Policy: same-origin
```

### TLS 1.2 & 1.3

Configured on [Cloudflare](infrastructure/cloudflare.md) using the [`cloudflare_zone_settings_override.security`]({{ site.github.repository_url }}/tree/main/terraform/cloudflare.tf) resource.

List of all SSL/TLS protocols supported by the server:

- `TLSv1.2`
- `TLSv1.3`

### X-Content-Type-Options

> `X-Content-Type-Options` is a header supported by Internet Explorer, Chrome and Firefox 50+ that tells it not to load scripts and stylesheets unless the server indicates the correct MIME type. Without this header, these browsers can incorrectly detect files as scripts and stylesheets, leading to XSS attacks. - [Mozilla](https://infosec.mozilla.org/guidelines/web_security#x-content-type-options)

Configured on [Cloudflare](infrastructure/cloudflare.md) using the [`cloudflare_managed_headers.managed_headers`]({{ site.github.repository_url }}/tree/main/terraform/cloudflare.tf) resource.

```txt
X-Content-Type-Options: nosniff
```

### X-Frame-Options

> `X-Frame-Options` is an HTTP header that allows sites control over how your site may be framed within an iframe. Clickjacking is a practical attack that allows malicious sites to trick users into clicking links on your site even though they may appear to not be on your site at all. - [Mozilla](https://infosec.mozilla.org/guidelines/web_security#x-frame-options)

Configured on [Cloudflare](infrastructure/cloudflare.md) using the [`cloudflare_managed_headers.managed_headers`]({{ site.github.repository_url }}/tree/main/terraform/cloudflare.tf) resource.

```txt
X-Frame-Options: SAMEORIGIN
```

### X-XSS-Protection

> X-XSS-Protection is a feature of Internet Explorer and Chrome that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks. - [Mozilla](https://infosec.mozilla.org/guidelines/web_security#x-xss-protection)

Configured on [Cloudflare](infrastructure/cloudflare.md) using the [`cloudflare_managed_headers.managed_headers`]({{ site.github.repository_url }}/tree/main/terraform/cloudflare.tf) resource.

```txt
X-XSS-Protection: 1; mode=block
```

## Do Not Track Compliance Policy

> EFF's DNT Policy, a text file that domains can post in verbatim form to unilaterally commit to respecting a meaningful version of Do Not Track, in such a way that other software can tell they have done so. - [EFF](https://www.eff.org/dnt-policy)

Available at [vendittelli.co.uk/.well-known/dnt-policy.txt](https://vendittelli.co.uk/.well-known/dnt-policy.txt).
