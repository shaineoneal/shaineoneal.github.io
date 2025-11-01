---
title: "My First Post"
date: 2025-09-02T13:45:10-05:00
draft: false
toc: false
images:
tags:
  - untagged
---

I'm noting this here so I don't lose it (and so I have a post on my site).

## Dear Future Shaine,

Since you only work on this site every six months, everything will likely need to be updated.

1. Update Chocolatey with `choco upgrade chocolatey`
2. Update Go with `choco upgrade golang`
3. Update Hugo with `choco upgrade hugo-extended`
4. Update Hugo modules with `hugo mod get -u`

Once everything is up to date, hugo can be tested:

```powershell
# -D = --buildDrafts
# Includes pages marked as draft.

# -N = --navigateToChanged
# On live reload, navigates to the most recently changed page.

# -O = --openBrowser
# After server loads, opens browser page.

hugo server -D -N -O
```
