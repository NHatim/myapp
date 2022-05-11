const computeRiskAssesment = (areaInfo) => {
    let floodingRisk;
    let fireFisk;
    let windRisk;
    let healthRisk;

    //compute floodingRisk
    let rainMaxSafe = 75; //mm3
    
    floodingRisk = (areaInfo.rainMaxAverage/rainMaxSafe/10)
    if (areaInfo.seaNerby){
        floodingRisk = floodingRisk + 0.75 * areaInfo.seismicArea;
    }
    
    if (areaInfo.lakeOrRiverNearby){
        floodingRisk = floodingRisk + 0.5 * areaInfo.seismicArea;
    }

    //compute fireRisk

    let tMaxAverage20;
    let deltaTAverage

    let average
    for (let year of areaInfo.annualTemperatureAverageList){
        average = year.temperatureMax -year.temperatureMin;
    }

    deltaTAverage = average/areaInfo.annualTemperatureAverageList.length()

    let windMax;

    let windMaxFactor = 11;
    let forestFactor = -20;
    let ruralFactor = -20;

    fireRisk = tMaxAverage20 - deltaTAverage + windMax;

    if (areaInfo.location.forest){
        forestFactor = 20
    }
    if (areaInfo.location.urban){
        ruralFactor = 20
    }
    
    fireRisk = fireRisk + forestFactor + ruralFactor;

    //compute healthRisk

    let industrialFactor;



    return ((floodingRisk)/1)
}
