export const API_KEY='AIzaSyAdRQ7j8dg__VHmmmfy49O0Y75QiDUwB4k';

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}