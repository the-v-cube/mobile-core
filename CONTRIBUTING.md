# Contributing to Mobile-Core

## Code Convention

To ensure that the code-base is similar from all pull-requests, please follow the below:

- tab indentation must be `4 spaces`.
- upon having 2 or more props, please keep each prop in a separate line like:
```javascript
{
    foo,
    foobar
}
```
- ensure a whitespace [SPACEBAR] is given in imports.

## Git Commit Convention

Ensure commit messages are crisp and concise. For ease in segregating commits please follow the below:

- **added**
```
added: ...
```
Added must be used upon commiting new files / features.
- **update**
```
update: ...
```
Update must be used upon refactoring code base or the directory.
- **purged**
```
purged: ...
```
Purged must be used if deletion of files. NOTE: Do not include if moving files from a directory in `purged`, only upon removing files!

