var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_EP0072008V_1 = new ol.format.GeoJSON();
var features_EP0072008V_1 = format_EP0072008V_1.readFeatures(json_EP0072008V_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EP0072008V_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EP0072008V_1.addFeatures(features_EP0072008V_1);
var lyr_EP0072008V_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EP0072008V_1, 
                style: style_EP0072008V_1,
                popuplayertitle: "EP-007-2008-V",
                interactive: true,
                title: '<img src="styles/legend/EP0072008V_1.png" /> EP-007-2008-V'
            });
var format_EP0062008V_2 = new ol.format.GeoJSON();
var features_EP0062008V_2 = format_EP0062008V_2.readFeatures(json_EP0062008V_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EP0062008V_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EP0062008V_2.addFeatures(features_EP0062008V_2);
var lyr_EP0062008V_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EP0062008V_2, 
                style: style_EP0062008V_2,
                popuplayertitle: "EP-006-2008-V",
                interactive: true,
                title: '<img src="styles/legend/EP0062008V_2.png" /> EP-006-2008-V'
            });
var format_EXPA000142V_3 = new ol.format.GeoJSON();
var features_EXPA000142V_3 = format_EXPA000142V_3.readFeatures(json_EXPA000142V_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPA000142V_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPA000142V_3.addFeatures(features_EXPA000142V_3);
var lyr_EXPA000142V_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPA000142V_3, 
                style: style_EXPA000142V_3,
                popuplayertitle: "EXPA-000142-V",
                interactive: true,
                title: '<img src="styles/legend/EXPA000142V_3.png" /> EXPA-000142-V'
            });
var format_EXPA000237V_4 = new ol.format.GeoJSON();
var features_EXPA000237V_4 = format_EXPA000237V_4.readFeatures(json_EXPA000237V_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPA000237V_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPA000237V_4.addFeatures(features_EXPA000237V_4);
var lyr_EXPA000237V_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPA000237V_4, 
                style: style_EXPA000237V_4,
                popuplayertitle: "EXPA-000237-V",
                interactive: true,
                title: '<img src="styles/legend/EXPA000237V_4.png" /> EXPA-000237-V'
            });
var format_EXPA000102VA_5 = new ol.format.GeoJSON();
var features_EXPA000102VA_5 = format_EXPA000102VA_5.readFeatures(json_EXPA000102VA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPA000102VA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPA000102VA_5.addFeatures(features_EXPA000102VA_5);
var lyr_EXPA000102VA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPA000102VA_5, 
                style: style_EXPA000102VA_5,
                popuplayertitle: "EXPA-000102-V-A",
                interactive: true,
                title: '<img src="styles/legend/EXPA000102VA_5.png" /> EXPA-000102-V-A'
            });
var format_EXPA000236V_6 = new ol.format.GeoJSON();
var features_EXPA000236V_6 = format_EXPA000236V_6.readFeatures(json_EXPA000236V_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPA000236V_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPA000236V_6.addFeatures(features_EXPA000236V_6);
var lyr_EXPA000236V_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPA000236V_6, 
                style: style_EXPA000236V_6,
                popuplayertitle: "EXPA-000236-V",
                interactive: true,
                title: '<img src="styles/legend/EXPA000236V_6.png" /> EXPA-000236-V'
            });
var format_EXPA0030CAR_7 = new ol.format.GeoJSON();
var features_EXPA0030CAR_7 = format_EXPA0030CAR_7.readFeatures(json_EXPA0030CAR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPA0030CAR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPA0030CAR_7.addFeatures(features_EXPA0030CAR_7);
var lyr_EXPA0030CAR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPA0030CAR_7, 
                style: style_EXPA0030CAR_7,
                popuplayertitle: "EXPA-0030-CAR",
                interactive: true,
                title: '<img src="styles/legend/EXPA0030CAR_7.png" /> EXPA-0030-CAR'
            });
