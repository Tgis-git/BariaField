var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SelectedVillages_2 = new ol.format.GeoJSON();
var features_SelectedVillages_2 = format_SelectedVillages_2.readFeatures(json_SelectedVillages_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SelectedVillages_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SelectedVillages_2.addFeatures(features_SelectedVillages_2);
var lyr_SelectedVillages_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SelectedVillages_2, 
                style: style_SelectedVillages_2,
                popuplayertitle: 'Selected Villages',
                interactive: true,
                title: '<img src="styles/legend/SelectedVillages_2.png" /> Selected Villages'
            });
var format_Range_3 = new ol.format.GeoJSON();
var features_Range_3 = format_Range_3.readFeatures(json_Range_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Range_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Range_3.addFeatures(features_Range_3);
var lyr_Range_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Range_3, 
                style: style_Range_3,
                popuplayertitle: 'Range',
                interactive: true,
    title: 'Range<br />\
    <img src="styles/legend/Range_3_0.png" /> BARIA<br />\
    <img src="styles/legend/Range_3_1.png" /> DHANPUR<br />\
    <img src="styles/legend/Range_3_2.png" /> DOHAD<br />\
    <img src="styles/legend/Range_3_3.png" /> FATEPURA<br />\
    <img src="styles/legend/Range_3_4.png" /> GARBADA<br />\
    <img src="styles/legend/Range_3_5.png" /> LIMKHEDA<br />\
    <img src="styles/legend/Range_3_6.png" /> RAMPURA<br />\
    <img src="styles/legend/Range_3_7.png" /> RANDHIKPUR<br />\
    <img src="styles/legend/Range_3_8.png" /> SAGTALA<br />\
    <img src="styles/legend/Range_3_9.png" /> SANJELI<br />\
    <img src="styles/legend/Range_3_10.png" /> SARJUMI<br />\
    <img src="styles/legend/Range_3_11.png" /> VA.DUNGRI<br />\
    <img src="styles/legend/Range_3_12.png" /> ZALOD<br />\
    <img src="styles/legend/Range_3_13.png" /> <br />' });
var format_Day4_Dir2_4 = new ol.format.GeoJSON();
var features_Day4_Dir2_4 = format_Day4_Dir2_4.readFeatures(json_Day4_Dir2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day4_Dir2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day4_Dir2_4.addFeatures(features_Day4_Dir2_4);
var lyr_Day4_Dir2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day4_Dir2_4, 
                style: style_Day4_Dir2_4,
                popuplayertitle: 'Day4_Dir2',
                interactive: false,
                title: '<img src="styles/legend/Day4_Dir2_4.png" /> Day4_Dir2'
            });
var format_Day4_Dir1_5 = new ol.format.GeoJSON();
var features_Day4_Dir1_5 = format_Day4_Dir1_5.readFeatures(json_Day4_Dir1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day4_Dir1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day4_Dir1_5.addFeatures(features_Day4_Dir1_5);
var lyr_Day4_Dir1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day4_Dir1_5, 
                style: style_Day4_Dir1_5,
                popuplayertitle: 'Day4_Dir1',
                interactive: false,
                title: '<img src="styles/legend/Day4_Dir1_5.png" /> Day4_Dir1'
            });
var format_Day4_Dir2_6 = new ol.format.GeoJSON();
var features_Day4_Dir2_6 = format_Day4_Dir2_6.readFeatures(json_Day4_Dir2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day4_Dir2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day4_Dir2_6.addFeatures(features_Day4_Dir2_6);
var lyr_Day4_Dir2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day4_Dir2_6, 
                style: style_Day4_Dir2_6,
                popuplayertitle: 'Day4_Dir2',
                interactive: false,
                title: '<img src="styles/legend/Day4_Dir2_6.png" /> Day4_Dir2'
            });
