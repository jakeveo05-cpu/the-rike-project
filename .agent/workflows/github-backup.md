---
description: Auto backup to GitHub after completing a task
---

# GitHub Backup Workflow

This workflow automatically backs up the project to GitHub after completing significant changes.

## Steps

// turbo
1. Check git status to see changes:
```
git status
```

// turbo
2. Add all changes:
```
git add -A
```

3. Commit with descriptive message (replace [DESCRIPTION] with actual changes):
```
git commit -m "[DESCRIPTION]"
```

// turbo
4. Push to GitHub:
```
git push origin main
```

## Notes

- Repository: https://github.com/jakeveo05-cpu/the-rike-project
- User email: jakeveo05@gmail.com
- User name: jakeveo05-cpu
- Always use descriptive commit messages summarizing the changes made
