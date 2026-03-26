ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25831").setExtent([354766.184800, 4559238.668610, 355579.736807, 4559926.325113]);
var wms_layers = [];

var lyr_SAOrtofotocolor2024_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?time=2024",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_serie_anual",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '[SA] Ortofoto color [2024]',
                            popuplayertitle: '[SA] Ortofoto color [2024]',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SAOrtofotocolor2024_0, 0]);
var format_Passosnoacessibles_1 = new ol.format.GeoJSON();
var features_Passosnoacessibles_1 = format_Passosnoacessibles_1.readFeatures(json_Passosnoacessibles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Passosnoacessibles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passosnoacessibles_1.addFeatures(features_Passosnoacessibles_1);
var lyr_Passosnoacessibles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passosnoacessibles_1, 
                style: style_Passosnoacessibles_1,
                popuplayertitle: 'Passos no acessibles',
                interactive: true,
                title: '<img src="styles/legend/Passosnoacessibles_1.png" /> Passos no acessibles'
            });
var format_Semaforsinclusius_2 = new ol.format.GeoJSON();
var features_Semaforsinclusius_2 = format_Semaforsinclusius_2.readFeatures(json_Semaforsinclusius_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Semaforsinclusius_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semaforsinclusius_2.addFeatures(features_Semaforsinclusius_2);
var lyr_Semaforsinclusius_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Semaforsinclusius_2, 
                style: style_Semaforsinclusius_2,
                popuplayertitle: 'Semaforsinclusius',
                interactive: true,
                title: '<img src="styles/legend/Semaforsinclusius_2.png" /> Semaforsinclusius'
            });
var format_Passosavianantsaccessibles_3 = new ol.format.GeoJSON();
var features_Passosavianantsaccessibles_3 = format_Passosavianantsaccessibles_3.readFeatures(json_Passosavianantsaccessibles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Passosavianantsaccessibles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passosavianantsaccessibles_3.addFeatures(features_Passosavianantsaccessibles_3);
var lyr_Passosavianantsaccessibles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passosavianantsaccessibles_3, 
                style: style_Passosavianantsaccessibles_3,
                popuplayertitle: 'Passos a vianants accessibles',
                interactive: true,
                title: '<img src="styles/legend/Passosavianantsaccessibles_3.png" /> Passos a vianants accessibles'
            });
var format_Ampliacidevoreres_4 = new ol.format.GeoJSON();
var features_Ampliacidevoreres_4 = format_Ampliacidevoreres_4.readFeatures(json_Ampliacidevoreres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Ampliacidevoreres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ampliacidevoreres_4.addFeatures(features_Ampliacidevoreres_4);
var lyr_Ampliacidevoreres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ampliacidevoreres_4, 
                style: style_Ampliacidevoreres_4,
                popuplayertitle: 'Ampliació de voreres',
                interactive: true,
                title: '<img src="styles/legend/Ampliacidevoreres_4.png" /> Ampliació de voreres'
            });
var format_parkingadaptats_5 = new ol.format.GeoJSON();
var features_parkingadaptats_5 = format_parkingadaptats_5.readFeatures(json_parkingadaptats_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_parkingadaptats_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkingadaptats_5.addFeatures(features_parkingadaptats_5);
var lyr_parkingadaptats_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkingadaptats_5, 
                style: style_parkingadaptats_5,
                popuplayertitle: 'parking adaptats',
                interactive: true,
                title: '<img src="styles/legend/parkingadaptats_5.png" /> parking adaptats'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_SAOrtofotocolor2024_0,],
                                fold: 'open',
                                title: 'Mapas de fondo'});

lyr_SAOrtofotocolor2024_0.setVisible(true);lyr_Passosnoacessibles_1.setVisible(true);lyr_Semaforsinclusius_2.setVisible(true);lyr_Passosavianantsaccessibles_3.setVisible(true);lyr_Ampliacidevoreres_4.setVisible(true);lyr_parkingadaptats_5.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_Passosnoacessibles_1,lyr_Semaforsinclusius_2,lyr_Passosavianantsaccessibles_3,lyr_Ampliacidevoreres_4,lyr_parkingadaptats_5];
lyr_Passosnoacessibles_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Semaforsinclusius_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Passosavianantsaccessibles_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Ampliacidevoreres_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_parkingadaptats_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Passosnoacessibles_1.set('fieldImages', {'fid': '', 'id': '', });
lyr_Semaforsinclusius_2.set('fieldImages', {'fid': '', 'id': '', });
lyr_Passosavianantsaccessibles_3.set('fieldImages', {'fid': '', 'id': '', });
lyr_Ampliacidevoreres_4.set('fieldImages', {'fid': '', 'id': '', });
lyr_parkingadaptats_5.set('fieldImages', {'fid': '', 'id': '', });
lyr_Passosnoacessibles_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Semaforsinclusius_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Passosavianantsaccessibles_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Ampliacidevoreres_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_parkingadaptats_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_parkingadaptats_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});