var format_MPSA1522000CAR_8 = new ol.format.GeoJSON();
var features_MPSA1522000CAR_8 = format_MPSA1522000CAR_8.readFeatures(json_MPSA1522000CAR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MPSA1522000CAR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MPSA1522000CAR_8.addFeatures(features_MPSA1522000CAR_8);
var lyr_MPSA1522000CAR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MPSA1522000CAR_8, 
                style: style_MPSA1522000CAR_8,
                popuplayertitle: "MPSA-152-2000-CAR",
                interactive: true,
                title: '<img src="styles/legend/MPSA1522000CAR_8.png" /> MPSA-152-2000-CAR'
            });
var format_EXPA0031CAR_9 = new ol.format.GeoJSON();
var features_EXPA0031CAR_9 = format_EXPA0031CAR_9.readFeatures(json_EXPA0031CAR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPA0031CAR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPA0031CAR_9.addFeatures(features_EXPA0031CAR_9);
var lyr_EXPA0031CAR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPA0031CAR_9, 
                style: style_EXPA0031CAR_9,
                popuplayertitle: "EXPA-0031-CAR",
                interactive: true,
                title: '<img src="styles/legend/EXPA0031CAR_9.png" /> EXPA-0031-CAR'
            });
var format_APSA0067CAR_10 = new ol.format.GeoJSON();
var features_APSA0067CAR_10 = format_APSA0067CAR_10.readFeatures(json_APSA0067CAR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSA0067CAR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSA0067CAR_10.addFeatures(features_APSA0067CAR_10);
var lyr_APSA0067CAR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APSA0067CAR_10, 
                style: style_APSA0067CAR_10,
                popuplayertitle: "APSA-0067-CAR",
                interactive: true,
                title: '<img src="styles/legend/APSA0067CAR_10.png" /> APSA-0067-CAR'
            });
var format_APSA00103CAR_11 = new ol.format.GeoJSON();
var features_APSA00103CAR_11 = format_APSA00103CAR_11.readFeatures(json_APSA00103CAR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSA00103CAR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSA00103CAR_11.addFeatures(features_APSA00103CAR_11);
var lyr_APSA00103CAR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APSA00103CAR_11, 
                style: style_APSA00103CAR_11,
                popuplayertitle: "APSA-00103-CAR",
                interactive: true,
                title: '<img src="styles/legend/APSA00103CAR_11.png" /> APSA-00103-CAR'
            });
var format_PatentedClaims_12 = new ol.format.GeoJSON();
var features_PatentedClaims_12 = format_PatentedClaims_12.readFeatures(json_PatentedClaims_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatentedClaims_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PatentedClaims_12.addFeatures(features_PatentedClaims_12);
var lyr_PatentedClaims_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PatentedClaims_12, 
                style: style_PatentedClaims_12,
                popuplayertitle: "Patented Claims",
                interactive: true,
                title: '<img src="styles/legend/PatentedClaims_12.png" /> Patented Claims'
            });
var format_EXPA000276XI_13 = new ol.format.GeoJSON();
var features_EXPA000276XI_13 = format_EXPA000276XI_13.readFeatures(json_EXPA000276XI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPA000276XI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPA000276XI_13.addFeatures(features_EXPA000276XI_13);
var lyr_EXPA000276XI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPA000276XI_13, 
                style: style_EXPA000276XI_13,
                popuplayertitle: "EXPA-000276-XI",
                interactive: true,
                title: '<img src="styles/legend/EXPA000276XI_13.png" /> EXPA-000276-XI'
            });
var format_EXPA000275XI_14 = new ol.format.GeoJSON();
var features_EXPA000275XI_14 = format_EXPA000275XI_14.readFeatures(json_EXPA000275XI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPA000275XI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPA000275XI_14.addFeatures(features_EXPA000275XI_14);
var lyr_EXPA000275XI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPA000275XI_14, 
                style: style_EXPA000275XI_14,
                popuplayertitle: "EXPA-000275-XI",
                interactive: true,
                title: '<img src="styles/legend/EXPA000275XI_14.png" /> EXPA-000275-XI'
            });
