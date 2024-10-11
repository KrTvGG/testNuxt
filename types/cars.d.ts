declare global {
    interface ISize {
        [key: string]: string;
    }
    interface ICharacteristic {
        charactiristic_name: string,
        charactiristic_value: string
    }
    interface ICarGalleryImage {
        ID: number;
        id: number;
        title: string;
        filename: string;
        filesize: number;
        url: string;
        link: string;
        alt: string;
        author: string;
        description: string;
        caption: string;
        name: string;
        status: string;
        uploaded_to: number;
        date: string;
        modified: string;
        menu_order: number;
        mime_type: string;
        type: string;
        subtype: string;
        icon: string;
        width: number;
        height: number;
        sizes: ISize;
    }
    interface ICar {
        id: number,
        link: string,
        slug: string,
        title: {
            rendered: string,
        },
        acf: {
            car_id: string;
            car_gallery: ICarGalleryImage[];
            charactiristics_repeater : ICharacteristic[],
            "8-14_day_rent": number,
            '4-7_day_rent': number,
            '2-3_day_rent': number,
            '1_day_rent': number,
            '14_day_more_rent': number
        },
        
    }
}
export {}