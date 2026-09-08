# Abishek Portfolio v3

Career-fair focused portfolio for Abishek Singanur Aswan Kumar: industrial engineering, operations research, analytics, and AI applied to complex operational systems.

## What is included

- Recruiter-first homepage with career focus, portrait, evidence metrics, selected work, experience, and contact actions.
- Data-driven project explorer with 28 project records and generated project detail routes.
- Research, experience, education, and about pages retained from the portfolio content system.
- Responsive navigation, keyboard focus states, skip navigation, reduced-motion support, and page metadata.
- Static-export architecture for straightforward deployment.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

For production validation:

```powershell
npx.cmd tsc --noEmit --incremental false
npm.cmd run build
```

The production export is written to `out\`.
