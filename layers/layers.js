var wms_layers = [];
var lyr_DSM_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "DSM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DSM_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9420894.869735, 1214525.399298, -9420546.482030, 1214852.246738]
                            })
                        });var lyr_MOSAIC_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "MOSAIC",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MOSAIC_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9420894.869735, 1214525.399298, -9420546.482030, 1214852.246738]
                            })
                        });var lyr_NDVImin025_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI min025",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVImin025_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9420864.238297, 1214551.644887, -9420582.155450, 1214792.731898]
                            })
                        });var lyr_GEMIIndex_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "GEMI-Index",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GEMIIndex_3.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9420864.238297, 1214551.644887, -9420582.155450, 1214792.731898]
                            })
                        });var format_GEMIRate_4 = new ol.format.GeoJSON();
var features_GEMIRate_4 = format_GEMIRate_4.readFeatures(json_GEMIRate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEMIRate_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GEMIRate_4.addFeatures(features_GEMIRate_4);var lyr_GEMIRate_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEMIRate_4, 
                style: style_GEMIRate_4,
    title: 'GEMI-Rate<br />\
    <img src="styles/legend/GEMIRate_4_0.png" /> 1<br />\
    <img src="styles/legend/GEMIRate_4_1.png" /> 2<br />\
    <img src="styles/legend/GEMIRate_4_2.png" /> 3<br />\
    <img src="styles/legend/GEMIRate_4_3.png" /> 4<br />\
    <img src="styles/legend/GEMIRate_4_4.png" /> 5<br />\
    <img src="styles/legend/GEMIRate_4_5.png" /> 6<br />\
    <img src="styles/legend/GEMIRate_4_6.png" /> 7<br />'
        });

lyr_DSM_0.setVisible(true);lyr_MOSAIC_1.setVisible(true);lyr_NDVImin025_2.setVisible(true);lyr_GEMIIndex_3.setVisible(true);lyr_GEMIRate_4.setVisible(true);
var layersList = [lyr_DSM_0,lyr_MOSAIC_1,lyr_NDVImin025_2,lyr_GEMIIndex_3,lyr_GEMIRate_4];
lyr_GEMIRate_4.set('fieldAliases', {'amount': 'amount', 'area': 'area', 'avgValue': 'avgValue', 'rate': 'rate', });
lyr_GEMIRate_4.set('fieldImages', {'amount': 'TextEdit', 'area': 'TextEdit', 'avgValue': 'TextEdit', 'rate': 'TextEdit', });
lyr_GEMIRate_4.set('fieldLabels', {'amount': 'no label', 'area': 'no label', 'avgValue': 'no label', 'rate': 'inline label', });
lyr_GEMIRate_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});