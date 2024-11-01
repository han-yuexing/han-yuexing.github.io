function switchPage(page,fromindex,fromlanguage) {
    const currentYear = new Date().getFullYear();
    if(page != currentYear && fromindex)
      if(fromlanguage == 'cn')
        location.href = `./archiver/${page}/index.html`;
      else if (fromlanguage == 'en')
        location.href = `./archiver/${page}/index_english.html`;
      else
        location.href = `./archiver/${page}/index_japan.html`;
    else if (page != currentYear && !fromindex)
      if(fromlanguage == 'cn')
        location.href = `../${page}/index.html`;
      else if (fromlanguage == 'en')
        location.href = `../${page}/index_english.html`;
      else
        location.href = `../${page}/index_japan.html`;
    else
      if(fromlanguage == 'cn')
        location.href = `../../index.html`;
      else if (fromlanguage == 'en')
        location.href = `../../index_english.html`;
      else
        location.href = `../../index_japan.html`;
}