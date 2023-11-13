# Notes

NodeJS Course with Typescript using yargs and colors

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]

  -b, --base     Generate a multiply table with this base    [number] [required]
  -l, --list     List the mulitply table in the console
                                                      [boolean] [default: false]
  -t, --to       Generate a multiply table up to this number
                                               [number] [required] [default: 12]

```


#### npm start
##### Default arguments configuration


base=5
list=true
to=19

````
tsc && node build/index -b=5 -l=true -t=19
``````
