function footerBtn(id) {
    var styles = getComputedStyle(document.getElementById(id));
    var display = styles.getPropertyValue('display')
    // document.getElementById(id).style.cssText="display: block !important;"
    console.log(display);
    if (display == 'none') {
        document.getElementById(id).style.cssText="display: block !important;"
    }else{
        document.getElementById(id).style.cssText="display: none !important;"
    }
}