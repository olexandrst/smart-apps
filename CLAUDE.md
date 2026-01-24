# CLAUDE.md - AI Assistant Guide for smart-apps

**Last Updated:** 2026-01-24
**Repository:** olexandrst/smart-apps
**Status:** New repository (no codebase yet)

---

## Overview

This document provides comprehensive guidance for AI assistants (like Claude) working with the `smart-apps` repository. It covers codebase structure, development workflows, conventions, and best practices.

---

## Current Repository State

**Status:** This is a newly initialized Git repository with no source code yet.

**Initial Setup Tasks:**
- Determine project type and technology stack
- Set up initial project structure
- Configure development tools and dependencies
- Establish coding conventions and standards
- Create initial documentation

---

## Development Workflow

### Branch Strategy

**Current Branch:** `claude/claude-md-mksara2sbce0r23k-uopm5`

#### Branch Naming Conventions
- Feature branches: `feature/<description>`
- Bug fixes: `fix/<description>`
- AI-assisted development: `claude/<session-id>` (required pattern for Claude branches)
- Hotfixes: `hotfix/<description>`
- Release branches: `release/<version>`

#### Git Operations Best Practices

**Pushing Changes:**
```bash
# Always use -u flag for new branches
git push -u origin <branch-name>

# CRITICAL: Claude branches MUST start with 'claude/' and end with matching session ID
# Otherwise push will fail with 403 HTTP code
```

**Network Retry Policy:**
- Retry failed push/fetch/pull operations up to 4 times
- Use exponential backoff: 2s, 4s, 8s, 16s between retries
- Applies to network errors only (not authentication or merge conflicts)

**Fetching/Pulling:**
```bash
# Prefer specific branch fetches
git fetch origin <branch-name>

# For pulls
git pull origin <branch-name>
```

### Commit Message Guidelines

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process, dependency updates, etc.
- `perf`: Performance improvements

**Examples:**
```
feat(auth): add user authentication with JWT tokens

Implements JWT-based authentication system with:
- Login/logout endpoints
- Token refresh mechanism
- Middleware for protected routes

Closes #123
```

```
fix(api): resolve null pointer error in user service

Adds null check before accessing user.profile property
to prevent runtime errors when profile is not loaded.

Fixes #456
```

---

## Codebase Structure

### Recommended Project Structure

Since this is a new repository, here's a recommended structure based on common smart app patterns:

```
smart-apps/
├── src/                    # Source code
│   ├── components/        # Reusable UI components
│   ├── services/          # Business logic and API services
│   ├── models/            # Data models and types
│   ├── utils/             # Utility functions
│   ├── config/            # Configuration files
│   └── types/             # TypeScript type definitions
├── tests/                 # Test files
│   ├── unit/             # Unit tests
│   ├── integration/      # Integration tests
│   └── e2e/              # End-to-end tests
├── docs/                  # Documentation
├── scripts/               # Build and utility scripts
├── public/                # Static assets
├── .github/               # GitHub workflows and templates
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .gitignore            # Git ignore rules
├── README.md             # Project README
└── CLAUDE.md             # This file
```

---

## Coding Conventions

### General Principles

1. **Simplicity Over Complexity**
   - Avoid over-engineering
   - Don't add features beyond what's requested
   - Three similar lines of code is better than a premature abstraction
   - Only add error handling for realistic scenarios

2. **No Unnecessary Additions**
   - Don't add comments to code you didn't change
   - Don't add type annotations unless necessary
   - Don't create utilities for one-time operations
   - Don't design for hypothetical future requirements

3. **Clean Code Practices**
   - Remove unused code completely (no `_vars` or `// removed` comments)
   - Validate only at system boundaries (user input, external APIs)
   - Trust internal code and framework guarantees
   - Keep functions focused and single-purpose

### Naming Conventions

**To be established based on technology stack chosen:**

**JavaScript/TypeScript (suggested):**
- Variables/Functions: `camelCase`
- Classes/Interfaces: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Private members: `_prefixedCamelCase` or use TypeScript `private`
- Files: `kebab-case.ts` or `PascalCase.tsx` for components

**Python (suggested):**
- Variables/Functions: `snake_case`
- Classes: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Private members: `_prefixed_snake_case`
- Files: `snake_case.py`

### File Organization

**When creating new files:**
1. Place files in appropriate directory based on function
2. Use clear, descriptive filenames
3. Group related files together
4. Maintain consistent naming patterns
5. Include proper imports/exports

---

## Security Guidelines

### Critical Security Practices

1. **Input Validation**
   - Validate all user input at system boundaries
   - Sanitize data before processing
   - Use parameterized queries for databases

