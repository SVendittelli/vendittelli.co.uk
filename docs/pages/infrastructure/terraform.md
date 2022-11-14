---
layout: page
title: Terraform
---

> Terraform is an open-source infrastructure as code software tool that enables you to safely and predictably create, change, and improve infrastructure. - [HashiCorp](https://www.terraform.io/)

I use terraform for provisioning and managing the infrastructure and security policies for the project.

## Infrastructure as Code

> Infrastructure as code (IaC) tools allow you to manage infrastructure with configuration files rather than through a graphical user interface. IaC allows you to build, change, and manage your infrastructure in a safe, consistent, and repeatable way by defining resource configurations that you can version, reuse, and share. - [HashiCorp](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code)

The code itself is stored in the [`terraform`]({{ site.github.repository_url }}/tree/main/terraform) folder of the GitHub repo. This allows the infrastructure to be version controlled and be rolled out and updated without manual intervention and for it.

Initially I was using the [Terraform CLI](https://developer.hashicorp.com/terraform/cli) for provisioning. This gave me the first benefit of being able to roll back changes and have a history of my configuration. But it still required me manually applying the changes each time I made them.

## GitOps

> GitOps is the practice of using Git pull requests to verify and automatically deploy system infrastructure changes. - [bunnyshell](https://www.bunnyshell.com/blog/gitops-vs-devops)

GitOps combines the benefits of [IaC](#infrastructure-as-code), [pull requests](../vcs.md), and [CI/CD](../devops/ci-cd.md). The heart of GitOps is as follows:

All the infrastructure is defined as declarative config in a git repository. Using automated pipelines, any changes on the `main` branch are automatically applied to the infrastructure providers. Any changes to main must be submitted via pull request, which supplies a diff of the infrastructure after the merge.

I use [Terraform Cloud](https://developer.hashicorp.com/terraform/cloud-docs) to achieve this. It can connect to [VCS Providers](https://developer.hashicorp.com/terraform/cloud-docs/vcs) to automatically initiate Terraform runs when changes are committed to the specified branch and by automatically predicting how pull requests will affect infrastructure.

This has the added benefit of not needing infrastructure credentials on a local machine to be able to deploy. This means development can be done on another machine (or even in a [devcontainer](../devcontainers.md)) without preventing deployment.
