# Pull request labels
Github workflow will run for each pull request.
This workflow will render the manifests in the before state, as well as the after state.
It then compares these rendered results to see which changes were made and applies the following labels on the PRs.

Note: The rendered results are not deployed by the workflow, it merely diffs them.


* __(safe)__: Modifications made in this PR do not result in differences between *rendered* results. 
This is helpfull during refactoring. e.g. cleanup of completely rolled out changes.
* __(side effects)__: Modification made in this PR does result in differences between *rendered* results.
This means that merging this PR will result in modification in the kubernetes clusters as ArgoCD will apply the changes.
* __(risky)__: This PR made modifications to bases in the `applications/` directory, which also resulted in differences between rendered manifests. i.e. it is highly likely these changes will impact multiple environments simultaneously.