var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Bangunan_2 = new ol.format.GeoJSON();
var features_Bangunan_2 = format_Bangunan_2.readFeatures(json_Bangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_2.addFeatures(features_Bangunan_2);
var lyr_Bangunan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_2, 
                style: style_Bangunan_2,
                popuplayertitle: "Bangunan",
                interactive: true,
    title: 'Bangunan<br />\
    <img src="styles/legend/Bangunan_2_0.png" /> Peribadatan<br />\
    <img src="styles/legend/Bangunan_2_1.png" /> Permukiman<br />'
        });
var format_BatasDusun_3 = new ol.format.GeoJSON();
var features_BatasDusun_3 = format_BatasDusun_3.readFeatures(json_BatasDusun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_3.addFeatures(features_BatasDusun_3);
var lyr_BatasDusun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_3, 
                style: style_BatasDusun_3,
                popuplayertitle: "Batas Dusun",
                interactive: true,
                title: '<img src="styles/legend/BatasDusun_3.png" /> Batas Dusun'
            });
var format_JalanDesa_4 = new ol.format.GeoJSON();
var features_JalanDesa_4 = format_JalanDesa_4.readFeatures(json_JalanDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_4.addFeatures(features_JalanDesa_4);
var lyr_JalanDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_4, 
                style: style_JalanDesa_4,
                popuplayertitle: "Jalan Desa",
                interactive: false,
                title: '<img src="styles/legend/JalanDesa_4.png" /> Jalan Desa'
            });
var format_JalanUtama_5 = new ol.format.GeoJSON();
var features_JalanUtama_5 = format_JalanUtama_5.readFeatures(json_JalanUtama_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanUtama_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanUtama_5.addFeatures(features_JalanUtama_5);
var lyr_JalanUtama_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanUtama_5, 
                style: style_JalanUtama_5,
                popuplayertitle: "Jalan Utama",
                interactive: false,
                title: '<img src="styles/legend/JalanUtama_5.png" /> Jalan Utama'
            });
var format_Fasilitas_6 = new ol.format.GeoJSON();
var features_Fasilitas_6 = format_Fasilitas_6.readFeatures(json_Fasilitas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_6.addFeatures(features_Fasilitas_6);
var lyr_Fasilitas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_6, 
                style: style_Fasilitas_6,
                popuplayertitle: "Fasilitas",
                interactive: true,
    title: 'Fasilitas<br />\
    <img src="styles/legend/Fasilitas_6_0.png" /> Masjid<br />\
    <img src="styles/legend/Fasilitas_6_1.png" /> Musholla<br />'
        });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatelite_1.setVisible(true);lyr_Bangunan_2.setVisible(true);lyr_BatasDusun_3.setVisible(true);lyr_JalanDesa_4.setVisible(true);lyr_JalanUtama_5.setVisible(true);lyr_Fasilitas_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,lyr_Bangunan_2,lyr_BatasDusun_3,lyr_JalanDesa_4,lyr_JalanUtama_5,lyr_Fasilitas_6];
lyr_Bangunan_2.set('fieldAliases', {'id': 'id', 'Fungsi': 'Fungsi', });
lyr_BatasDusun_3.set('fieldAliases', {'FID_Batas_': 'FID_Batas_', 'Id': 'Id', });
lyr_JalanDesa_4.set('fieldAliases', {'id': 'id', 'Keterangan': 'Status Jalan', });
lyr_JalanUtama_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Fasilitas_6.set('fieldAliases', {'Id': 'Id', 'Jenis': 'Jenis Fasilitas', });
lyr_Bangunan_2.set('fieldImages', {'id': 'Hidden', 'Fungsi': 'TextEdit', });
lyr_BatasDusun_3.set('fieldImages', {'FID_Batas_': 'Hidden', 'Id': 'Range', });
lyr_JalanDesa_4.set('fieldImages', {'id': 'Hidden', 'Keterangan': 'TextEdit', });
lyr_JalanUtama_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Fasilitas_6.set('fieldImages', {'Id': 'Hidden', 'Jenis': 'TextEdit', });
lyr_Bangunan_2.set('fieldLabels', {'Fungsi': 'inline label - always visible', });
lyr_BatasDusun_3.set('fieldLabels', {'Id': 'header label - always visible', });
lyr_JalanDesa_4.set('fieldLabels', {'Keterangan': 'no label', });
lyr_JalanUtama_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Fasilitas_6.set('fieldLabels', {'Jenis': 'inline label - always visible', });
lyr_Fasilitas_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});