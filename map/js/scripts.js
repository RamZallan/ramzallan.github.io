jQuery(document).ready(function () {
    var highlighted_states = { //Color-codes districts
        ga: '#e74c3c',
        nc: '#2ecc71',
        michigan: '#34495e',
        in : '#7f8c8d',
        me: '#1D8251',
        vt: '#1D8251',
        nh: '#1D8251',
        ri: '#1D8251',
        ma: '#1D8251',
        ct: '#1D8251',
        nj: '#F0BB42',
        pa: '#F0BB42',
        de: '#F0BB42',
        or: '#f39c12',
        wa: '#f39c12',
        md: '#9b59b6',
        va: '#9b59b6',
    }
    jQuery('#map').vectorMap({ //Initialize JQVMap
        map: 'usa_en',
        enableZoom: false,
        showTooltip: true,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderOpacity: 1,
        borderWidth: 1,
        color: '#4eb0e3',
        colors: highlighted_states,
        hoverColor: '#2C9BD7',
        selectedColor: '#0A84C5',
        onLabelShow: function (event, label, code) {
            if (code == 'ca') {
                label.text("California\n3 Teams\n5 Regionals"); //New line = \n
            }
        },
        onRegionOver: function (event, code, region) {
       document.body.style.cursor = "pointer";
        },
    onRegionOut: function (element, code, region) {
           document.body.style.cursor = "default";
        },
    });
});