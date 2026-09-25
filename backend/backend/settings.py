import os
import re
from pathlib import Path

import dj_database_url
from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parent.parent
ROOT_DIR = BASE_DIR.parent
FRONTEND_DIST = ROOT_DIR / "frontend" / "dist"

# Load local .env values without overriding real environment variables
# from platforms like Railway.
load_dotenv(ROOT_DIR / ".env", override=False)


def env_list(name: str, default: str) -> list[str]:
    value = os.getenv(name, default)
    return [
        item.strip().strip('"').strip("'")
        for item in re.split(r"[,\s]+", value)
        if item.strip().strip('"').strip("'")
    ]


SECRET_KEY = os.getenv(
    "DJANGO_SECRET_KEY",
    "django-insecure-local-development-key-change-me",
).strip().strip('"').strip("'")

DEBUG = os.getenv("DJANGO_DEBUG", "true").lower().strip('"').strip("'") in {
    "1",
    "true",
    "yes",
    "on",
}

default_hosts = [
    "localhost",
    "127.0.0.1",
    ".railway.app",
    "healthcheck.railway.app",
    "izaksphotos.jonasjavier.dev",
]

if railway_domain := os.getenv("RAILWAY_PUBLIC_DOMAIN"):
    default_hosts.append(railway_domain)

ALLOWED_HOSTS = env_list("DJANGO_ALLOWED_HOSTS", ",".join(default_hosts))

required_hosts = [
    ".railway.app",
    "healthcheck.railway.app",
    "izaksphotos.jonasjavier.dev",
]

for host in required_hosts:
    if host not in ALLOWED_HOSTS:
        ALLOWED_HOSTS.append(host)


INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "rest_framework",
    "api",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [FRONTEND_DIST],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

if database_url := os.getenv("DATABASE_URL"):
    database_url = database_url.strip().strip('"').strip("'")
    DATABASES["default"] = dj_database_url.parse(database_url, conn_max_age=600)


AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


LANGUAGE_CODE = "en-us"
TIME_ZONE = "America/Santo_Domingo"
USE_I18N = True
USE_TZ = True


STATIC_URL = "/static/"
STATIC_ROOT = ROOT_DIR / "staticfiles"
STATICFILES_DIRS = [FRONTEND_DIST] if FRONTEND_DIST.exists() else []

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


CORS_ALLOWED_ORIGINS = env_list(
    "DJANGO_CORS_ALLOWED_ORIGINS",
    "http://localhost:5173,http://127.0.0.1:5173,https://izaksphotos.jonasjavier.dev",
)

CSRF_TRUSTED_ORIGINS = [
    "https://*.railway.app",
    "https://izaksphotos.jonasjavier.dev",
]

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")


REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": [
        "rest_framework.renderers.JSONRenderer",
        "rest_framework.renderers.BrowsableAPIRenderer",
    ],
}