var format_MPSA2342007XI_15 = new ol.format.GeoJSON();
var features_MPSA2342007XI_15 = format_MPSA2342007XI_15.readFeatures(json_MPSA2342007XI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MPSA2342007XI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MPSA2342007XI_15.addFeatures(features_MPSA2342007XI_15);
var lyr_MPSA2342007XI_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MPSA2342007XI_15, 
                style: style_MPSA2342007XI_15,
                popuplayertitle: "MPSA-234-2007-XI",
                interactive: true,
                title: '<img src="styles/legend/MPSA2342007XI_15.png" /> MPSA-234-2007-XI'
            });
var format_MPSA2252005XIAmended_16 = new ol.format.GeoJSON();
var features_MPSA2252005XIAmended_16 = format_MPSA2252005XIAmended_16.readFeatures(json_MPSA2252005XIAmended_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MPSA2252005XIAmended_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MPSA2252005XIAmended_16.addFeatures(features_MPSA2252005XIAmended_16);
var lyr_MPSA2252005XIAmended_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MPSA2252005XIAmended_16, 
                style: style_MPSA2252005XIAmended_16,
                popuplayertitle: "MPSA-225-2005-XI (Amended)",
                interactive: true,
                title: '<img src="styles/legend/MPSA2252005XIAmended_16.png" /> MPSA-225-2005-XI (Amended)'
            });
var format_AFTA000014XI_17 = new ol.format.GeoJSON();
var features_AFTA000014XI_17 = format_AFTA000014XI_17.readFeatures(json_AFTA000014XI_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFTA000014XI_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFTA000014XI_17.addFeatures(features_AFTA000014XI_17);
var lyr_AFTA000014XI_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AFTA000014XI_17, 
                style: style_AFTA000014XI_17,
                popuplayertitle: "AFTA-000014-XI",
                interactive: true,
                title: '<img src="styles/legend/AFTA000014XI_17.png" /> AFTA-000014-XI'
            });
var format_AMCIMineDistrcts_18 = new ol.format.GeoJSON();
var features_AMCIMineDistrcts_18 = format_AMCIMineDistrcts_18.readFeatures(json_AMCIMineDistrcts_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMCIMineDistrcts_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMCIMineDistrcts_18.addFeatures(features_AMCIMineDistrcts_18);
var lyr_AMCIMineDistrcts_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMCIMineDistrcts_18, 
                style: style_AMCIMineDistrcts_18,
                popuplayertitle: "AMCI Mine Distrcts",
                interactive: true,
                title: '<img src="styles/legend/AMCIMineDistrcts_18.png" /> AMCI Mine Distrcts'
            });
var group_OverviewFeatures = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Overview Features"});
var group_Miscellaneous = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Miscellaneous"});
var group_AMCIAssets = new ol.layer.Group({
                                layers: [lyr_AMCIMineDistrcts_18,],
                                fold: "open",
                                title: "AMCI Assets"});
var group_AMCINorthDavao = new ol.layer.Group({
                                layers: [lyr_AFTA000014XI_17,],
                                fold: "open",
                                title: "AMCI - North Davao"});
var group_AMCIMaco = new ol.layer.Group({
                                layers: [lyr_EXPA000276XI_13,lyr_EXPA000275XI_14,lyr_MPSA2342007XI_15,lyr_MPSA2252005XIAmended_16,],
                                fold: "open",
                                title: "AMCI - Maco"});
var group_ISRISangilo = new ol.layer.Group({
                                layers: [lyr_EXPA0031CAR_9,lyr_APSA0067CAR_10,lyr_APSA00103CAR_11,lyr_PatentedClaims_12,],
                                fold: "open",
                                title: "ISRI - Sangilo"});
var group_ISRISuyoc = new ol.layer.Group({
                                layers: [lyr_EXPA0030CAR_7,lyr_MPSA1522000CAR_8,],
                                fold: "open",
                                title: "ISRI - Suyoc"});