2. **OWASP Top 10 Prevention**
   - **Injection**: Use parameterized queries, avoid string concatenation for SQL/commands
   - **Broken Authentication**: Implement secure session management, use strong password policies
   - **XSS**: Sanitize output, use Content Security Policy headers
   - **Broken Access Control**: Implement proper authorization checks
   - **Security Misconfiguration**: Use secure defaults, keep dependencies updated
   - **Sensitive Data Exposure**: Encrypt sensitive data, use HTTPS
   - **Insufficient Logging**: Log security events, monitor for anomalies
   - **Insecure Deserialization**: Validate serialized objects
   - **Using Components with Known Vulnerabilities**: Regular dependency audits
   - **Insufficient Logging & Monitoring**: Implement comprehensive logging

3. **Secrets Management**
   - Never commit secrets to version control
   - Use environment variables for sensitive configuration
   - Add sensitive files to `.gitignore` (`.env`, `credentials.json`, etc.)
   - Warn before committing files that might contain secrets

4. **Dependency Management**
   - Regularly update dependencies
   - Audit dependencies for vulnerabilities
   - Use lock files (`package-lock.json`, `yarn.lock`, etc.)

---

## Testing Strategy

### Test Types

1. **Unit Tests**
   - Test individual functions/components in isolation
   - Mock external dependencies
   - Aim for high coverage of business logic

2. **Integration Tests**
   - Test interaction between components/services
   - Test API endpoints
   - Test database operations

3. **End-to-End Tests**
   - Test complete user workflows
   - Test critical user paths
   - Run in production-like environment

### Testing Best Practices

- Write tests before fixing bugs (TDD approach when appropriate)
- Keep tests fast and independent
- Use descriptive test names that explain what's being tested
- Follow AAA pattern: Arrange, Act, Assert
- Don't test framework/library functionality
- Focus on behavior, not implementation details

---

## AI Assistant Guidelines

### When Making Changes

1. **Always Read Before Modifying**
   - Never propose changes to code you haven't read
   - Understand existing patterns before adding new code
   - Check for similar implementations in the codebase

2. **Use TodoWrite for Complex Tasks**
   - Break down multi-step tasks
   - Track progress for user visibility
   - Mark todos as in_progress when starting
   - Mark completed immediately when done

3. **Scope of Changes**
   - Only make changes directly requested or clearly necessary
   - A bug fix doesn't need surrounding code cleanup
   - Don't add docstrings/comments to unchanged code
   - Avoid refactoring unless explicitly requested

4. **Error Handling**
   - Only handle errors that can realistically occur
   - Don't add defensive code for impossible scenarios
   - Trust internal code contracts

5. **Communication**
   - Be concise and technical
   - Reference code with `file_path:line_number` format
   - Provide objective, factual information
   - No unnecessary praise or validation

### Tool Usage Preferences

1. **File Operations**
   - Use `Read` for reading files (not `cat`/`head`/`tail`)
   - Use `Edit` for modifying files (not `sed`/`awk`)
   - Use `Write` for creating files (not `echo >` or heredocs)
   - Use `Grep` for searching content (not bash `grep`)
   - Use `Glob` for finding files (not `find` or `ls`)

2. **Exploring Codebase**
   - Use `Task` tool with `subagent_type=Explore` for broad exploration
   - Use `Glob` for specific file pattern searches
   - Use `Grep` when you know what you're looking for

3. **Parallel Operations**
   - Make independent tool calls in parallel
   - Only run sequentially when there are dependencies
   - Never use placeholders or guess parameters

### Commits and Pull Requests

**Creating Commits:**
1. Run `git status` and `git diff` to review changes
2. Check `git log` to match existing commit message style
3. Draft concise commit message focusing on "why" not "what"
4. Add relevant files and create commit
5. Verify with `git status` after commit
6. Never commit files with secrets
7. Never skip hooks unless explicitly requested

**Creating Pull Requests:**
1. Review full commit history from branch divergence
2. Check if branch needs pushing
3. Draft PR summary with:
   - Summary section (1-3 bullet points)
   - Test plan section (markdown checklist)
4. Use `gh pr create` with heredoc for body formatting
5. Return PR URL when complete

### Git Safety Protocols

**NEVER:**
- Update git config
- Run destructive commands (force push, hard reset) without explicit permission
- Skip hooks (--no-verify, --no-gpg-sign) unless requested
- Force push to main/master branches
- Commit changes unless explicitly asked
- Use `git commit --amend` unless specific conditions met
- Use `-i` flag (interactive mode not supported)

---

## Development Environment

### To Be Configured

This section should be updated once the technology stack is chosen:

