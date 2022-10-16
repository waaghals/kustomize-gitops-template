# GitOps
Experimental gitops repository

## Base
Applications manifests with settings which are equal amongst all environments
These will be changes by overlays for each environment.

## Components
Manifests which are shared over multiple environments, but not all environments.

## Overlays
Manifests which are bespoke for that environment.
When the same setting is shared over many environments, it becomes a good candidate to promot to a component.