var format_Day4_Dir1_7 = new ol.format.GeoJSON();
var features_Day4_Dir1_7 = format_Day4_Dir1_7.readFeatures(json_Day4_Dir1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day4_Dir1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day4_Dir1_7.addFeatures(features_Day4_Dir1_7);
var lyr_Day4_Dir1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day4_Dir1_7, 
                style: style_Day4_Dir1_7,
                popuplayertitle: 'Day4_Dir1',
                interactive: false,
                title: '<img src="styles/legend/Day4_Dir1_7.png" /> Day4_Dir1'
            });
var format_Day3_Dir2_8 = new ol.format.GeoJSON();
var features_Day3_Dir2_8 = format_Day3_Dir2_8.readFeatures(json_Day3_Dir2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day3_Dir2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day3_Dir2_8.addFeatures(features_Day3_Dir2_8);
var lyr_Day3_Dir2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day3_Dir2_8, 
                style: style_Day3_Dir2_8,
                popuplayertitle: 'Day3_Dir2',
                interactive: false,
                title: '<img src="styles/legend/Day3_Dir2_8.png" /> Day3_Dir2'
            });
var format_Day3Dir1_9 = new ol.format.GeoJSON();
var features_Day3Dir1_9 = format_Day3Dir1_9.readFeatures(json_Day3Dir1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day3Dir1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day3Dir1_9.addFeatures(features_Day3Dir1_9);
var lyr_Day3Dir1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day3Dir1_9, 
                style: style_Day3Dir1_9,
                popuplayertitle: 'Day3Dir1',
                interactive: false,
                title: '<img src="styles/legend/Day3Dir1_9.png" /> Day3Dir1'
            });
var format_Day3_Dir2_10 = new ol.format.GeoJSON();
var features_Day3_Dir2_10 = format_Day3_Dir2_10.readFeatures(json_Day3_Dir2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day3_Dir2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day3_Dir2_10.addFeatures(features_Day3_Dir2_10);
var lyr_Day3_Dir2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day3_Dir2_10, 
                style: style_Day3_Dir2_10,
                popuplayertitle: 'Day3_Dir2',
                interactive: false,
                title: '<img src="styles/legend/Day3_Dir2_10.png" /> Day3_Dir2'
            });
var format_Day3Dir1_11 = new ol.format.GeoJSON();
var features_Day3Dir1_11 = format_Day3Dir1_11.readFeatures(json_Day3Dir1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day3Dir1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day3Dir1_11.addFeatures(features_Day3Dir1_11);
var lyr_Day3Dir1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day3Dir1_11, 
                style: style_Day3Dir1_11,
                popuplayertitle: 'Day3Dir1',
                interactive: false,
                title: '<img src="styles/legend/Day3Dir1_11.png" /> Day3Dir1'
            });
var format_Day2_Dir3_12 = new ol.format.GeoJSON();
var features_Day2_Dir3_12 = format_Day2_Dir3_12.readFeatures(json_Day2_Dir3_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day2_Dir3_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day2_Dir3_12.addFeatures(features_Day2_Dir3_12);
var lyr_Day2_Dir3_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day2_Dir3_12, 
                style: style_Day2_Dir3_12,
                popuplayertitle: 'Day2_Dir3',
                interactive: false,
                title: '<img src="styles/legend/Day2_Dir3_12.png" /> Day2_Dir3'
            });
var format_Day2_Dir2_13 = new ol.format.GeoJSON();
var features_Day2_Dir2_13 = format_Day2_Dir2_13.readFeatures(json_Day2_Dir2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day2_Dir2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day2_Dir2_13.addFeatures(features_Day2_Dir2_13);
var lyr_Day2_Dir2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day2_Dir2_13, 
                style: style_Day2_Dir2_13,
                popuplayertitle: 'Day2_Dir2',
                interactive: false,
                title: '<img src="styles/legend/Day2_Dir2_13.png" /> Day2_Dir2'
            });
var format_Day2_Dir1_14 = new ol.format.GeoJSON();
var features_Day2_Dir1_14 = format_Day2_Dir1_14.readFeatures(json_Day2_Dir1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day2_Dir1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day2_Dir1_14.addFeatures(features_Day2_Dir1_14);
var lyr_Day2_Dir1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day2_Dir1_14, 
                style: style_Day2_Dir1_14,
                popuplayertitle: 'Day2_Dir1',
                interactive: false,
                title: '<img src="styles/legend/Day2_Dir1_14.png" /> Day2_Dir1'
            });