var group_ISRIBenit = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ISRI - Benit"});
var group_PGLJosePanganiban = new ol.layer.Group({
                                layers: [lyr_EP0072008V_1,lyr_EP0062008V_2,lyr_EXPA000142V_3,lyr_EXPA000237V_4,lyr_EXPA000102VA_5,lyr_EXPA000236V_6,],
                                fold: "open",
                                title: "PGL -  Jose Panganiban"});
var group_TadyProjectSusieBTady = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Tad-y Project (Susie B. Tad-y)"});
var group_CapizGoldProjectTeresaMarbleCorporation = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Capiz Gold Project (Teresa Marble Corporation)"});
var group_SagayCopperGoldProjectCelciusResourcesLimited = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Sagay Copper Gold Project (Celcius Resources Limited)"});
var group_ManatGoldProjectACRMiningCorporation = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Manat Gold Project (ACR Mining Corporation)"});
var group_BanaybanayNickelProjectZetosaMineralResourcesCorproation = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Banaybanay Nickel Project (Zetosa Mineral Resources Corproation)"});
var group_ERTProjectsERTHoldingsIncorporated = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ERT Projects (ERT Holdings Incorporated)"});
var group_KingkingCopperGoldProjectKingkingMiningCorporation = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Kingking Copper Gold Project (Kingking Mining Corporation)"});
var group_NiokaCopperCobaltProjectCompagnieMinieredeTondoSAS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nioka Copper Cobalt Project (Compagnie Miniere de Tondo SAS)"});
var group_ZaniKodoGoldProjectAMIRCMiningSARL = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Zani Kodo Gold Project (AMIRC Mining SARL)"});
var group_TownsvilleGoldProjectOkTediMiningLimited = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Townsville Gold Project (Ok Tedi Mining Limited)"});
var group_BoeraAggregatesProjectSaltBakerLimited = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Boera Aggregates Project {Salt Baker Limited}"});
var group_BoeraLimestoneProjectSaltBakerLimited = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Boera Limestone Project {Salt Baker Limited}"});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "Base Maps"});

