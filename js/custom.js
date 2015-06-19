$("#command").typed({
    strings: ["which morriswchris", "whois morriswchris", "morisw", "morriswchris -v", "less ~/repo/morriswchris/about.md" ],
    showCursor: false,
    typeSpeed: 20,
    callback: function() {
        $("#terminal").toggle()
        $("#output").toggle();
    }
});