var format_Day2_Dir3_15 = new ol.format.GeoJSON();
var features_Day2_Dir3_15 = format_Day2_Dir3_15.readFeatures(json_Day2_Dir3_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day2_Dir3_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day2_Dir3_15.addFeatures(features_Day2_Dir3_15);
var lyr_Day2_Dir3_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day2_Dir3_15, 
                style: style_Day2_Dir3_15,
                popuplayertitle: 'Day2_Dir3',
                interactive: false,
                title: '<img src="styles/legend/Day2_Dir3_15.png" /> Day2_Dir3'
            });
var format_Day2_Dir2_16 = new ol.format.GeoJSON();
var features_Day2_Dir2_16 = format_Day2_Dir2_16.readFeatures(json_Day2_Dir2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day2_Dir2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day2_Dir2_16.addFeatures(features_Day2_Dir2_16);
var lyr_Day2_Dir2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day2_Dir2_16, 
                style: style_Day2_Dir2_16,
                popuplayertitle: 'Day2_Dir2',
                interactive: false,
                title: '<img src="styles/legend/Day2_Dir2_16.png" /> Day2_Dir2'
            });
var format_Day2_Dir1_17 = new ol.format.GeoJSON();
var features_Day2_Dir1_17 = format_Day2_Dir1_17.readFeatures(json_Day2_Dir1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day2_Dir1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day2_Dir1_17.addFeatures(features_Day2_Dir1_17);
var lyr_Day2_Dir1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day2_Dir1_17, 
                style: style_Day2_Dir1_17,
                popuplayertitle: 'Day2_Dir1',
                interactive: false,
                title: '<img src="styles/legend/Day2_Dir1_17.png" /> Day2_Dir1'
            });
var format_Day1_Dir2_18 = new ol.format.GeoJSON();
var features_Day1_Dir2_18 = format_Day1_Dir2_18.readFeatures(json_Day1_Dir2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day1_Dir2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day1_Dir2_18.addFeatures(features_Day1_Dir2_18);
var lyr_Day1_Dir2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day1_Dir2_18, 
                style: style_Day1_Dir2_18,
                popuplayertitle: 'Day1_Dir2',
                interactive: false,
                title: '<img src="styles/legend/Day1_Dir2_18.png" /> Day1_Dir2'
            });
var format_Day1_Dir2_19 = new ol.format.GeoJSON();
var features_Day1_Dir2_19 = format_Day1_Dir2_19.readFeatures(json_Day1_Dir2_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day1_Dir2_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day1_Dir2_19.addFeatures(features_Day1_Dir2_19);
var lyr_Day1_Dir2_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day1_Dir2_19, 
                style: style_Day1_Dir2_19,
                popuplayertitle: 'Day1_Dir2',
                interactive: false,
                title: '<img src="styles/legend/Day1_Dir2_19.png" /> Day1_Dir2'
            });
var format_Day1_Dir11Day1_Dir1_20 = new ol.format.GeoJSON();
var features_Day1_Dir11Day1_Dir1_20 = format_Day1_Dir11Day1_Dir1_20.readFeatures(json_Day1_Dir11Day1_Dir1_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day1_Dir11Day1_Dir1_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day1_Dir11Day1_Dir1_20.addFeatures(features_Day1_Dir11Day1_Dir1_20);
var lyr_Day1_Dir11Day1_Dir1_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day1_Dir11Day1_Dir1_20, 
                style: style_Day1_Dir11Day1_Dir1_20,
                popuplayertitle: 'Day1_Dir1(1) — Day1_Dir1',
                interactive: false,
                title: '<img src="styles/legend/Day1_Dir11Day1_Dir1_20.png" /> Day1_Dir1(1) — Day1_Dir1'
            });
