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

# Recommended configuration
Protect the main branch with the following rules. (Settings -> Branches)

---
**Branch name pattern**

main

---
**Protect matching branches**
- [x] Require a pull request before merging
- - [x] Require approvals
- - [x] Dismiss stale pull request approvals when new commits are pushed
- - [ ] Require review from Code Owners
- [x] Require status checks to pass before merging 
- - [ ] Require branches to be up to date before merging
    
    **Status checks that are required**
    - Pluto
    - Polaris
    - Yamllint
- [ ] Require conversation resolution before merging
- [ ] Require signed commits 
- [ ] Require linear history 
- [ ] Require deployments to succeed before merging 
- [ ] Do not allow bypassing the above settings 

# Examples
This repository contains [example PRs](https://github.com/waaghals/gitops/pulls?q=is%3Apr+label%3Aexample) which show the functionality.

