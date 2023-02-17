export type WeatherDataProps = {
    base: string
    clouds: {
        all : number
    },
    cod: number,
    coord : {
        lat: number,
        lon: number,
    },
    dt : number
    id : number
    main : {
        feels_like: number,
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    },
    name : string
    sys : {
        country: string,
        sunrise: number,
        sunset: number,
    },
    timezone: number
    visibility: number
    weather: {
        description : string,
        icon: string,
        id: number,
        main: string
    }[],
    wind: {
        deg: number,
        gust: number,
        speed: number
    }
}

export type CityWeatherProps = {
    data: {
        base: string
        clouds: {
            all : number
        },
        cod: number,
        coord : {
            lat: number,
            lon: number,
        },
        dt : number
        id : number
        main : {
            feels_like: number,
            grnd_level: number,
            humidity: number,
            pressure: number,
            sea_level: number,
            temp: number,
            temp_max: number,
            temp_min: number,
        },
        name : string
        sys : {
            country: string,
            sunrise: number,
            sunset: number,
        },
        timezone: number
        visibility: number
        weather: {
            description : string,
            icon: string,
            id: number,
            main: string
        }[],
        wind: {
            deg: number,
            gust: number,
            speed: number
        }
    }
    location: string,
    setLocation: (str: string) => void ,
    searchLocation: (e: React.KeyboardEvent<HTMLDivElement>) => void
}