var format_Day1_Dir11Day1_Dir1_21 = new ol.format.GeoJSON();
var features_Day1_Dir11Day1_Dir1_21 = format_Day1_Dir11Day1_Dir1_21.readFeatures(json_Day1_Dir11Day1_Dir1_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day1_Dir11Day1_Dir1_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day1_Dir11Day1_Dir1_21.addFeatures(features_Day1_Dir11Day1_Dir1_21);
var lyr_Day1_Dir11Day1_Dir1_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day1_Dir11Day1_Dir1_21, 
                style: style_Day1_Dir11Day1_Dir1_21,
                popuplayertitle: 'Day1_Dir1(1) — Day1_Dir1',
                interactive: false,
                title: '<img src="styles/legend/Day1_Dir11Day1_Dir1_21.png" /> Day1_Dir1(1) — Day1_Dir1'
            });
var format_FinalPlots_22 = new ol.format.GeoJSON();
var features_FinalPlots_22 = format_FinalPlots_22.readFeatures(json_FinalPlots_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalPlots_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinalPlots_22.addFeatures(features_FinalPlots_22);
var lyr_FinalPlots_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FinalPlots_22, 
                style: style_FinalPlots_22,
                popuplayertitle: 'FinalPlots',
                interactive: true,
                title: '<img src="styles/legend/FinalPlots_22.png" /> FinalPlots'
            });
var group_Day1 = new ol.layer.Group({
                                layers: [lyr_Day1_Dir2_18,lyr_Day1_Dir2_19,lyr_Day1_Dir11Day1_Dir1_20,lyr_Day1_Dir11Day1_Dir1_21,],
                                fold: "open",
                                title: 'Day1'});
var group_Day2 = new ol.layer.Group({
                                layers: [lyr_Day2_Dir3_12,lyr_Day2_Dir2_13,lyr_Day2_Dir1_14,lyr_Day2_Dir3_15,lyr_Day2_Dir2_16,lyr_Day2_Dir1_17,],
                                fold: "open",
                                title: 'Day2'});
var group_Day3 = new ol.layer.Group({
                                layers: [lyr_Day3_Dir2_8,lyr_Day3Dir1_9,lyr_Day3_Dir2_10,lyr_Day3Dir1_11,],
                                fold: "open",
                                title: 'Day3'});
