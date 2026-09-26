# Contributing

Thanks for helping improve Izak's Photos. Small, focused pull requests are easiest to review and safest to deploy.

## Development setup

Requirements: Python 3.11+, Node.js 20+, and npm.

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
npm ci --prefix frontend
Copy-Item .env.example .env
python scripts/dev.py
```

The frontend runs at `http://127.0.0.1:5173`, the Django API at `http://127.0.0.1:8000`, and the health endpoint at `http://127.0.0.1:8000/api/health/`.

## Workflow

1. Create a descriptive branch from `main`.
2. Keep secrets, local databases, virtual environments, and build output out of Git.
3. Match import paths to file-name casing exactly so Linux production builds behave like local development.
4. Add or update tests for backend behavior changes.
5. Regenerate image previews with `python scripts/optimize_images.py` when portfolio media changes.
6. Run the checks below and open a pull request.

## Required checks

```powershell
$env:DJANGO_SECRET_KEY = "local-test-only-0123456789abcdefghijklmnopqrstuvwxyz-ABCDEFG"
$env:DJANGO_DEBUG = "false"
python backend/manage.py test api
npm ci --prefix frontend
npm --prefix frontend run build
git diff --check
```

## Pull requests

Describe the user-visible change, the reason for it, how it was verified, and any deployment considerations. Include before/after captures for meaningful visual changes, but never include credentials, private Railway values, or real booking submissions.

By contributing, you agree that your code contribution is licensed under the repository's GPL-3.0 license. Photography and other media may have separate rights; only contribute assets you are authorized to share.

