document.querySelectorAll("pre code").forEach((element) => {
    let html = element.outerHTML
    let pattern = html.match(/\s*\n[\t\s]*/)

    element.outerHTML = html.replace(new RegExp(pattern, "g"), '\n')
});

// Resource
// https://stackoverflow.com/questions/31753617/how-can-i-remove-leading-whitespace-in-my-pre-code-block-without-removing-in
// https://gist.github.com/wintersolutions/4f3471954db73bf2d8f4e0ab541cf724