import React, { useEffect } from 'react'
import { Scene, PointLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
import './style.scss'


const Virus: React.FC = () => {

    function renderChart() {
        const scene = new Scene({
            id: 'chartContainer',
            map: new Mapbox({
                pitch: 0,
                style: 'dark',
                center: [110.99215001469588, 29.281597225674773],
                zoom: 2.294613775109773,
                maxZoom: 10
            })
        });

        const data = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.308136, 30.599213]
                    },
                    "properties": {
                        "capacity": 198,
                        "city": "武汉"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [116.403613, 39.915573]
                    },
                    "properties": {
                        "capacity": 5,
                        "city": "北京"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [113.255753, 23.139278]
                    },
                    "properties": {
                        "capacity": 14,
                        "city": "广东"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [121.474216, 31.233212]
                    },
                    "properties": {
                        "capacity": 2,
                        "city": "上海"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [120.203231, 30.254829]
                    },
                    "properties": {
                        "capacity": 5,
                        "city": "浙江"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [102.71527, 25.050645]
                    },
                    "properties": {
                        "capacity": 1,
                        "city": "云南"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [104.074038, 30.65636]
                    },
                    "properties": {
                        "capacity": 2,
                        "city": "四川"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [117.00617, 36.66212]
                    },
                    "properties": {
                        "capacity": 1,
                        "city": "山东"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [108.374191, 22.816205]
                    },
                    "properties": {
                        "capacity": 1,
                        "city": "广西壮族自治区"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.172902, 22.330232]
                    },
                    "properties": {
                        "capacity": 106,
                        "city": "香港"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [106.679978, 26.605321]
                    },
                    "properties": {
                        "capacity": 1,
                        "city": "贵州省"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [123.441343, 41.803406]
                    },
                    "properties": {
                        "capacity": 1,
                        "city": "辽宁省"
                    }
                },
            ]
        }

        // data.features = data.features.filter((item: any) => {
        //     return item.properties.capacity > 800;
        // });
        const pointLayer = new PointLayer({})
            .source(data)
            .shape('circle')
            .size('capacity', [1, 10])
            .color('capacity', [
                '#34B6B7',
                '#4AC5AF',
                '#5FD3A6',
                '#7BE39E',
                '#A1EDB8',
                '#CEF8D6'
            ])
            .active(true)
            .style({
                opacity: 0.5,
                strokeWidth: 0
            });

        scene.addLayer(pointLayer);
    }


    useEffect(() => {
        renderChart()
        document.title = '疫情地图'
    })

    return (
        <div id="chartContainer" className="chart-container" />
    )
}

export default Virus