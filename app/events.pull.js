var pull_example = new Lungo.Element.Pull('section#pull article', {
    onPull: "Pull down to refresh",
    onRelease: "Release to get new data",
    onRefresh: "Refreshing...",
    callback: function() {
        alert("Pull & Refresh completed!");
        pull_example.hide();
    }
});

var pull_example2 = new Lungo.Element.Pull('section#ListarVenta article', {
    onPull: "Desliza hacia abajo para refrescar",
    onRelease: "Obteniendo nuevos datos",
    onRefresh: "Refrescando...",
    callback: function () {
        // alert("Pull & Refresh completed!");
        getVentas();
        pull_example2.hide();
    }
});