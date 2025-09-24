---
title: Triage Gemini CLI bugs for contribution
date: 2025-09-24
status: active
---

- Reproduce the headless `--output-format json` failure noted in [issue #9281](https://github.com/google-gemini/gemini-cli/issues/9281) and confirm exit behavior on non-fatal tool errors.
- Trace the headless executor's error handling path to distinguish fatal tool errors from recoverable validation problems.
- Draft a PR that lets the CLI self-correct or at least continue streaming JSON output after invalid tool calls.
- Sweep other high-priority `kind/bug` tickets in `google-gemini/gemini-cli` for related structured-output regressions and queue follow-up PRs.

**Notes**

Focus first on replicating the regression with a minimal script so fixes can be validated quickly in CI and future release smoke tests.
