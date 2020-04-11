// Copyright (c) 2020 Frank Zheng under MIT
function remove_toc_links() {
  var toc = document.getElementById('TableOfContents');
  if (!toc) return;

  lis = toc.getElementsByTagName('li')
  for (li of lis) {

    str = li.innerHTML
    //console.log(str)
    if (str.includes('https://') && !str.includes('<ul>')) {

      //console.log(str)
      begin = str.indexOf('</a><a')
      end = str.search('target="_blank') + 16

      delete_text = str.substring(begin, end)
      //console.log(delete_text)

      // add tags and remove the website hyperlinks from TOC
      str_real = "<li>" + str.replace(delete_text, '') + "</li>"
      console.log(str_real)
      li.innerHTML = str_real
    }
  }
}

remove_toc_links()
