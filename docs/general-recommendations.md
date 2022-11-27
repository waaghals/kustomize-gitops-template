# General recommendations
1. __Limit the number of differences between environments.__
   E.g. instead of managing the replica count per environment, prefer to use a horizontal pod autoscaling so each environment is automatically sing the correct number of pods, while also having the same configuration across all environments.
2. Have a __simple prefix for environments__ which allows for easy identification. While keeping the most important differenciator between environments clear.
   This repository uses the dev/tst/stg/prd prefixes followed by a unique number.
   This prevent typo conflicts, while still allowing for easy tab completions.
