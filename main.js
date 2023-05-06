anchors = document.getElementsByTagName("a")

for (a of anchors) {
    a.setAttribute("target", "_blank")
}