# Contributing to Mobile-Core

## Code Convention

To ensure that the code-base is similar from all pull-requests, please follow the below:

1. tab indentation must be `4 spaces`.
2. components and classes should follow [PascalCase](https://www.theserverside.com/definition/Pascal-case), whereas functions must follow [camelCase](https://www.wikiwand.com/en/Camel_case).
3. upon having 2 or more props, please keep each prop in a separate line like:
```javascript
{
    foo,
    foobar
}
```
4. ensure a whitespace [SPACEBAR] is given in imports.
5. imports must follow the below order:
    1. default exports
    2. named exports
    3. custom exports (regardless whether if its a component or anything else)
6. imports must also follow length order:

```
import x
import xx
```
not
```
import xx
import x
```
as this enhances code readability.
7. please follow this syntax for naming builds if uploading a breaking change apk: **`yyyy-mm-dd-part-x.apk`**
## Git Commit Convention

Ensure commit messages are crisp and concise. For ease in segregating commits please follow the below:

1. **added**
```
added: ...
```
Added must be used upon commiting new files / features.
2. **update**
```
update: ...
```
Update must be used upon refactoring code base or the directory.
3. **purged**
```
purged: ...
```
Purged must be used if deletion of files. NOTE: Do not include if moving files from a directory in `purged`, only upon removing files!
4. **chore**
```
chore: ...
```
Chore must be used when there is no change made in the codebase.