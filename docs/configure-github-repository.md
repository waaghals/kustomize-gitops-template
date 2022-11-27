# Configure Github Repository
Protect the main branch with the following rules. (Settings -> Branches)

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
