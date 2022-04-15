How to start production-like env locally inside Docker container:

##to build image:
```docker build -t pjurak/bank-app .```

##to run container:
```docker run -p 3000:3000 pjurak/bank-app```