lyr_GoogleSatellite_0.setVisible(true);lyr_EP0072008V_1.setVisible(true);lyr_EP0062008V_2.setVisible(true);lyr_EXPA000142V_3.setVisible(true);lyr_EXPA000237V_4.setVisible(true);lyr_EXPA000102VA_5.setVisible(true);lyr_EXPA000236V_6.setVisible(true);lyr_EXPA0030CAR_7.setVisible(true);lyr_MPSA1522000CAR_8.setVisible(true);lyr_EXPA0031CAR_9.setVisible(true);lyr_APSA0067CAR_10.setVisible(true);lyr_APSA00103CAR_11.setVisible(true);lyr_PatentedClaims_12.setVisible(true);lyr_EXPA000276XI_13.setVisible(true);lyr_EXPA000275XI_14.setVisible(true);lyr_MPSA2342007XI_15.setVisible(true);lyr_MPSA2252005XIAmended_16.setVisible(true);lyr_AFTA000014XI_17.setVisible(true);lyr_AMCIMineDistrcts_18.setVisible(true);
var layersList = [group_BaseMaps,group_PGLJosePanganiban,group_ISRISuyoc,group_ISRISangilo,group_AMCIMaco,group_AMCINorthDavao,group_AMCIAssets];
lyr_EP0072008V_1.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', '1st Start': '1st Start', '1st End': '1st End', '2nd Start': '2nd Start', '2nd End': '2nd End', });
lyr_EP0062008V_2.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', '1st Start': '1st Start', '1st End': '1st End', '2nd Start': '2nd Start', '2nd End': '2nd End', });
lyr_EXPA000142V_3.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_EXPA000237V_4.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_EXPA000102VA_5.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_EXPA000236V_6.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_EXPA0030CAR_7.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_MPSA1522000CAR_8.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', '1st Start': '1st Start', '1st End': '1st End', });
lyr_EXPA0031CAR_9.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_APSA0067CAR_10.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_APSA00103CAR_11.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_PatentedClaims_12.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Approved': 'Approved', 'Name': 'Name', });
lyr_EXPA000276XI_13.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_EXPA000275XI_14.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_MPSA2342007XI_15.set('fieldAliases', {'TENEMENT': 'TENEMENT', 'CLAIMANT': 'CLAIMANT', 'AREA': 'AREA', 'COMMODITY': 'COMMODITY', });
lyr_MPSA2252005XIAmended_16.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', });
lyr_AFTA000014XI_17.set('fieldAliases', {'Tenement': 'Tenement', 'Claimant': 'Claimant', 'Area': 'Area', 'Commodity': 'Commodity', 'Date Filed': 'Date Filed', 'Status': 'Status', });
lyr_AMCIMineDistrcts_18.set('fieldAliases', {'NAME': 'NAME', });
lyr_EP0072008V_1.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', '1st Start': 'TextEdit', '1st End': 'TextEdit', '2nd Start': 'TextEdit', '2nd End': 'TextEdit', });
lyr_EP0062008V_2.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', '1st Start': 'TextEdit', '1st End': 'TextEdit', '2nd Start': 'TextEdit', '2nd End': 'TextEdit', });
lyr_EXPA000142V_3.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_EXPA000237V_4.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_EXPA000102VA_5.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_EXPA000236V_6.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_EXPA0030CAR_7.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_MPSA1522000CAR_8.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', '1st Start': 'TextEdit', '1st End': 'TextEdit', });
lyr_EXPA0031CAR_9.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_APSA0067CAR_10.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_APSA00103CAR_11.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_PatentedClaims_12.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Approved': 'TextEdit', 'Name': 'TextEdit', });
lyr_EXPA000276XI_13.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_EXPA000275XI_14.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_MPSA2342007XI_15.set('fieldImages', {'TENEMENT': '', 'CLAIMANT': '', 'AREA': '', 'COMMODITY': '', });
lyr_MPSA2252005XIAmended_16.set('fieldImages', {'Tenement': '', 'Claimant': '', 'Area': '', 'Commodity': '', });
lyr_AFTA000014XI_17.set('fieldImages', {'Tenement': 'TextEdit', 'Claimant': 'TextEdit', 'Area': 'TextEdit', 'Commodity': 'TextEdit', 'Date Filed': 'TextEdit', 'Status': 'TextEdit', });
lyr_AMCIMineDistrcts_18.set('fieldImages', {'NAME': 'TextEdit', });
lyr_EP0072008V_1.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', '1st Start': 'no label', '1st End': 'no label', '2nd Start': 'no label', '2nd End': 'no label', });
lyr_EP0062008V_2.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', '1st Start': 'no label', '1st End': 'no label', '2nd Start': 'no label', '2nd End': 'no label', });
lyr_EXPA000142V_3.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_EXPA000237V_4.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_EXPA000102VA_5.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_EXPA000236V_6.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_EXPA0030CAR_7.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_MPSA1522000CAR_8.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', '1st Start': 'no label', '1st End': 'no label', });
lyr_EXPA0031CAR_9.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_APSA0067CAR_10.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_APSA00103CAR_11.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_PatentedClaims_12.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Approved': 'no label', 'Name': 'no label', });
lyr_EXPA000276XI_13.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_EXPA000275XI_14.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_MPSA2342007XI_15.set('fieldLabels', {'MPSA_234_P': 'no label', });
lyr_MPSA2252005XIAmended_16.set('fieldLabels', {'MPSA_225_2': 'no label', });
lyr_AFTA000014XI_17.set('fieldLabels', {'Tenement': 'no label', 'Claimant': 'no label', 'Area': 'no label', 'Commodity': 'no label', 'Date Filed': 'no label', 'Status': 'no label', });
lyr_AMCIMineDistrcts_18.set('fieldLabels', {'NAME': 'inline label - always visible', });
lyr_AMCIMineDistrcts_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});