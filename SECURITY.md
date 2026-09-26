# Security policy

## Supported version

Security fixes are applied to the latest code on `main` and the production deployment based on it. Older commits and abandoned branches are not supported releases.

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability. Use the repository's [private vulnerability reporting](https://github.com/JonasJavier/IZAK-S-PHOTOS/security/advisories/new) so maintainers can investigate before details are disclosed.

Include the affected route or component, reproduction steps, impact, and any safe proof of concept. Do not access, modify, or submit other people's data while testing.

## Secrets and personal data

- Never commit `.env` files, database URLs, Django secret keys, Railway tokens, or deployment logs containing credentials.
- Do not put real personal or booking information into this demonstration project.
- Rotate any secret immediately if it is exposed, then remove it from Git history and deployment logs where possible.
- Report leaked credentials privately even if they appear expired.

