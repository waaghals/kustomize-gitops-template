# Terminology
## Application
Applications manifests with resources which are equal amongst all environments. These manifests are included in the overlays per environment.

## Components
Manifests which are shared over multiple environments, but not all environments.

## Changes
__Changes__ are short-lived components which are promoted between environment.

This documentation will use the term __changes__ for kustomization components which are shared over multiple environments. When talking about changes to manifests, the term modifications will be used.

## Mixins
__Mixins__ are components which are *not* promoted between environments.
Mixins are applied *after* modifications done by changes.
To make a change which overwrites a mixin, see overrides.

## Overrides
__Overrides__ are short-lived components which are promoted between environments.
While similar to changes, thessssssssssssssssssssse are applied *after* modifications done by mixins.

## Environment
Different clusters to which applications are deployed.
Environments can have bespoke manifests for that environment.
When the same manifests are shared over multiple environments, it becomes a good candidate to move the manifests to a __mixin__.