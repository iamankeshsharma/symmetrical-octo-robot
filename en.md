# Engineering Documentation Guide

## Purpose

This guide defines what, when, and how to document throughout the software development lifecycle.

Our goal is to ensure that every important decision, interface, and process can be understood by someone new to the project—or by our future selves.

> **Code explains *how*. Documentation explains *why*, *what*, and *when*.**

---

## Documentation Principles

### 1. Document decisions, not implementation

Avoid explaining every line of code.

❌ Bad

```ts
// Increment i
i++;
```

✅ Good

```ts
// Retry to handle temporary network failures.
// Maximum of 3 attempts to prevent endless retries.
```

---

### 2. Keep documentation close to the code

Documentation should live alongside the code it describes whenever possible.

Examples

```texts
README.md

apps/
packages/

docs/

components/
Button/
README.md
```

---

### 3. Documentation is part of development

A feature is **not complete** until:

* Code is implemented
* Tests pass
* Documentation is updated

---

### 4. Prefer diagrams over long paragraphs

Use diagrams whenever they improve understanding.

Examples

* Flow diagrams
* Sequence diagrams
* Architecture diagrams
* ER diagrams
* State diagrams

---

### 5. Keep documentation current

Outdated documentation is worse than no documentation.

Whenever code changes, verify whether the related documentation also needs updating.

---

## What to Document

---

### Repository Documentation

Every repository should include:

```text
README.md
CHANGELOG.md
CONTRIBUTING.md
LICENSE
```

README should contain:

* Project overview
* Features
* Tech stack
* Installation
* Local setup
* Running the project
* Folder structure
* Environment variables
* Deployment
* Useful links

---

### Architecture Documentation

Document:

* High-level architecture
* System boundaries
* Services
* Data flow
* Authentication flow
* Authorization
* Caching
* Messaging
* Background jobs
* Third-party integrations

Include diagrams wherever possible.

---

### Architecture Decision Records (ADR)

Document every significant technical decision.

Template

```text
Title

Status

Context

Decision

Alternatives

Consequences
```

Examples

* Why Next.js
* Why PostgreSQL
* Why Redis
* Why TanStack Query
* Why GraphQL
* Why Event Sourcing

---

### API Documentation

Document:

* Endpoints
* Authentication
* Request
* Response
* Error responses
* Rate limits
* Pagination
* Versioning

Prefer generating documentation from OpenAPI whenever possible.

---

### Database Documentation

Document:

* Tables
* Relationships
* Constraints
* Indexes
* Naming conventions
* Migration strategy

Include ER diagrams.

---

### Component Documentation

For reusable UI components, document:

* Purpose
* Props
* Variants
* States
* Accessibility considerations
* Usage examples

---

### Library Documentation

Every reusable package should explain:

* Purpose
* Installation
* Public API
* Examples
* Configuration
* Breaking changes

---

### Configuration Documentation

Document important configuration.

Examples

* Environment variables
* Feature flags
* Secrets
* Build configuration
* Deployment configuration

---

### Operational Documentation

Document operational procedures.

Examples

* Deployment
* Rollback
* Monitoring
* Incident response
* Backup
* Restore

These documents are commonly called **Runbooks**.

---

### Business Rules

Document complex domain logic.

Examples

* Pricing calculation
* Tax rules
* Discount rules
* Permission rules
* Approval workflows

These should explain **why** the rule exists, not only the implementation.

---

### Algorithms

Document algorithms that are difficult to understand.

Include:

* Problem
* Inputs
* Outputs
* Time complexity
* Space complexity
* Assumptions
* Edge cases

---

### Integrations

Document every external integration.

Include:

* Provider
* Authentication
* Retry strategy
* Rate limits
* Failure handling
* Webhooks
* Version

---

## When to Document

---

### Before Development

Create documentation for:

* Requirements
* User stories
* Acceptance criteria
* API design
* Database design
* Architecture
* Technical proposal

---

### During Development

Update documentation whenever introducing:

* New feature
* New endpoint
* New package
* New service
* New environment variable
* New architecture decision
* New configuration

---

### During Code Review

Review documentation together with the code.

Checklist

* README updated
* API docs updated
* Architecture updated
* ADR added (if needed)
* Migration documented
* Breaking changes documented

---

### After Release

Update:

* Changelog
* User documentation
* Release notes
* Upgrade guide

---

## What NOT to Document

Avoid documenting things already obvious from the code.

Do **not** write comments like:

```ts
// Create user

const user = ...
```

Avoid duplicate documentation.

Avoid documenting temporary implementation details that are likely to change.

Avoid copying documentation into multiple places.

---

### Code Comments

Comments should explain **why**, not **what**.

Good

```ts
// Cache for 10 minutes because pricing rarely changes.
```

Bad

```ts
// Set cache duration.
```

Document:

* Business rules
* Workarounds
* Performance optimizations
* Security considerations
* Edge cases
* References to external specifications

---

### Commit Messages

Commit history is documentation.

Use Conventional Commits.

Examples

```text
feat:
fix:
refactor:
docs:
test:
build:
ci:
perf:
style:
chore:
```

Good

```text
feat(auth): add refresh token rotation
```

Better than

```text
updated auth
```

---

### Pull Requests

Every pull request should answer:

#### Why?

What problem does this solve?

#### What changed?

Describe the implementation.

#### How was it tested?

Manual testing

Unit tests

Integration tests

#### Screenshots

Include UI changes.

#### Breaking Changes

List migration steps if applicable.

---

## Documentation Folder Structure

```text
docs/

    architecture/
        overview.md
        authentication.md
        authorization.md
        database.md
        caching.md

    adr/
        001-nextjs.md
        002-postgresql.md
        003-redis.md

    api/
        authentication.md
        users.md
        orders.md

    guides/
        local-development.md
        deployment.md
        testing.md

    runbooks/
        deployment.md
        rollback.md
        production-incident.md

    diagrams/
        architecture.drawio
        er-diagram.drawio

README.md
CHANGELOG.md
CONTRIBUTING.md
```

---

## Documentation Checklist

### Repository

* [ ] README exists
* [ ] CONTRIBUTING exists
* [ ] CHANGELOG exists
* [ ] LICENSE exists

### Architecture

* [ ] Architecture diagram
* [ ] Data flow
* [ ] Authentication flow
* [ ] Service interactions

### APIs

* [ ] Request examples
* [ ] Response examples
* [ ] Error codes
* [ ] Authentication
* [ ] Versioning

### Database

* [ ] ER diagram
* [ ] Relationships
* [ ] Migrations
* [ ] Constraints

### Operations

* [ ] Deployment guide
* [ ] Rollback guide
* [ ] Monitoring guide
* [ ] Incident response

### Code

* [ ] Important functions documented
* [ ] Complex algorithms explained
* [ ] Public APIs documented

---

## Documentation Ownership

Every engineer is responsible for documentation.

If you change:

* behavior → update feature documentation
* architecture → update architecture docs
* APIs → update API docs
* configuration → update setup documentation
* business rules → update domain documentation
* operational procedures → update runbooks

Documentation should evolve together with the codebase.

---

## Golden Rules

1. Code explains **how**.
2. Documentation explains **why**.
3. Keep documentation close to the code.
4. Update documentation in the same pull request as the code.
5. Prefer diagrams over long text.
6. Remove outdated documentation immediately.
7. Avoid duplication.
8. Write for future developers.
9. If someone will ask about it later, document it today.
10. Good documentation saves engineering time and reduces onboarding effort.
