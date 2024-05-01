FROM python:3.10
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY r.txt /code/
RUN pip install -r r.txt
COPY . /code/