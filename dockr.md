How to start production-like env locally inside Docker container:

## to build image:
```sh
docker build -t pjurak/bank-app .
```

## to run container:
```sh
docker run -p 3000:3000 pjurak/bank-app
```

## one-liner without log:
```sh
docker run --rm -it -p 3000:3000 $(docker build -q .)
```