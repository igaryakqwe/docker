FROM python:3.10-slim-bullseye

WORKDIR /app

RUN pip install pip-tools

COPY requirements/backend.in .
RUN pip-compile backend.in

RUN pip install --no-cache-dir -r backend.txt

COPY . .

CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]