var group_Day4 = new ol.layer.Group({
                                layers: [lyr_Day4_Dir2_4,lyr_Day4_Dir1_5,lyr_Day4_Dir2_6,lyr_Day4_Dir1_7,],
                                fold: "open",
                                title: 'Day4'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_SelectedVillages_2.setVisible(true);lyr_Range_3.setVisible(true);lyr_Day4_Dir2_4.setVisible(true);lyr_Day4_Dir1_5.setVisible(true);lyr_Day4_Dir2_6.setVisible(true);lyr_Day4_Dir1_7.setVisible(true);lyr_Day3_Dir2_8.setVisible(true);lyr_Day3Dir1_9.setVisible(true);lyr_Day3_Dir2_10.setVisible(true);lyr_Day3Dir1_11.setVisible(true);lyr_Day2_Dir3_12.setVisible(true);lyr_Day2_Dir2_13.setVisible(true);lyr_Day2_Dir1_14.setVisible(true);lyr_Day2_Dir3_15.setVisible(true);lyr_Day2_Dir2_16.setVisible(true);lyr_Day2_Dir1_17.setVisible(true);lyr_Day1_Dir2_18.setVisible(true);lyr_Day1_Dir2_19.setVisible(true);lyr_Day1_Dir11Day1_Dir1_20.setVisible(true);lyr_Day1_Dir11Day1_Dir1_21.setVisible(true);lyr_FinalPlots_22.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_SelectedVillages_2,lyr_Range_3,group_Day4,group_Day3,group_Day2,group_Day1,lyr_FinalPlots_22];
lyr_SelectedVillages_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'VNAME': 'VNAME', 'DNAME': 'DNAME', 'TNAME': 'TNAME', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Area_Ha': 'Area_Ha', 'Division': 'Division', 'Dept_Check': 'Dept_Check', 'C2K': 'C2K', 'Forest': 'Forest', 'Circle': 'Circle', 'CIRCLECODE': 'CIRCLECODE', 'DIVCODE': 'DIVCODE', 'RANGECODE': 'RANGECODE', 'ROUNDCODE': 'ROUNDCODE', 'BEATCODE': 'BEATCODE', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', });
lyr_Range_3.set('fieldAliases', {'RANGECODE': 'RANGECODE', 'FIRST_Rang': 'FIRST_Rang', 'FIRST_Divi': 'FIRST_Divi', 'FIRST_Circ': 'FIRST_Circ', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', });
lyr_Day4_Dir2_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day4_Dir1_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day4_Dir2_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day4_Dir1_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day3_Dir2_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day3Dir1_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day3_Dir2_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day3Dir1_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day2_Dir3_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day2_Dir2_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day2_Dir1_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day2_Dir3_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day2_Dir2_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day2_Dir1_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day1_Dir2_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day1_Dir2_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day1_Dir11Day1_Dir1_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Day1_Dir11Day1_Dir1_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FinalPlots_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_SelectedVillages_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'VNAME': 'TextEdit', 'DNAME': 'TextEdit', 'TNAME': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Area_Ha': 'TextEdit', 'Division': 'TextEdit', 'Dept_Check': 'TextEdit', 'C2K': 'TextEdit', 'Forest': 'TextEdit', 'Circle': 'TextEdit', 'CIRCLECODE': 'TextEdit', 'DIVCODE': 'TextEdit', 'RANGECODE': 'TextEdit', 'ROUNDCODE': 'TextEdit', 'BEATCODE': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', });
lyr_Range_3.set('fieldImages', {'RANGECODE': 'TextEdit', 'FIRST_Rang': 'TextEdit', 'FIRST_Divi': 'TextEdit', 'FIRST_Circ': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', });
lyr_Day4_Dir2_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day4_Dir1_5.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day4_Dir2_6.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day4_Dir1_7.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day3_Dir2_8.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day3Dir1_9.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day3_Dir2_10.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day3Dir1_11.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day2_Dir3_12.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day2_Dir2_13.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day2_Dir1_14.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day2_Dir3_15.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day2_Dir2_16.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day2_Dir1_17.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day1_Dir2_18.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day1_Dir2_19.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Day1_Dir11Day1_Dir1_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Day1_Dir11Day1_Dir1_21.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_FinalPlots_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SelectedVillages_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'VNAME': 'inline label - always visible', 'DNAME': 'inline label - always visible', 'TNAME': 'inline label - always visible', 'Range': 'inline label - always visible', 'Round': 'hidden field', 'Beat': 'hidden field', 'Area_Ha': 'inline label - always visible', 'Division': 'hidden field', 'Dept_Check': 'hidden field', 'C2K': 'hidden field', 'Forest': 'hidden field', 'Circle': 'hidden field', 'CIRCLECODE': 'hidden field', 'DIVCODE': 'hidden field', 'RANGECODE': 'hidden field', 'ROUNDCODE': 'hidden field', 'BEATCODE': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', });
lyr_Range_3.set('fieldLabels', {'RANGECODE': 'inline label - always visible', 'FIRST_Rang': 'inline label - always visible', 'FIRST_Divi': 'inline label - always visible', 'FIRST_Circ': 'inline label - always visible', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', });
lyr_Day4_Dir2_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day4_Dir1_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day4_Dir2_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day4_Dir1_7.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day3_Dir2_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day3Dir1_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day3_Dir2_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day3Dir1_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day2_Dir3_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day2_Dir2_13.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day2_Dir1_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day2_Dir3_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day2_Dir2_16.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day2_Dir1_17.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day1_Dir2_18.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day1_Dir2_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day1_Dir11Day1_Dir1_20.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Day1_Dir11Day1_Dir1_21.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FinalPlots_22.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_FinalPlots_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});