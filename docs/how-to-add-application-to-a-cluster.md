# How to add application to a cluster
Not all environments will hold all applications.
Therefore applications need to be assigned to individual environments.

As with changes, roll-out new application gradually.
So first introduce them to dev environments before promoting the application to other environments.

## Guide
1. Create a directory like `environments/{environment}/{application}`.
2. Place a Kustomization file in this directory
   For example:
   ```yaml
   # environments/dev-1-aws-us-east-1/podinfo/kustomization.yaml
   apiVersion: kustomize.config.k8s.io/v1beta1
   kind: Kustomization
   
   # Load the application base resource that need to be included
   resources:
     - ../../../applications/podinfo
   ```
3. Add any mixins which are specificly for that environment for that environment.
   ```yaml
   apiVersion: kustomize.config.k8s.io/v1beta1
   kind: Kustomization

   ...

   # Add any mixins which are for required for this environment
   components:
     - ../../../mixins/envs/dev
     - ../../../mixins/providers/aws
   ```
