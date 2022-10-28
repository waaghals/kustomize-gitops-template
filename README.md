# GitOps
Experimental gitops repository

## Applications
Applications manifests with resources which are equal amongst all environments
These manifests are included in the overlays per environment.

## Features/Mixins/Overrides as components
Manifests which are shared over multiple environments, but not all environments.
Features are promoted between environment while mixins are not.
Overrides are similar to features, only they override changes from mixins.

## Environments
Manifests which are bespoke for that environment.
When the same setting is shared over many environments, it becomes a good candidate to promote to a feature.

# Docs
- [How to promote simple change](/docs/how-to-promote-simple-change.md)
- [How to promote complex change](/docs/how-to-promote-complex-change.md)
- [How to add application to a cluster](/docs/how-to-add-application-to-a-cluster.md)
- [How to add new cluster](/docs/how-to-add-new-cluster.md)
- [Configure Github Repositry](/docs/configure-github-repository.md)

# Examples
This repository contains [example PRs](https://github.com/waaghals/gitops/pulls?q=is%3Apr+label%3Aexample) which show the functionality.
