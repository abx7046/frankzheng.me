---
title: 'Run Shiny Apps Locally'
date: '2022-06-06'
slug: run-shiny-apps-locally
---

> The R code in this post is also available as [this GitHub Gist](https://gist.github.com/frankzx/6368a75a7977a2c9743d15a70b17bead).

![Example Shiny App by Shiny](https://shiny.rstudio.com/images/rwidgets-iris.png)

The easiest way to host and run shiny apps is run them locally. Instead of hosting it in our own server or publishing to [shinyapps.io](http://shinyapps.io) , most of the time, we just need to share and use it internally. 

Fortunately, [`shiny::runApp()`](https://shiny.rstudio.com/reference/shiny/latest/runApp.html) provides an option to make this work, as it already allows users to specify the port that the application should listen on. All we need to do is find the internal IP address of local machine, choose a port that is considered safe, run the Shiny app on the selected address, and share it with people within the same network.

This method is surprisingly good for hosting multiple apps for multiple users, and it also works with simultaneous users who run the same functions as each user is able to view his/her own instance. I personally find this solution comes extra handy when sharing a quick data analysis on the intranet, however, I would not recommend building anything for production purpose via this way.

# The Setup

1. Create the following run.R script
2. Find the internal IP address in IPv4 format
3. Specify a desired and safe port. [`shiny::runApp()`](https://shiny.rstudio.com/reference/shiny/latest/runApp.html) offers a range of recommended ports.
4. Start it as a job on the Local machine. 
5. Co-workers can now view your work by visiting the IP address (e.g. `http://127.0.0.1:8888`) on their browser. 

```r
require(shiny)
folder_address = '~/path to shiny app'

# windows
# x <- system("ipconfig", intern=TRUE)
# z <- x[grep("IPv4", x)]
# ip <- gsub(".*? ([[:digit:]])", "\\1", z)

# mac
ip <- system("ifconfig lo0 | grep -w inet | awk '{print $2}'", intern = TRUE)

port = 8888
print(paste0("the Shiny App runs on: http://", ip, ":", port))
runApp(folder_address, launch.browser=FALSE, port = port, host = ip)
```