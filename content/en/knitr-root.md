---
title: Set Up Root Directory for .Rmd and Knitr
author: Frank Zheng
date: '2020-04-21'
slug: knitr-root-directory
---

Yes, we all love to use the magical `knitr` package (Thanks to [Yihui](https://github.com/yihui)) to render `.Rmd` for 
reports. And I honestly think `knitr`, `.Rmd`, and R Studio makes `R` programming much better and simpler. 

However, here's a minor defect about `knitr`, by defult, it will only search the same directory as your `.Rmd` file to locate the dataset or files you need to pull in. It works fine when you have all your data files and `.Rmd` in the same folder (which you really shouldn't). But what would happen if you have accumulated tons of files in that same directory? **You get lost.** 

So you start to organize your scrips and files into subdirectories `docs/`, `data/`, `script/`, and you will need to configure knitr.

You can use `setwd()` with knitr to change the working directory, but you will have to run `setwd('../..')` at the start of any chunk that loads data (which is unpractical and ugly). **The elegant way** to do this is to use the package option `root.dir` to specify the root directory instead of forcibly using the directory of the input document. e.g. `knitr::opts_knit$set(root.dir = ...)`

This will set the root directory to your project folder. `Knitr` will now look for all files from this root folder rather than the folder `.Rmd` stored in.

**Example**

````r
```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
knitr::opts_knit$set(root.dir = '/Users/frankzheng/Desktop/test/data')
```
````

````r
```{r}
library('readxl')
```
````

````r
```{r}
getwd()
read_excel("data.xlsx")
```
````

**Note**

- `knitr::opts_knit$set(root.dir = ...)` works also in normal chunks, not only in the “setup” one.
-  The working directory starts to change in the following chunks after the chuck that contains `knitr::opts_knit$set(root.dir = ...)`.





