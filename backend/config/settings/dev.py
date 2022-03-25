from .base import *
from .base import env

SECRET_KEY = env.str("SECRET_KEY")

DEBUG = True

ALLOWED_HOSTS = ["*"]

DATABASES = {"default": env.db_url("DATABASE_URL")}
DATABASES["default"]["ATOMIC_REQUESTS"] = True

INTERNAL_IPS = [
    "127.0.0.1",
]
import socket

# tricks to have debug toolbar when developing with docker
ip = socket.gethostbyname(socket.gethostname())
INTERNAL_IPS += [ip[:-1] + "1"]
