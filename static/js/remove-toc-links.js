function remove_toc_links() {
  var toc = document.getElementById('TableOfContents');
  if (!toc) return;

  lis = toc.getElementsByTagName('li')
  for (li of lis) {

    str = li.innerHTML
    if (str.includes('-https-') && !str.includes('<ul>')) {

      begin = str.indexOf('"><')
      end = str.search('target="_blank') + 14

      delete_text = str.substring(begin, end)

      // add tags and remove the website hyperlinks from TOC
      str_real = '<li>' + str.replace(delete_text, '') + '</li>'
      // console.log(str_real)
      li.outerHTML = str_real
    }
  }
}

remove_toc_links()
