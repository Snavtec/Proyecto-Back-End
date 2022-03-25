FROM python:3.9

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONFAULTHANDLER=1 \
    PYTHONHASHSEED=random \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    PATH="$PATH:/root/.local/bin"

WORKDIR /code

COPY Pipfile Pipfile.lock requirements.txt /code/

RUN pip3 install -r requirements.txt

COPY . /code