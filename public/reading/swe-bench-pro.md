---
title: SWE-Bench Pro benchmark overview
date: 2025-09-24
status: completed
link: https://arxiv.org/pdf/2509.16941
---

- Logged the jump from single-edit Classic tasks to Pro's multi-edit, multi-file repair scenarios that require reproducing failing test workflows end-to-end.
- Captured evaluation constraints: containerized repos with pre-built datasets, enforced tool usage limits, and pass/fail judged by full regression suites plus patch diff audits.
- Noted baseline gap—leading LLM+tool agents still solve a minority of Pro tasks, leaving meaningful headroom for Bickett.ai's long-horizon strategy.

> Follow-up: adapt the Gemini CLI harness so we can replay an official Pro task and compare telemetry against the paper's baselines.
