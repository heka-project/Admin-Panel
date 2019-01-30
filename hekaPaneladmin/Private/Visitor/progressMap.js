
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW15bGltMjAiLCJhIjoiY2pvZmV2bmZ5MDNlczNrcnd4MG01eWlvaiJ9.nMECkK0lxC4K6n9QNBVL_A';
        var map = new mapboxgl.Map({
        container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [103.8198, 1.3521],
    zoom: 11
});

        map.on('load', function () {

        map.addSource('heatmapdata', {
            type: 'geojson',
            data: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8952478, 1.30325847]
                        },
                        "properties": {
                            "ID": 1,
                            "quantity": 69,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8175967, 1.35710526]
                        },
                        "properties": {
                            "ID": 2,
                            "quantity": 39,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8292835, 1.26775704]
                        },
                        "properties": {
                            "ID": 3,
                            "quantity": 78,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7414904, 1.32907157]
                        },
                        "properties": {
                            "ID": 4,
                            "quantity": 94,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8867075, 1.39866072]
                        },
                        "properties": {
                            "ID": 5,
                            "quantity": 60,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8112465, 1.42164663]
                        },
                        "properties": {
                            "ID": 6,
                            "quantity": 99,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.800258, 1.34457605]
                        },
                        "properties": {
                            "ID": 7,
                            "quantity": 43,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.780043, 1.39523442]
                        },
                        "properties": {
                            "ID": 8,
                            "quantity": 70,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8524365, 1.30669779]
                        },
                        "properties": {
                            "ID": 9,
                            "quantity": 1,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8045974, 1.27040349]
                        },
                        "properties": {
                            "ID": 10,
                            "quantity": 39,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7608555, 1.33945678]
                        },
                        "properties": {
                            "ID": 11,
                            "quantity": 91,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8440894, 1.38455146]
                        },
                        "properties": {
                            "ID": 12,
                            "quantity": 67,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7543194, 1.35377237]
                        },
                        "properties": {
                            "ID": 13,
                            "quantity": 13,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8067406, 1.34813224]
                        },
                        "properties": {
                            "ID": 14,
                            "quantity": 82,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8671465, 1.29833487]
                        },
                        "properties": {
                            "ID": 15,
                            "quantity": 78,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8629494, 1.36305797]
                        },
                        "properties": {
                            "ID": 16,
                            "quantity": 49,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.988, 1.3571559]
                        },
                        "properties": {
                            "ID": 17,
                            "quantity": 92,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9274, 1.3051144]
                        },
                        "properties": {
                            "ID": 18,
                            "quantity": 6,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7215459, 1.30132387]
                        },
                        "properties": {
                            "ID": 19,
                            "quantity": 7,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8515866, 1.44390026]
                        },
                        "properties": {
                            "ID": 20,
                            "quantity": 52,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.939, 1.326309]
                        },
                        "properties": {
                            "ID": 21,
                            "quantity": 78,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.95422, 1.3346394]
                        },
                        "properties": {
                            "ID": 22,
                            "quantity": 94,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7113478, 1.34119905]
                        },
                        "properties": {
                            "ID": 23,
                            "quantity": 27,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7839476, 1.29037542]
                        },
                        "properties": {
                            "ID": 24,
                            "quantity": 55,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8942269, 1.40908118]
                        },
                        "properties": {
                            "ID": 25,
                            "quantity": 21,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7889904, 1.33509223]
                        },
                        "properties": {
                            "ID": 26,
                            "quantity": 81,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8385404, 1.27911198]
                        },
                        "properties": {
                            "ID": 27,
                            "quantity": 89,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.946434, 1.3833061]
                        },
                        "properties": {
                            "ID": 28,
                            "quantity": 85,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7808336, 1.31325871]
                        },
                        "properties": {
                            "ID": 29,
                            "quantity": 43,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6990492, 1.30681727]
                        },
                        "properties": {
                            "ID": 30,
                            "quantity": 86,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8867558, 1.41088342]
                        },
                        "properties": {
                            "ID": 31,
                            "quantity": 7,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8006638, 1.43827414]
                        },
                        "properties": {
                            "ID": 32,
                            "quantity": 27,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7277412, 1.37133896]
                        },
                        "properties": {
                            "ID": 33,
                            "quantity": 88,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8976182, 1.3240084]
                        },
                        "properties": {
                            "ID": 34,
                            "quantity": 45,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9280962, 1.34641008]
                        },
                        "properties": {
                            "ID": 35,
                            "quantity": 11,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8351096, 1.4029606]
                        },
                        "properties": {
                            "ID": 36,
                            "quantity": 64,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8814351, 1.40828261]
                        },
                        "properties": {
                            "ID": 37,
                            "quantity": 73,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7347046, 1.43756655]
                        },
                        "properties": {
                            "ID": 38,
                            "quantity": 58,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.89869, 1.3863522]
                        },
                        "properties": {
                            "ID": 39,
                            "quantity": 46,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8469476, 1.28234547]
                        },
                        "properties": {
                            "ID": 40,
                            "quantity": 88,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7265647, 1.37355614]
                        },
                        "properties": {
                            "ID": 41,
                            "quantity": 12,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9341848, 1.33124494]
                        },
                        "properties": {
                            "ID": 42,
                            "quantity": 69,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8874427, 1.39565892]
                        },
                        "properties": {
                            "ID": 43,
                            "quantity": 81,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7249963, 1.42837877]
                        },
                        "properties": {
                            "ID": 44,
                            "quantity": 73,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7811103, 1.27770695]
                        },
                        "properties": {
                            "ID": 45,
                            "quantity": 94,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7060928, 1.3463923]
                        },
                        "properties": {
                            "ID": 46,
                            "quantity": 62,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6645425, 1.337426]
                        },
                        "properties": {
                            "ID": 47,
                            "quantity": 27,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.883641, 1.385911]
                        },
                        "properties": {
                            "ID": 48,
                            "quantity": 69,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8294731, 1.36809047]
                        },
                        "properties": {
                            "ID": 49,
                            "quantity": 53,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8633627, 1.31047417]
                        },
                        "properties": {
                            "ID": 50,
                            "quantity": 85,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7627707, 1.31932961]
                        },
                        "properties": {
                            "ID": 51,
                            "quantity": 90,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8293394, 1.40227299]
                        },
                        "properties": {
                            "ID": 52,
                            "quantity": 34,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.938398, 1.33754754]
                        },
                        "properties": {
                            "ID": 53,
                            "quantity": 36,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7510202, 1.40865659]
                        },
                        "properties": {
                            "ID": 54,
                            "quantity": 21,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9055209, 1.30004318]
                        },
                        "properties": {
                            "ID": 55,
                            "quantity": 55,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7577245, 1.35526132]
                        },
                        "properties": {
                            "ID": 56,
                            "quantity": 31,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7455296, 1.35654902]
                        },
                        "properties": {
                            "ID": 57,
                            "quantity": 83,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8249342, 1.26689119]
                        },
                        "properties": {
                            "ID": 58,
                            "quantity": 36,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8029515, 1.4528664]
                        },
                        "properties": {
                            "ID": 59,
                            "quantity": 78,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6908871, 1.34097959]
                        },
                        "properties": {
                            "ID": 60,
                            "quantity": 16,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.750427, 1.3079068]
                        },
                        "properties": {
                            "ID": 61,
                            "quantity": 71,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6903889, 1.35070137]
                        },
                        "properties": {
                            "ID": 62,
                            "quantity": 27,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.789266, 1.32757148]
                        },
                        "properties": {
                            "ID": 63,
                            "quantity": 10,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7411252, 1.31613844]
                        },
                        "properties": {
                            "ID": 64,
                            "quantity": 29,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7220222, 1.3857295]
                        },
                        "properties": {
                            "ID": 65,
                            "quantity": 83,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7364669, 1.4391981]
                        },
                        "properties": {
                            "ID": 66,
                            "quantity": 98,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7898722, 1.31922879]
                        },
                        "properties": {
                            "ID": 67,
                            "quantity": 22,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8616703, 1.36151667]
                        },
                        "properties": {
                            "ID": 68,
                            "quantity": 28,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7480855, 1.44071506]
                        },
                        "properties": {
                            "ID": 69,
                            "quantity": 79,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8239236, 1.41250479]
                        },
                        "properties": {
                            "ID": 70,
                            "quantity": 2,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7479828, 1.35254573]
                        },
                        "properties": {
                            "ID": 71,
                            "quantity": 60,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8333391, 1.35526132]
                        },
                        "properties": {
                            "ID": 72,
                            "quantity": 74,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7054404, 1.35654902]
                        },
                        "properties": {
                            "ID": 73,
                            "quantity": 84,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7184888, 1.33482264]
                        },
                        "properties": {
                            "ID": 74,
                            "quantity": 12,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9311984, 1.32450044]
                        },
                        "properties": {
                            "ID": 75,
                            "quantity": 69,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7921653, 1.35254573]
                        },
                        "properties": {
                            "ID": 76,
                            "quantity": 10,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9304627, 1.33482264]
                        },
                        "properties": {
                            "ID": 77,
                            "quantity": 58,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7414553, 1.32450044]
                        },
                        "properties": {
                            "ID": 78,
                            "quantity": 86,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7885778, 1.33470089]
                        },
                        "properties": {
                            "ID": 79,
                            "quantity": 50,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7941419, 1.32830495]
                        },
                        "properties": {
                            "ID": 80,
                            "quantity": 74,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9006003, 1.33470089]
                        },
                        "properties": {
                            "ID": 81,
                            "quantity": 93,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7736691, 1.33175176]
                        },
                        "properties": {
                            "ID": 82,
                            "quantity": 83,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7306758, 1.29671681]
                        },
                        "properties": {
                            "ID": 83,
                            "quantity": 64,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8321515, 1.29606117]
                        },
                        "properties": {
                            "ID": 84,
                            "quantity": 52,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7052395, 1.30194177]
                        },
                        "properties": {
                            "ID": 85,
                            "quantity": 11,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7070331, 1.29052765]
                        },
                        "properties": {
                            "ID": 86,
                            "quantity": 79,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7826004, 1.27604719]
                        },
                        "properties": {
                            "ID": 87,
                            "quantity": 18,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8031628, 1.46714472]
                        },
                        "properties": {
                            "ID": 88,
                            "quantity": 54,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7385934, 1.36958409]
                        },
                        "properties": {
                            "ID": 89,
                            "quantity": 66,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9589674, 1.32830495]
                        },
                        "properties": {
                            "ID": 90,
                            "quantity": 50,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9154258, 1.37848182]
                        },
                        "properties": {
                            "ID": 91,
                            "quantity": 6,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7666897, 1.43006835]
                        },
                        "properties": {
                            "ID": 92,
                            "quantity": 3,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8506735, 1.37928564]
                        },
                        "properties": {
                            "ID": 93,
                            "quantity": 53,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8719679, 1.29262881]
                        },
                        "properties": {
                            "ID": 94,
                            "quantity": 94,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9149904, 1.31575857]
                        },
                        "properties": {
                            "ID": 95,
                            "quantity": 10,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9424124, 1.33175176]
                        },
                        "properties": {
                            "ID": 96,
                            "quantity": 61,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.698284, 1.33506895]
                        },
                        "properties": {
                            "ID": 97,
                            "quantity": 22,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8613761, 1.41297538]
                        },
                        "properties": {
                            "ID": 98,
                            "quantity": 3,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7920248, 1.37044849]
                        },
                        "properties": {
                            "ID": 99,
                            "quantity": 6,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7777123, 1.372834]
                        },
                        "properties": {
                            "ID": 100,
                            "quantity": 20,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7503842, 1.32165435]
                        },
                        "properties": {
                            "ID": 101,
                            "quantity": 24,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9068994, 1.29606117]
                        },
                        "properties": {
                            "ID": 102,
                            "quantity": 22,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8363308, 1.280753]
                        },
                        "properties": {
                            "ID": 103,
                            "quantity": 11,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7220115, 1.41633231]
                        },
                        "properties": {
                            "ID": 104,
                            "quantity": 38,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6620625, 1.36446055]
                        },
                        "properties": {
                            "ID": 105,
                            "quantity": 52,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6566197, 1.34732798]
                        },
                        "properties": {
                            "ID": 106,
                            "quantity": 64,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8597317, 1.39707781]
                        },
                        "properties": {
                            "ID": 107,
                            "quantity": 32,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8230612, 1.38862975]
                        },
                        "properties": {
                            "ID": 108,
                            "quantity": 37,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7001748, 1.31814637]
                        },
                        "properties": {
                            "ID": 109,
                            "quantity": 8,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7341638, 1.34970436]
                        },
                        "properties": {
                            "ID": 110,
                            "quantity": 71,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7742845, 1.3837666]
                        },
                        "properties": {
                            "ID": 111,
                            "quantity": 32,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7203051, 1.35737488]
                        },
                        "properties": {
                            "ID": 112,
                            "quantity": 17,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7494791, 1.3227225]
                        },
                        "properties": {
                            "ID": 113,
                            "quantity": 41,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7921572, 1.34724847]
                        },
                        "properties": {
                            "ID": 114,
                            "quantity": 87,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7192922, 1.3287139]
                        },
                        "properties": {
                            "ID": 115,
                            "quantity": 89,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6879999, 1.34082158]
                        },
                        "properties": {
                            "ID": 116,
                            "quantity": 88,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7345876, 1.4261175]
                        },
                        "properties": {
                            "ID": 117,
                            "quantity": 98,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7291753, 1.33524363]
                        },
                        "properties": {
                            "ID": 118,
                            "quantity": 14,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6907616, 1.32856629]
                        },
                        "properties": {
                            "ID": 119,
                            "quantity": 95,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7726884, 1.34725342]
                        },
                        "properties": {
                            "ID": 120,
                            "quantity": 84,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8023925, 1.41057164]
                        },
                        "properties": {
                            "ID": 121,
                            "quantity": 50,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7772642, 1.29193005]
                        },
                        "properties": {
                            "ID": 122,
                            "quantity": 41,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6954502, 1.34946946]
                        },
                        "properties": {
                            "ID": 123,
                            "quantity": 83,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8618375, 1.28300906]
                        },
                        "properties": {
                            "ID": 124,
                            "quantity": 29,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9002523, 1.30466142]
                        },
                        "properties": {
                            "ID": 125,
                            "quantity": 48,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.73021, 1.41243642]
                        },
                        "properties": {
                            "ID": 126,
                            "quantity": 89,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8483821, 1.3466172]
                        },
                        "properties": {
                            "ID": 127,
                            "quantity": 80,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8448768, 1.26743645]
                        },
                        "properties": {
                            "ID": 128,
                            "quantity": 1,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9348644, 1.3356307]
                        },
                        "properties": {
                            "ID": 129,
                            "quantity": 70,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6894206, 1.35405258]
                        },
                        "properties": {
                            "ID": 130,
                            "quantity": 66,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7201614, 1.3514805]
                        },
                        "properties": {
                            "ID": 131,
                            "quantity": 31,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.8059921, 1.44940651]
                        },
                        "properties": {
                            "ID": 132,
                            "quantity": 15,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7203396, 1.32691027]
                        },
                        "properties": {
                            "ID": 133,
                            "quantity": 76,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6983502, 1.35641266]
                        },
                        "properties": {
                            "ID": 134,
                            "quantity": 88,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6747294, 1.36139916]
                        },
                        "properties": {
                            "ID": 135,
                            "quantity": 45,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6646591, 1.34430722]
                        },
                        "properties": {
                            "ID": 136,
                            "quantity": 63,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.695045, 1.35060285]
                        },
                        "properties": {
                            "ID": 137,
                            "quantity": 99,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6861665, 1.37175172]
                        },
                        "properties": {
                            "ID": 138,
                            "quantity": 32,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6856521, 1.32202395]
                        },
                        "properties": {
                            "ID": 139,
                            "quantity": 81,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.6327613, 1.30429064]
                        },
                        "properties": {
                            "ID": 140,
                            "quantity": 62,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.634531, 1.31206644]
                        },
                        "properties": {
                            "ID": 141,
                            "quantity": 33,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.647955, 1.28450676]
                        },
                        "properties": {
                            "ID": 142,
                            "quantity": 95,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9895105, 1.33834365]
                        },
                        "properties": {
                            "ID": 143,
                            "quantity": 20,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9637008, 1.35132932]
                        },
                        "properties": {
                            "ID": 144,
                            "quantity": 7,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9692968, 1.35135971]
                        },
                        "properties": {
                            "ID": 145,
                            "quantity": 66,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9875802, 1.36046101]
                        },
                        "properties": {
                            "ID": 146,
                            "quantity": 43,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9852832, 1.36299646]
                        },
                        "properties": {
                            "ID": 147,
                            "quantity": 33,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9967581, 1.32871854]
                        },
                        "properties": {
                            "ID": 148,
                            "quantity": 95,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9627198, 1.35293707]
                        },
                        "properties": {
                            "ID": 149,
                            "quantity": 24,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9869927, 1.31838616]
                        },
                        "properties": {
                            "ID": 150,
                            "quantity": 38,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9647809, 1.33581791]
                        },
                        "properties": {
                            "ID": 151,
                            "quantity": 59,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [104.0048933, 1.35180535]
                        },
                        "properties": {
                            "ID": 152,
                            "quantity": 84,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9728079, 1.32154637]
                        },
                        "properties": {
                            "ID": 153,
                            "quantity": 7,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9502068, 1.37035221]
                        },
                        "properties": {
                            "ID": 154,
                            "quantity": 54,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9430347, 1.38210682]
                        },
                        "properties": {
                            "ID": 155,
                            "quantity": 3,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.9412406, 1.38359719]
                        },
                        "properties": {
                            "ID": 156,
                            "quantity": 27,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.766647, 1.37198087]
                        },
                        "properties": {
                            "ID": 157,
                            "quantity": 50,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7635187, 1.36062047]
                        },
                        "properties": {
                            "ID": 158,
                            "quantity": 11,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7766695, 1.36074129]
                        },
                        "properties": {
                            "ID": 159,
                            "quantity": 34,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7485697, 1.35143845]
                        },
                        "properties": {
                            "ID": 160,
                            "quantity": 70,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7703452, 1.34722322]
                        },
                        "properties": {
                            "ID": 161,
                            "quantity": 43,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [103.7586766, 1.3575562]
                        },
                        "properties": {
                            "ID": 162,
                            "quantity": 84,
                            "status": "yes",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": {}
                        },
                        "properties": {
                            "ID": null,
                            "quantity": null,
                            "status": "",
                            "FIELD6": "",
                            "FIELD7": ""
                        }
                    }
                ]
            }
        });

    map.addLayer({
        id: 'heatmapdata-point',
    type: 'circle',
    source: 'heatmapdata',
    minzoom: 14,
    filter: ["==", "status", "yes"],
                paint: {
        'circle-radius': {
        type: 'exponential',
    stops: [
        [15, 10],
        [23, 20],
    ]
},
'circle-color': "rgb(0,133,204)",
'circle-stroke-color': 'white',
'circle-stroke-width': 1,
                    'circle-opacity': {
        stops: [
        [15, 0],
        [16, 1]
    ]
}
}
}, 'waterway-label');

            map.addLayer({
        id: 'heatmapdata-heat',
    type: 'heatmap',
    source: 'heatmapdata',
    maxzoom: 15,
    filter: ["==", "status", "yes"],
                paint: {
        // increase intensity as zoom level increases
        'heatmap-intensity': {
        stops: [
        [11, 1],
        [15, 3]
    ]
},
// assign color values be applied to points depending on their density
'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0, 'rgba(236,222,239,0)',
    0.2, 'rgb(208,209,230)',
    0.4, 'rgb(166,189,219)',
    0.6, 'rgb(103,169,207)',
    0.8, 'rgb(28,144,153)'
],
// increase radius as zoom increases
                    'heatmap-radius': {
        stops: [
        [11, 15],
        [15, 20]
    ]
},
// decrease opacity to transition into the circle layer
                    'heatmap-opacity': {
                        default : 1,
    stops: [
        [16, 1],
        [17, 1]
    ]
},
}
}, 'waterway-label');



            map.on('click', 'heatmapdata-point', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML('<b>status:</b> ' + e.features[0].properties.status)
            .addTo(map);
    });


});

