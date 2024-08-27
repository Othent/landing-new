# Othent.io Landing Page



## Running it locally:

```
  pnpm install
  pnpm start
```

To run it with a local `KeyManagementService` instance:

1. Clone [`@othent/kms`](https://github.com/Othent/KeyManagementService) in the same directory where you cloned this
   project.

2. Inside `@othent/kms` (`../KeyManagementService`), run `pnpm dev`.

3. Inside this repo, run:

   - `pnpm link ../KeyManagementService/`. See [`pnpm link`](https://pnpm.io/cli/link).

     You can later revert this with `pnpm unlink ./KeyManagementService/` or `pnpm unlink @othent/kms`.

   - or set `"@othent/kms": "file:../KeyManagementService"`.

     You can later revert this with `pnpm add @othent/kms@latest`.

<br />