- **Runtime/Platform**: (e.g., Node.js, Python, Java, .NET)
- **Framework**: (e.g., React, Vue, Angular, Express, FastAPI)
- **Package Manager**: (e.g., npm, yarn, pnpm, pip, maven)
- **Build Tools**: (e.g., webpack, vite, rollup, gradle)
- **Linting/Formatting**: (e.g., ESLint, Prettier, Black, Checkstyle)
- **Testing Framework**: (e.g., Jest, Vitest, pytest, JUnit)

### Environment Setup

**To be added once stack is determined:**

```bash
# Installation steps
# Configuration steps
# Running development server
# Running tests
# Building for production
```

---

## API Conventions

### To Be Established

**REST API Guidelines** (if applicable):
- Endpoint naming conventions
- HTTP method usage (GET, POST, PUT, DELETE, PATCH)
- Request/response formats
- Error handling and status codes
- Authentication/authorization patterns
- Rate limiting
- Versioning strategy

**GraphQL Guidelines** (if applicable):
- Schema organization
- Naming conventions for types, queries, mutations
- Error handling
- Authentication/authorization
- Pagination patterns

---

## Database Conventions

### To Be Established

**When database is added:**
- Database type (SQL, NoSQL, etc.)
- Schema design principles
- Migration strategy
- Naming conventions (tables, columns, indexes)
- Query optimization guidelines
- Transaction handling
- Backup and recovery procedures

---

## Documentation Standards

### Code Documentation

1. **When to Document**
   - Complex algorithms or business logic
   - Non-obvious design decisions
   - Public APIs and interfaces
   - Configuration options

2. **What NOT to Document**
   - Self-explanatory code
   - Code you didn't change (unless adding new functionality)
   - Obvious functionality
   - Implementation details that may change

3. **Documentation Format**
   - Use JSDoc/TypeDoc for TypeScript/JavaScript
   - Use docstrings for Python
   - Use JavaDoc for Java
   - Keep documentation concise and up-to-date

### Project Documentation

**Essential Documentation:**
- `README.md`: Project overview, setup instructions, basic usage
- `CONTRIBUTING.md`: How to contribute to the project
- `CHANGELOG.md`: Version history and notable changes
- `CLAUDE.md`: This file - AI assistant guidance
- API documentation (when applicable)
- Architecture decision records (for significant decisions)

---

## Performance Considerations

### General Guidelines

1. **Premature Optimization**
   - Don't optimize without measuring
   - Focus on algorithmic complexity for critical paths
   - Profile before optimizing

2. **Common Optimizations**
   - Lazy loading for large resources
   - Caching for frequently accessed data
   - Database query optimization
   - Bundle size optimization (code splitting)
   - Image and asset optimization

3. **Monitoring**
   - Set up performance metrics
   - Monitor response times
   - Track resource usage
   - Alert on degradation

---

## Deployment

### To Be Configured

**Deployment checklist:**
- [ ] Define deployment environments (dev, staging, production)
- [ ] Set up CI/CD pipeline
- [ ] Configure environment variables
- [ ] Set up monitoring and logging
- [ ] Define rollback procedures
- [ ] Document deployment process

---

## Troubleshooting

### Common Issues

**To be populated as issues arise and solutions are found.**

### Debug Procedures

1. **When encountering errors:**
   - Read error messages carefully
   - Check logs for additional context
   - Verify configuration
   - Test in isolation
   - Use debugger or debug logging

2. **Before asking for help:**
   - Document what you've tried
   - Provide error messages and logs
   - Include relevant code snippets
   - Describe expected vs actual behavior

---

## Changelog

### 2026-01-24
- Initial CLAUDE.md creation
- Repository initialized
- Established basic guidelines and structure templates

---

## Future Updates

This document should be updated when:
- Technology stack is chosen and configured
- Project structure is established
- Coding conventions are finalized
- Testing framework is set up
- Deployment process is defined
- New team conventions are adopted
- Significant architectural decisions are made

**Update Process:**
1. Make changes to this document
2. Update the "Last Updated" date at the top
3. Add entry to Changelog section
4. Commit with message: `docs: update CLAUDE.md - <brief description>`

---

## Additional Resources

### External Documentation
- [Git Best Practices](https://git-scm.com/book/en/v2)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Semantic Versioning](https://semver.org/)

### Internal Resources
- README.md (to be created)
- CONTRIBUTING.md (to be created)
- Architecture documentation (to be created)

---

## Contact & Support

**Repository Owner:** olexandrst
**Project Name:** smart-apps

For questions or clarifications about this guide, open an issue or contact the project maintainers.

---

**Note for AI Assistants:** This is a living document. As you work with this repository, update this file to reflect the actual state of the codebase, new conventions, and lessons learned. Keep it accurate and useful for future AI assistants and human developers.
